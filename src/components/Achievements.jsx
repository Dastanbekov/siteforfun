import { useState } from 'react';
import AchievementCard from './AchievementCard';

const Achievements = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const achievements = [
        {
            title: 'ICPC Kyrgyzstan Regionals',
            description:
                'Competed in the prestigious International Collegiate Programming Contest (ICPC) at the regional level in Kyrgyzstan. Demonstrated strong algorithmic problem-solving skills and ability to work under pressure in a competitive programming environment.',
            badge: 'Certification',
            gradient: 'from-blue-500 to-indigo-600',
            // Replace with your icon image: '/assets/icpc-icon.png'
            iconImage: '/assets/icpc-icon.png',
            // Replace with your certificate image: '/assets/icpc-certificate.png'
            certificateImage: '/assets/icpc-certificate.png',
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
        },
        {
            title: 'CodeRun Challenge Champion',
            description:
                'Double winner of prestigious CodeRun programming challenges. Secured first place in both the Boost Challenge and Winter Challenge editions, showcasing consistent excellence in competitive programming and algorithm design.',
            badge: '2x Winner',
            gradient: 'from-orange-500 to-red-600',
            // Replace with your icon image: '/assets/coderun-icon.png'
            iconImage: '/assets/coderun-icon.png',
            // Replace with your certificate image: '/assets/coderun-certificate.png'
            certificateImage: '/assets/coderun-certificate.png',
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
            ),
        },
        {
            title: 'TSI Contest',
            description:
                'Achieved 2nd place in the TSI (Technical Skills Innovation) Contest. Demonstrated expertise in technical problem-solving and innovative thinking, competing against talented developers and engineers.',
            badge: '2nd Degree Winner',
            gradient: 'from-purple-500 to-pink-600',
            // Replace with your icon image: '/assets/tsi-icon.png'
            iconImage: '/assets/tsi-icon.png',
            // Replace with your certificate image: '/assets/tsi-certificate.png'
            certificateImage: '/assets/tsi-certificate.png',
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: 'Government Hackathon Winner',
            description:
                'Won the "Digitalization of Kyrgyz Republic" Government Hackathon with InfraMap—an urban planning analysis tool. The solution addresses chaotic urban development by providing data-driven insights for government infrastructure decisions.',
            badge: 'Winner',
            prize: '$1,200 Prize',
            gradient: 'from-emerald-500 to-teal-600',
            // Replace with your icon image: '/assets/hackathon-icon.png'
            iconImage: '/assets/hackathon-icon.png',
            // Replace with your certificate image: '/assets/hackathon-certificate.png'
            certificateImage: '/assets/hackathon-certificate.png',
            icon: (
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
    ];

    const handleCardClick = (achievement) => {
        if (achievement.certificateImage) {
            setSelectedCertificate(achievement);
        }
    };

    return (
        <section id="achievements" className="py-32 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-mono text-sm mb-4 block">
                        &lt;achievements&gt;
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Awards & <span className="gradient-text">Recognition</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        A track record of excellence in competitive programming and hackathons.
                        Turning challenges into opportunities and code into solutions.
                    </p>
                </div>

                {/* Trophy Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        { value: '4+', label: 'Competition Wins', icon: '🏆' },
                        { value: '2', label: 'Major Projects', icon: '🚀' },
                        { value: '$1.2K', label: 'Prize Money', icon: '💰' },
                        { value: '30+', label: 'Active Users', icon: '👥' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center p-6 glass rounded-xl">
                            <span className="text-3xl mb-2 block">{stat.icon}</span>
                            <span className="text-3xl font-bold gradient-text block">{stat.value}</span>
                            <span className="text-muted text-sm">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Achievement Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={achievement.title}
                            achievement={achievement}
                            index={index}
                            onClick={() => handleCardClick(achievement)}
                        />
                    ))}
                </div>

                {/* Section Footer */}
                <div className="text-center mt-16">
                    <span className="text-secondary font-mono text-sm">
                        &lt;/achievements&gt;
                    </span>
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setSelectedCertificate(null)}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedCertificate(null)}
                            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center gap-2"
                        >
                            <span className="text-sm">Close</span>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Modal Content */}
                        <div
                            className="bg-surface rounded-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Certificate Image */}
                            <div className="relative">
                                <img
                                    src={selectedCertificate.certificateImage}
                                    alt={`${selectedCertificate.title} Certificate`}
                                    className="w-full h-auto max-h-[70vh] object-contain bg-surface-light"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback if image fails */}
                                <div className="hidden items-center justify-center h-64 bg-surface-light text-muted">
                                    <div className="text-center">
                                        <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p>Certificate image not found</p>
                                        <p className="text-sm mt-2">Add: {selectedCertificate.certificateImage}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6 border-t border-surface-light">
                                <h3 className="text-xl font-bold mb-2">{selectedCertificate.title}</h3>
                                <div className="flex items-center gap-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedCertificate.gradient}`}>
                                        {selectedCertificate.badge}
                                    </span>
                                    {selectedCertificate.prize && (
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
                                            {selectedCertificate.prize}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Achievements;
