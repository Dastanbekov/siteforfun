import { useState } from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const projects = [
        {
            name: 'JumushTap',
            subtitle: 'Startup Platform for Short-term Employment',
            description:
                'A localized labor marketplace connecting employers with workers. Building the core backend architecture to handle real-time job matching, user transactions, and seamless communication between parties.',
            features: [
                'Developing core backend architecture for a localized labor marketplace',
                'Designed high-load database architecture for real-time job matching',
                'Implemented complex filtering logic and geolocation-based search queries',
                'Integrated payment gateway APIs and SMS notification services',
            ],
            tech: ['Python', 'Django', 'PostgreSQL', 'REST API', 'Redis'],
            status: 'Launching Soon',
            gradient: 'from-primary to-purple-600',
            // Replace with your actual image path: '/assets/jumushtap.png'
            image: '/assets/jumushtap.png',
            highlight: '30+ Active Users',
            highlightSub: 'Growing user base in development phase',
            highlightIcon: (
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
        },
        {
            name: 'InfraMap',
            subtitle: 'Government Urban Planning Analysis Tool',
            description:
                'A sophisticated system to identify optimal zones for state construction and infrastructure development. Solving the problem of chaotic urban development by providing data-driven insights for government agencies.',
            features: [
                'Developed system to identify optimal zones for infrastructure development',
                'Utilized PostGIS for spatial database queries and geographic analysis',
                'Created APIs for interactive map rendering and visualization',
                'Solved chaotic urban development with data-driven government insights',
            ],
            tech: ['Django', 'GeoDjango', 'PostGIS', 'PostgreSQL', 'Leaflet'],
            gradient: 'from-secondary to-cyan-600',
            // Replace with your actual image path: '/assets/inframap.png'
            image: '/assets/inframap.png',
            highlight: 'Hackathon Winner',
            highlightSub: '$1,200 Prize – Government Hackathon',
            highlightIcon: (
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="projects" className="py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-secondary font-mono text-sm mb-4 block">
                        &lt;projects&gt;
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Building scalable solutions that make a real impact. From startup platforms
                        to government tools—each project is crafted with precision and purpose.
                    </p>
                </div>

                {/* Projects */}
                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                            index={index}
                            onImageClick={() => setSelectedImage(project.image)}
                        />
                    ))}
                </div>

                {/* Section Footer */}
                <div className="text-center mt-20">
                    <span className="text-secondary font-mono text-sm">
                        &lt;/projects&gt;
                    </span>
                </div>
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl max-h-[90vh] w-full">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <img
                            src={selectedImage}
                            alt="Project screenshot"
                            className="w-full h-full object-contain rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;
