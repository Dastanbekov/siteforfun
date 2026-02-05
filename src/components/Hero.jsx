import { useEffect, useState } from 'react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'Backend Engineer';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 100);
        return () => clearInterval(timer);
    }, []);

    const socialLinks = [
        {
            name: 'Email',
            href: 'mailto:dastanbekovaitmyrza@gmail.com',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/aitdastanbekov/',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: 'Phone',
            href: 'tel:+996771125262',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
        },
        {
            name: 'GitHub',
            href: 'https://github.com/dastanbekov',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
        },
    ];

    const skills = ['Python', 'Django', 'PostgreSQL', 'REST APIs', 'PostGIS', 'Docker'];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid opacity-50" />
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow float-delay-2" />

            {/* Floating Code Elements */}
            <div className="absolute top-32 left-10 text-primary/20 font-mono text-sm animate-float hidden lg:block">
                {'const developer = {'}
            </div>
            <div className="absolute top-48 left-16 text-secondary/20 font-mono text-sm animate-float float-delay-1 hidden lg:block">
                {'  name: "Aitmyrza",'}
            </div>
            <div className="absolute bottom-32 right-10 text-accent/20 font-mono text-sm animate-float float-delay-2 hidden lg:block">
                {'};'}
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Terminal-style greeting */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-mono text-secondary">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            Available for work
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Hi, I'm{' '}
                                <span className="gradient-text">Aitmyrza</span>
                                <br />
                                <span className="text-muted">
                                    {typedText}
                                    <span className="cursor" />
                                </span>
                            </h1>
                        </div>

                        <p className="text-lg text-muted max-w-xl leading-relaxed">
                            Results-oriented Backend Engineer specializing in building{' '}
                            <span className="text-primary font-medium">high-performance RESTful APIs</span>,
                            designing complex{' '}
                            <span className="text-secondary font-medium">database architectures</span>, and
                            optimizing system efficiency. Strong background in algorithmic problem-solving
                            and database modeling.
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill) => (
                                <span key={skill} className="tech-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted hover:text-primary hover:border-primary/50 transition-all duration-300 hover:scale-110"
                                    aria-label={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="#projects"
                                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-secondary font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 rounded-xl border border-surface-light hover:border-primary/50 font-semibold transition-all duration-300 hover:bg-surface-light/50"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Code Block */}
                    <div className="hidden lg:block">
                        <div className="code-block p-6 glow">
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 pb-4 border-b border-surface-light/50 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-4 text-muted text-sm">developer.py</span>
                            </div>

                            {/* Code Content */}
                            <pre className="text-sm leading-relaxed">
                                <code>
                                    <span className="text-purple-400">class</span>{' '}
                                    <span className="text-yellow-300">BackendEngineer</span>:
                                    {'\n'}
                                    <span className="text-muted">    """A passionate developer"""</span>
                                    {'\n\n'}
                                    <span className="text-purple-400">    def</span>{' '}
                                    <span className="text-blue-400">__init__</span>
                                    <span className="text-text">(self):</span>
                                    {'\n'}
                                    <span className="text-text">        self.</span>
                                    <span className="text-cyan-300">name</span>
                                    <span className="text-text"> = </span>
                                    <span className="text-green-400">"Aitmyrza"</span>
                                    {'\n'}
                                    <span className="text-text">        self.</span>
                                    <span className="text-cyan-300">role</span>
                                    <span className="text-text"> = </span>
                                    <span className="text-green-400">"Backend Engineer"</span>
                                    {'\n'}
                                    <span className="text-text">        self.</span>
                                    <span className="text-cyan-300">skills</span>
                                    <span className="text-text"> = [</span>
                                    {'\n'}
                                    <span className="text-green-400">            "Python", "Django",</span>
                                    {'\n'}
                                    <span className="text-green-400">            "PostgreSQL", "PostGIS",</span>
                                    {'\n'}
                                    <span className="text-green-400">            "REST APIs", "Docker"</span>
                                    {'\n'}
                                    <span className="text-text">        ]</span>
                                    {'\n\n'}
                                    <span className="text-purple-400">    def</span>{' '}
                                    <span className="text-blue-400">get_passion</span>
                                    <span className="text-text">(self):</span>
                                    {'\n'}
                                    <span className="text-purple-400">        return</span>
                                    <span className="text-green-400"> "Building scalable systems"</span>
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
        </section>
    );
};

export default Hero;
