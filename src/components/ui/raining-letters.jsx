import { useState, useEffect, useCallback, memo } from 'react';

const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
const CHAR_COUNT = 200; // Reduced for performance

const RainingLetters = memo(() => {
    const [characters, setCharacters] = useState([]);
    const [activeIndices, setActiveIndices] = useState(new Set());

    // Create initial characters
    const createCharacters = useCallback(() => {
        const newCharacters = [];
        for (let i = 0; i < CHAR_COUNT; i++) {
            newCharacters.push({
                char: ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)],
                x: Math.random() * 100,
                y: Math.random() * 100,
                speed: 0.05 + Math.random() * 0.15, // Slower for less CPU
            });
        }
        return newCharacters;
    }, []);

    useEffect(() => {
        setCharacters(createCharacters());
    }, [createCharacters]);

    // Flicker effect
    useEffect(() => {
        const updateActiveIndices = () => {
            const newActiveIndices = new Set();
            const numActive = Math.floor(Math.random() * 2) + 2;
            for (let i = 0; i < numActive; i++) {
                newActiveIndices.add(Math.floor(Math.random() * CHAR_COUNT));
            }
            setActiveIndices(newActiveIndices);
        };

        const flickerInterval = setInterval(updateActiveIndices, 100); // Slower flicker
        return () => clearInterval(flickerInterval);
    }, []);

    // Animation loop
    useEffect(() => {
        let animationFrameId;
        let lastTime = 0;
        const fps = 30; // Limit FPS for performance
        const frameInterval = 1000 / fps;

        const updatePositions = (timestamp) => {
            if (timestamp - lastTime >= frameInterval) {
                lastTime = timestamp;
                setCharacters(prevChars =>
                    prevChars.map(char => ({
                        ...char,
                        y: char.y >= 100 ? -5 : char.y + char.speed,
                        ...(char.y >= 100 && {
                            x: Math.random() * 100,
                            char: ALL_CHARS[Math.floor(Math.random() * ALL_CHARS.length)],
                        }),
                    }))
                );
            }
            animationFrameId = requestAnimationFrame(updatePositions);
        };

        animationFrameId = requestAnimationFrame(updatePositions);
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {characters.map((char, index) => (
                <span
                    key={index}
                    className={`absolute transition-colors duration-100 font-mono ${activeIndices.has(index)
                            ? "text-primary scale-110 font-bold"
                            : "text-neutral-700"
                        }`}
                    style={{
                        left: `${char.x}%`,
                        top: `${char.y}%`,
                        transform: 'translate(-50%, -50%)',
                        fontSize: activeIndices.has(index) ? '1.5rem' : '1.2rem',
                        textShadow: activeIndices.has(index)
                            ? '0 0 10px rgba(99, 102, 241, 0.8), 0 0 20px rgba(99, 102, 241, 0.4)'
                            : 'none',
                        opacity: activeIndices.has(index) ? 1 : 0.3,
                        willChange: 'top',
                    }}
                >
                    {char.char}
                </span>
            ))}
        </div>
    );
});

RainingLetters.displayName = 'RainingLetters';

export default RainingLetters;
