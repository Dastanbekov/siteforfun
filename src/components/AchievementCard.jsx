import { memo } from 'react';

const AchievementCard = memo(({ achievement, index, onClick }) => {
    return (
        <div
            className="group relative cursor-pointer"
            onClick={onClick}
        >
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

            <div className="relative rounded-xl p-5 h-full flex flex-col bg-surface/30 border border-surface-light/20 hover:border-surface-light/40 transition-colors">
                {/* Icon/Image */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 overflow-hidden`}>
                    {achievement.iconImage ? (
                        <img
                            src={achievement.iconImage}
                            alt={achievement.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                    ) : null}
                    <svg
                        className={`w-6 h-6 text-white ${achievement.iconImage ? 'hidden' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">
                        {achievement.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                        {achievement.description}
                    </p>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.gradient}`}>
                        {achievement.badge}
                    </span>
                    {achievement.prize && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
                            {achievement.prize}
                        </span>
                    )}
                </div>

                {/* View hint */}
                {achievement.certificateImage && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="px-2 py-1 rounded bg-black/60 text-white text-xs flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default AchievementCard;
