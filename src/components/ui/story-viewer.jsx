import { useState, useRef, useEffect, useCallback, memo, forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

const DEFAULT_IMAGE_DURATION = 5000;

const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

// Progress bar
const ProgressBar = memo(({ count, currentIndex, progress, viewedIndices }) => (
    <div className="flex gap-1 w-full px-2">
        {Array.from({ length: count }).map((_, index) => {
            const isActive = index === currentIndex;
            const isPast = index < currentIndex;
            return (
                <div key={index} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-white rounded-full"
                        initial={{ width: isPast ? "100%" : "0%" }}
                        animate={{ width: isActive ? `${progress}%` : isPast ? "100%" : "0%" }}
                        transition={{ duration: 0.1, ease: "linear" }}
                    />
                </div>
            );
        })}
    </div>
));
ProgressBar.displayName = 'ProgressBar';

// Story thumbnail
const StoryThumbnail = memo(({ stories, username, gradient, viewedIndices, onClick }) => {
    const allViewed = viewedIndices.size === stories.length;
    const thumbnailImage = stories[0]?.src;

    return (
        <button
            type="button"
            onClick={onClick}
            className="relative flex flex-col items-center gap-2 group cursor-pointer bg-transparent border-none outline-none"
        >
            <div className="relative w-[72px] h-[72px]">
                {/* Ring indicator */}
                <div className={cn(
                    "absolute inset-0 rounded-full p-[3px]",
                    allViewed
                        ? "bg-neutral-600"
                        : `bg-gradient-to-tr ${gradient}`
                )}>
                    <div className="w-full h-full rounded-full bg-black p-[2px]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-neutral-800">
                            <img
                                src={thumbnailImage}
                                alt={username}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <span className="text-xs text-neutral-400 truncate max-w-[80px]">{username}</span>
        </button>
    );
});
StoryThumbnail.displayName = 'StoryThumbnail';

// Modal viewer
const StoryViewerModal = memo(({ stories, username, avatar, gradient, initialIndex, viewedIndices, onClose, onStoryChange }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [localViewedIndices, setLocalViewedIndices] = useState(() => viewedIndices);

    const containerRef = useRef(null);
    const progressIntervalRef = useRef(null);
    const startTimeRef = useRef(0);
    const elapsedRef = useRef(0);

    const currentStory = stories[currentIndex];
    const duration = currentStory?.duration || DEFAULT_IMAGE_DURATION;

    const goToNext = useCallback(() => {
        if (currentIndex < stories.length - 1) {
            setDirection(1);
            setCurrentIndex(prev => prev + 1);
            setProgress(0);
            elapsedRef.current = 0;
            setIsLoaded(false);
        } else {
            onClose();
        }
    }, [currentIndex, stories.length, onClose]);

    const goToPrevious = useCallback(() => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(prev => prev - 1);
            setProgress(0);
            elapsedRef.current = 0;
            setIsLoaded(false);
        } else {
            setProgress(0);
            elapsedRef.current = 0;
        }
    }, [currentIndex]);

    useEffect(() => {
        setLocalViewedIndices(prev => new Set([...prev, currentIndex]));
        onStoryChange(currentIndex);
    }, [currentIndex, onStoryChange]);

    // Progress timer for images
    useEffect(() => {
        if (isPaused || !isLoaded) {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
            return;
        }

        startTimeRef.current = Date.now() - elapsedRef.current;

        progressIntervalRef.current = setInterval(() => {
            const elapsed = Date.now() - startTimeRef.current;
            elapsedRef.current = elapsed;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);
            if (newProgress >= 100) goToNext();
        }, 50);

        return () => {
            if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
        };
    }, [isPaused, duration, goToNext, isLoaded]);

    useEffect(() => {
        setProgress(0);
        elapsedRef.current = 0;
        startTimeRef.current = Date.now();
    }, [currentIndex]);

    const handleImageLoad = useCallback(() => setIsLoaded(true), []);

    const handleTap = useCallback((e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        if (x < rect.width / 2) goToPrevious();
        else goToNext();
    }, [goToNext, goToPrevious]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') goToPrevious();
            else if (e.key === 'ArrowRight') goToNext();
            else if (e.key === 'Escape') onClose();
            else if (e.key === ' ') { e.preventDefault(); setIsPaused(prev => !prev); }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious, onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                ref={containerRef}
                className="relative w-full h-full max-w-lg mx-auto flex flex-col overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onPointerDown={() => setIsPaused(true)}
                onPointerUp={() => setIsPaused(false)}
                onPointerLeave={() => setIsPaused(false)}
            >
                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-10 pt-2 pb-4 bg-gradient-to-b from-black/60 to-transparent">
                    <ProgressBar count={stories.length} currentIndex={currentIndex} progress={progress} viewedIndices={localViewedIndices} />
                    <div className="flex items-center justify-between px-4 mt-3">
                        <div className="flex items-center gap-3">
                            <div className={cn("w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br", gradient)}>
                                {avatar && <img src={avatar} alt={username} className="w-full h-full object-cover" />}
                            </div>
                            <span className="text-white text-sm font-medium">{username}</span>
                        </div>
                        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="h-8 w-8 text-white hover:bg-white/20 rounded-md flex items-center justify-center">
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center justify-center overflow-hidden select-none relative" onClick={handleTap}>
                    {!isLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <Loader2 className="w-10 h-10 text-white animate-spin" />
                        </div>
                    )}
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={currentStory.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="absolute inset-0 flex items-center justify-center p-4"
                        >
                            <img
                                src={currentStory.src}
                                alt=""
                                className={cn("max-w-full max-h-full object-contain rounded-lg transition-opacity", isLoaded ? "opacity-100" : "opacity-0")}
                                onLoad={handleImageLoad}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation (desktop) */}
                <div className="hidden md:flex absolute inset-y-0 left-0 right-0 items-center justify-between pointer-events-none px-4">
                    <button
                        className={cn("h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 pointer-events-auto flex items-center justify-center", currentIndex === 0 && "opacity-50")}
                        onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
                        disabled={currentIndex === 0}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        className="h-10 w-10 rounded-full bg-white/10 text-white hover:bg-white/20 pointer-events-auto flex items-center justify-center"
                        onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
});
StoryViewerModal.displayName = 'StoryViewerModal';

// Main component
const StoryViewer = forwardRef(({ stories, username, avatar, gradient, onStoryView, onAllStoriesViewed, className }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [viewedIndices, setViewedIndices] = useState(new Set());

    const firstUnviewedIndex = (() => {
        for (let i = 0; i < stories.length; i++) {
            if (!viewedIndices.has(i)) return i;
        }
        return 0;
    })();

    const handleStoryChange = useCallback((index) => {
        setViewedIndices(prev => {
            const next = new Set(prev);
            next.add(index);
            if (next.size === stories.length && onAllStoriesViewed) onAllStoriesViewed();
            return next;
        });
        if (onStoryView) onStoryView(stories[index].id);
    }, [stories, onStoryView, onAllStoriesViewed]);

    return (
        <>
            <div ref={ref} className={className}>
                <StoryThumbnail stories={stories} username={username} gradient={gradient} viewedIndices={viewedIndices} onClick={() => setIsOpen(true)} />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <StoryViewerModal
                        stories={stories}
                        username={username}
                        avatar={avatar}
                        gradient={gradient}
                        initialIndex={firstUnviewedIndex}
                        viewedIndices={viewedIndices}
                        onClose={() => setIsOpen(false)}
                        onStoryChange={handleStoryChange}
                    />
                )}
            </AnimatePresence>
        </>
    );
});

StoryViewer.displayName = 'StoryViewer';

export { StoryViewer };
