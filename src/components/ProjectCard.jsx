const ProjectCard = ({ project, index, onImageClick }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
            {/* Project Image */}
            <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                <div className="relative group cursor-pointer" onClick={onImageClick}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative animated-border overflow-hidden">
                        {project.image ? (
                            <div className="aspect-video bg-surface overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        // Fallback to placeholder if image fails to load
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-surface to-surface-light items-center justify-center p-8 hidden">
                                    <div className="text-center">
                                        <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-muted text-sm">Add image: /assets/{project.name.toLowerCase()}.png</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="aspect-video bg-gradient-to-br from-surface to-surface-light flex items-center justify-center p-8">
                                <div className="text-center">
                                    <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-2xl font-bold gradient-text">{project.name}</h4>
                                </div>
                            </div>
                        )}

                        {/* Status Badge */}
                        {project.status && (
                            <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-medium flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                {project.status}
                            </div>
                        )}

                        {/* Click to enlarge hint */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-4 py-2 rounded-lg text-white text-sm">
                                Click to enlarge
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                <div>
                    <span className="text-secondary font-mono text-sm mb-2 block">
                        Featured Project
                    </span>
                    <h3 className="text-3xl font-bold mb-2">{project.name}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                </div>

                <div className="glass p-6 rounded-xl">
                    <p className="text-muted leading-relaxed">{project.description}</p>
                </div>

                {/* Key Features */}
                <ul className="space-y-3">
                    {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted">
                            <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Stats or Highlights */}
                {project.highlight && (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                            {project.highlightIcon}
                        </div>
                        <div>
                            <p className="font-semibold text-text">{project.highlight}</p>
                            <p className="text-sm text-muted">{project.highlightSub}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
