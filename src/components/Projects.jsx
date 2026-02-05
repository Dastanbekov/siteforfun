import { useState, memo } from 'react';
import ProjectCard from './ProjectCard';
import { TubesBackground } from './ui/neon-flow';

const projects = [
    {
        name: 'JumushTap',
        subtitle: 'Startup Platform for Short-term Employment',
        description: 'A localized labor marketplace connecting employers with workers. Building the core backend architecture to handle real-time job matching, user transactions, and seamless communication.',
        features: [
            'Core backend architecture for localized labor marketplace',
            'High-load database architecture for real-time job matching',
            'Complex filtering logic and geolocation-based search queries',
            'Payment gateway APIs and SMS notification services',
        ],
        tech: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Redis'],
        status: 'Launching Soon',
        gradient: 'from-primary to-purple-600',
        image: '/assets/jumushtap.png',
        highlight: '30+ Active Users',
        highlightSub: 'Growing user base in development phase',
    },
    {
        name: 'InfraMap',
        subtitle: 'Government Urban Planning Analysis Tool',
        description: 'A sophisticated system to identify optimal zones for state construction and infrastructure development. Solving chaotic urban development with data-driven insights.',
        features: [
            'System to identify optimal zones for infrastructure',
            'PostGIS for spatial database queries and geographic analysis',
            'APIs for interactive map rendering and visualization',
            'Data-driven government insights for urban planning',
        ],
        tech: ['Django', 'GeoDjango', 'PostGIS', 'PostgreSQL', 'Leaflet'],
        gradient: 'from-secondary to-cyan-600',
        image: '/assets/inframap.png',
        highlight: 'Hackathon Winner',
        highlightSub: '$1,200 Prize – Government Hackathon',
    },
];

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Container with Neon Flow Background */}
                <div className="w-full rounded-2xl overflow-hidden relative">
                    <TubesBackground className="min-h-[800px]" enableClickInteraction={true}>
                        <div className="bg-black/60 backdrop-blur-sm p-8 lg:p-12 min-h-full">
                            {/* Header */}
                            <div className="text-center mb-16">
                                <span className="text-secondary font-mono text-sm mb-4 block opacity-50">&lt;projects&gt;</span>
                                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                                    Featured <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Projects</span>
                                </h2>
                                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                                    Building scalable solutions that make a real impact.
                                </p>
                                <p className="text-neutral-600 text-xs mt-2">Click background to randomize colors</p>
                            </div>

                            {/* Projects */}
                            <div className="space-y-20 pointer-events-auto">
                                {projects.map((project, index) => (
                                    <ProjectCard key={project.name} project={project} index={index} onImageClick={() => setSelectedImage(project.image)} />
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="text-center mt-16">
                                <span className="text-secondary font-mono text-sm opacity-50">&lt;/projects&gt;</span>
                            </div>
                        </div>
                    </TubesBackground>
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-5xl max-h-[90vh] w-full">
                        <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-primary transition-colors">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                        <img src={selectedImage} alt="Project" className="w-full h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
                    </div>
                </div>
            )}
        </section>
    );
};

export default memo(Projects);
