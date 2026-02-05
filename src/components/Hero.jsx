import { useEffect, useState, memo, useMemo } from 'react';
import { SplineScene } from './ui/spline';

const SKILLS = ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'PostGIS', 'Docker'];
const FULL_TEXT = 'Backend Engineer';

const SOCIAL_LINKS = [
    { name: 'Email', href: 'mailto:dastanbekovaitmyrza@gmail.com', path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', fill: false },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aitdastanbekov/', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', fill: true },
    { name: 'Phone', href: 'tel:+996771125262', path: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', fill: false },
    { name: 'GitHub', href: 'https://github.com/dastanbekov', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', fill: true },
];

// Optimized components with displayName
const SocialIcon = memo(({ path, fill }) => (
    <svg className="w-5 h-5" fill={fill ? 'currentColor' : 'none'} stroke={fill ? undefined : 'currentColor'} viewBox="0 0 24 24">
        {fill ? <path d={path} /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />}
    </svg>
));
SocialIcon.displayName = 'SocialIcon';

const SocialLink = memo(({ link }) => (
    <a
        href={link.href}
        target={link.href.startsWith('http') ? '_blank' : undefined}
        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary/50 transition-colors"
        aria-label={link.name}
    >
        <SocialIcon path={link.path} fill={link.fill} />
    </a>
));
SocialLink.displayName = 'SocialLink';

const SkillBadge = memo(({ skill }) => (
    <span className="tech-badge">{skill}</span>
));
SkillBadge.displayName = 'SkillBadge';

const ScrollIndicator = memo(() => (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary" />
        </div>
    </div>
));
ScrollIndicator.displayName = 'ScrollIndicator';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const [showSpline, setShowSpline] = useState(false);

    // Typing animation
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= FULL_TEXT.length) {
                setTypedText(FULL_TEXT.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);
        return () => clearInterval(timer);
    }, []);

    // Defer Spline load
    useEffect(() => {
        if ('requestIdleCallback' in window) {
            const id = requestIdleCallback(() => setShowSpline(true), { timeout: 500 });
            return () => cancelIdleCallback(id);
        } else {
            const timer = setTimeout(() => setShowSpline(true), 300);
            return () => clearTimeout(timer);
        }
    }, []);

    const skillsRender = useMemo(() => SKILLS.map((skill) => <SkillBadge key={skill} skill={skill} />), []);
    const socialLinksRender = useMemo(() => SOCIAL_LINKS.map((link) => <SocialLink key={link.name} link={link} />), []);

    return (
        <section id="about" className="min-h-screen relative pt-8 pb-20 contain-layout">
            <div className="max-w-7xl mx-auto px-6">
                <div className="w-full min-h-[85vh] bg-white/[0.02] border border-white/10 rounded-2xl">
                    <div className="flex flex-col lg:flex-row h-full min-h-[85vh]">
                        {/* Left */}
                        <div className="flex-1 p-8 lg:p-12 relative z-10 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-secondary mb-6 w-fit">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                Available for work
                            </div>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Aitmyrza</span>
                                <br />
                                <span className="text-neutral-500">{typedText}<span className="inline-block w-0.5 h-[1em] bg-secondary ml-1 animate-blink" /></span>
                            </h1>

                            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed mb-6">
                                Results-oriented Backend Engineer specializing in <span className="text-primary font-medium">high-performance RESTful APIs</span>, complex <span className="text-secondary font-medium">database architectures</span>, and system optimization.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">{skillsRender}</div>
                            <div className="flex items-center gap-4 mb-6">{socialLinksRender}</div>

                            <div className="flex flex-wrap gap-4">
                                <a href="#projects" className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 font-semibold transition-colors hover:to-secondary">View My Work</a>
                                <a href="#contact" className="px-8 py-4 rounded-xl border border-white/10 font-semibold transition-colors hover:border-white/30 hover:bg-white/5">Contact Me</a>
                            </div>
                        </div>

                        {/* Right - 3D */}
                        <div className="flex-1 relative min-h-[400px] lg:min-h-0 contain-layout">
                            {showSpline && <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />}
                        </div>
                    </div>
                </div>
            </div>
            <ScrollIndicator />
        </section>
    );
};

Hero.displayName = 'Hero';

export default memo(Hero);
