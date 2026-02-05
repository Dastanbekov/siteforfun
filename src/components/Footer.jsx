import { memo, useMemo } from 'react';

const socialLinks = [
    { name: 'Email', href: 'mailto:dastanbekovaitmyrza@gmail.com', path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', fill: false },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aitdastanbekov/', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', fill: true },
    { name: 'GitHub', href: 'https://github.com/dastanbekov', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', fill: true },
    { name: 'Phone', href: 'tel:+996771125262', path: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', fill: false },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinksRender = useMemo(() => socialLinks.map((link) => (
        <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-primary hover:border-primary/50 transition-colors"
            aria-label={link.name}
        >
            <svg className="w-5 h-5" fill={link.fill ? 'currentColor' : 'none'} stroke={link.fill ? 'none' : 'currentColor'} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.path} />
            </svg>
        </a>
    )), []);

    return (
        <footer id="contact" className="py-12 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-8 lg:p-10">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Left */}
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-mono font-bold text-lg">AD</div>
                                <div>
                                    <h3 className="font-bold text-lg text-white">Aitmyrza Dastanbekov</h3>
                                    <p className="text-neutral-500 text-sm">Backend Engineer</p>
                                </div>
                            </div>
                            <p className="text-neutral-400 max-w-md text-sm leading-relaxed">
                                Passionate about building scalable backend systems. Always open to new opportunities.
                            </p>
                            <div className="flex items-center gap-3">{socialLinksRender}</div>
                        </div>

                        {/* Right */}
                        <div className="lg:text-right space-y-5">
                            <h4 className="text-xl font-bold">
                                Let's Build Something <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Amazing</span>
                            </h4>
                            <p className="text-neutral-500 text-sm">Have a project? Let's connect.</p>
                            <div className="flex flex-wrap gap-3 lg:justify-end">
                                <a href="mailto:dastanbekovaitmyrza@gmail.com" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-primary/80 font-medium text-sm transition-colors hover:to-secondary inline-flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    Email Me
                                </a>
                                <a href="tel:+996771125262" className="px-5 py-2.5 rounded-lg border border-white/10 font-medium text-sm transition-colors hover:border-white/30 inline-flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    +996 771 125 262
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
                        <p>© {currentYear} Aitmyrza Dastanbekov</p>
                        <p className="flex items-center gap-1">Built with <span className="text-red-500">❤</span> React & Tailwind</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
