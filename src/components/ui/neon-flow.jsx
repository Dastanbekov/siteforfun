import { useEffect, useRef, useState, memo } from 'react';
import { cn } from '../../lib/utils';

// Helper for random colors
const randomColors = (count) => {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

function TubesBackgroundInner({ children, className, enableClickInteraction = true }) {
    const canvasRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const tubesRef = useRef(null);

    useEffect(() => {
        let mounted = true;
        let cleanup;

        const initTubes = async () => {
            if (!canvasRef.current) return;

            try {
                // Load the tubes library dynamically
                const module = await import('https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js');
                const TubesCursor = module.default;

                if (!mounted) return;

                const app = TubesCursor(canvasRef.current, {
                    tubes: {
                        colors: ["#6366f1", "#8b5cf6", "#06b6d4"], // primary, purple, cyan
                        lights: {
                            intensity: 150,
                            colors: ["#10b981", "#f59e0b", "#ef4444", "#3b82f6"]
                        }
                    }
                });

                tubesRef.current = app;
                setIsLoaded(true);

                cleanup = () => { };
            } catch (error) {
                console.error("Failed to load TubesCursor:", error);
            }
        };

        initTubes();

        return () => {
            mounted = false;
            if (cleanup) cleanup();
        };
    }, []);

    const handleClick = () => {
        if (!enableClickInteraction || !tubesRef.current) return;

        const colors = randomColors(3);
        const lightsColors = randomColors(4);

        tubesRef.current.tubes.setColors(colors);
        tubesRef.current.tubes.setLightsColors(lightsColors);
    };

    return (
        <div
            className={cn("relative w-full h-full overflow-hidden", className)}
            onClick={handleClick}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
                style={{ touchAction: 'none' }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}

export const TubesBackground = memo(TubesBackgroundInner);
export default TubesBackground;
