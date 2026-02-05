import { Suspense, lazy, memo, useState, useEffect } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

// Check if mobile device
const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check screen width and touch capability
            const mobile = window.innerWidth < 1024 ||
                ('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0);
            setIsMobile(mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

// Static fallback for mobile - no GPU usage
const MobileFallback = memo(() => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-black to-secondary/10 relative overflow-hidden">
        {/* Animated gradient orbs - CSS only, very light */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Robot emoji as placeholder */}
        <div className="relative z-10 text-center">
            <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>🤖</div>
            <p className="text-neutral-500 text-sm font-mono">3D on desktop</p>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-30" />
    </div>
));

MobileFallback.displayName = 'MobileFallback';

function SplineSceneInner({ scene, className }) {
    const isMobile = useIsMobile();

    // On mobile - show lightweight fallback
    if (isMobile) {
        return (
            <div className={`${className} relative`}>
                <MobileFallback />
            </div>
        );
    }

    // On desktop - show full 3D
    return (
        <div className={`${className} relative`}>
            <Suspense fallback={<MobileFallback />}>
                <Spline scene={scene} className="w-full h-full" />
            </Suspense>
        </div>
    );
}

SplineSceneInner.displayName = 'SplineScene';

export const SplineScene = memo(SplineSceneInner);
