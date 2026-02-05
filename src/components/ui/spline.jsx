import { Suspense, lazy, useState, useEffect, useRef, memo } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

// Ultra-optimized loading placeholder
const LoadingPlaceholder = memo(() => (
    <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 relative">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
                <div className="absolute inset-0 rounded-full border-2 border-t-primary animate-spin" />
            </div>
            <span className="text-neutral-500 text-xs font-mono">3D</span>
        </div>
    </div>
));

LoadingPlaceholder.displayName = 'LoadingPlaceholder';

function SplineSceneInner({ scene, className }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const containerRef = useRef(null);

    // Intersection Observer - start loading when near viewport
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0, rootMargin: '200px' } // Pre-load 200px before visible
        );

        observer.observe(container);
        return () => observer.disconnect();
    }, []);

    // Defer actual rendering to idle time
    useEffect(() => {
        if (!isVisible) return;

        if ('requestIdleCallback' in window) {
            const id = requestIdleCallback(() => setShouldRender(true), { timeout: 1000 });
            return () => cancelIdleCallback(id);
        } else {
            const timer = setTimeout(() => setShouldRender(true), 100);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    const handleLoad = () => {
        // Use RAF to ensure smooth transition
        requestAnimationFrame(() => setIsLoaded(true));
    };

    return (
        <div
            ref={containerRef}
            className={`${className} relative contain-layout`}
            style={{
                willChange: isLoaded ? 'auto' : 'opacity',
                containIntrinsicSize: '400px',
            }}
        >
            {shouldRender ? (
                <Suspense fallback={<LoadingPlaceholder />}>
                    <div
                        className="w-full h-full gpu-accelerate"
                        style={{
                            opacity: isLoaded ? 1 : 0,
                            transition: 'opacity 0.4s ease-out',
                        }}
                    >
                        <Spline scene={scene} onLoad={handleLoad} />
                    </div>
                    {!isLoaded && (
                        <div className="absolute inset-0 z-10">
                            <LoadingPlaceholder />
                        </div>
                    )}
                </Suspense>
            ) : (
                <LoadingPlaceholder />
            )}
        </div>
    );
}

SplineSceneInner.displayName = 'SplineScene';

export const SplineScene = memo(SplineSceneInner);
