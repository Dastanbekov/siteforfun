import { memo } from 'react';

const ProjectCard = memo(({ project, index, onImageClick }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
            {/* Project Image */}
            <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                <div className="relative group cursor-pointer" onClick={onImageClick}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative rounded-xl overflow-hidden border border-surface-light/30 bg-surface/50">
                        {project.image ? (
                            <div className="aspect-video bg-black/50 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />
                                {/* Fallback placeholder */}
                                <div className="aspect-video bg-gradient-to-br from-surface to-black items-center justify-center p-8 hidden">
                                    <div className="text-center">
                                        <div className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className="text-muted text-sm">Add: /assets/{project.name.toLowerCase()}.png</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="aspect-video bg-gradient-to-br from-surface to-black flex items-center justify-center p-8">
                                <div className="text-center">
                                    <div className={`w-20 h-20 mx-auto rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-4`}>
                                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{project.name}</h4>
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

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-4 py-2 rounded-lg text-white text-sm">
                                Click to enlarge
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className={`space-y-5 ${!isEven ? 'lg:order-1' : ''}`}>
                <div>
                    <span className="text-secondary font-mono text-xs mb-2 block opacity-60">Featured Project</span>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">{project.name}</h3>
                    <p className="text-primary font-medium">{project.subtitle}</p>
                </div>

                <div className="p-5 rounded-xl bg-surface/30 border border-surface-light/20">
                    <p className="text-neutral-400 leading-relaxed text-sm">{project.description}</p>
                </div>

                {/* Key Features */}
                <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                            <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-surface-light/30 text-secondary border border-secondary/20">
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Highlight */}
                {project.highlight && (
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-white text-sm">{project.highlight}</p>
                            <p className="text-xs text-neutral-400">{project.highlightSub}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
});

export default ProjectCard;
