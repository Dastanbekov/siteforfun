const AchievementCard = ({ achievement, index, onClick }) => {
    return (
        <div
            className="group relative card-hover cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
            onClick={onClick}
        >
            {/* Glow Effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

            <div className="relative glass rounded-2xl p-6 h-full flex flex-col">
                {/* Icon/Image */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                    {achievement.iconImage ? (
                        <img
                            src={achievement.iconImage}
                            alt={achievement.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        achievement.icon
                    )}
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                    </h3>
                    <p className="text-muted text-sm mb-4 leading-relaxed">
                        {achievement.description}
                    </p>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${achievement.gradient} bg-opacity-10`}>
                        {achievement.badge}
                    </span>
                    {achievement.prize && (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent border border-accent/30">
                            {achievement.prize}
                        </span>
                    )}
                </div>

                {/* View Certificate Hint */}
                {achievement.certificateImage && (
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="px-2 py-1 rounded bg-black/50 text-white text-xs flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View Certificate
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AchievementCard;
