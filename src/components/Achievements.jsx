import { useState, memo, useMemo } from 'react';
import { Trophy, Rocket, DollarSign, Users } from 'lucide-react';
import AchievementCard from './AchievementCard';

const achievements = [
    { title: 'ICPC Kyrgyzstan Regionals', description: 'Competed in ICPC at the regional level. Demonstrated strong algorithmic problem-solving under competitive pressure.', badge: 'Certification', gradient: 'from-blue-500 to-indigo-600', iconImage: '/assets/icpc-icon.png', certificateImage: '/assets/icpc-certificate.png' },
    { title: 'CodeRun Challenge Champion', description: 'Double winner of CodeRun challenges. First place in Boost Challenge and Winter Challenge.', badge: '2x Winner', gradient: 'from-orange-500 to-red-600', iconImage: '/assets/coderun-icon.png', certificateImage: '/assets/coderun-certificate.png' },
    { title: 'TSI Contest', description: 'Achieved 2nd place in TSI Contest. Demonstrated expertise in technical problem-solving.', badge: '2nd Degree', gradient: 'from-purple-500 to-pink-600', iconImage: '/assets/tsi-icon.png' },
    { title: 'Government Hackathon', description: 'Won "Digitalization of Kyrgyz Republic" Hackathon with InfraMap urban planning tool.', badge: 'Winner', prize: '$1,200', gradient: 'from-emerald-500 to-teal-600', certificateImage: '/assets/hackathon-certificate.png' },
];

const stats = [
    { value: '4+', label: 'Wins', Icon: Trophy },
    { value: '2', label: 'Projects', Icon: Rocket },
    { value: '$1.2K', label: 'Prize', Icon: DollarSign },
    { value: '30+', label: 'Users', Icon: Users },
];

const Achievements = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const statsRender = useMemo(() => stats.map((stat, i) => (
        <div key={i} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
            <stat.Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 block">{stat.value}</span>
            <span className="text-neutral-500 text-xs">{stat.label}</span>
        </div>
    )), []);

    return (
        <section id="achievements" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-8 lg:p-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <span className="text-secondary font-mono text-sm mb-4 block opacity-50">&lt;achievements&gt;</span>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                            Awards & <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Recognition</span>
                        </h2>
                        <p className="text-neutral-500 text-lg max-w-2xl mx-auto">Excellence in competitive programming and hackathons.</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-4 mb-12">{statsRender}</div>

                    {/* Achievement Cards */}
                    <div className="grid md:grid-cols-2 gap-5">
                        {achievements.map((achievement, index) => (
                            <AchievementCard
                                key={achievement.title}
                                achievement={achievement}
                                index={index}
                                onClick={() => achievement.certificateImage && setSelectedCertificate(achievement)}
                            />
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-12">
                        <span className="text-secondary font-mono text-sm opacity-50">&lt;/achievements&gt;</span>
                    </div>
                </div>
            </div>

            {/* Certificate Modal */}
            {selectedCertificate && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedCertificate(null)}>
                    <div className="relative max-w-4xl max-h-[90vh] w-full">
                        <button onClick={() => setSelectedCertificate(null)} className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center gap-2">
                            <span className="text-sm">Close</span>
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <div className="bg-black/80 border border-white/10 rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            <img src={selectedCertificate.certificateImage} alt={`${selectedCertificate.title} Certificate`} className="w-full h-auto max-h-[70vh] object-contain" />
                            <div className="p-5 border-t border-white/10">
                                <h3 className="text-lg font-bold text-white mb-2">{selectedCertificate.title}</h3>
                                <div className="flex items-center gap-2">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${selectedCertificate.gradient}`}>{selectedCertificate.badge}</span>
                                    {selectedCertificate.prize && <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">{selectedCertificate.prize}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default memo(Achievements);
