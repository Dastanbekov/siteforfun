import { memo } from 'react';
import { Camera } from 'lucide-react';
import { StoryViewer } from './ui/story-viewer';

/**
 * ИНСТРУКЦИЯ: Как добавлять Stories
 * 
 * 1. Добавь фотки в папку: public/assets/stories/
 *    Например: public/assets/stories/photo1.jpg
 * 
 * 2. Добавь новый объект в массив stories ниже:
 *    {
 *      username: 'Название',              // Подпись под кружком
 *      gradient: 'from-blue-500 to-indigo-600',  // Цвет кольца
 *      avatar: '/assets/stories/icon.png',       // Иконка кружка
 *      stories: [
 *        { id: 'unique-id-1', type: 'image', src: '/assets/stories/photo1.jpg' },
 *        { id: 'unique-id-2', type: 'image', src: '/assets/stories/photo2.jpg' },
 *      ],
 *    }
 * 
 * 3. Градиенты на выбор:
 *    - from-blue-500 to-indigo-600
 *    - from-orange-500 to-red-600
 *    - from-purple-500 to-pink-600
 *    - from-emerald-500 to-teal-600
 *    - from-cyan-500 to-blue-600
 *    - from-pink-500 to-rose-600
 */

const stories = [
    {
        username: 'Hackathon',
        gradient: 'from-emerald-500 to-teal-600',
        avatar: '/assets/hackathon-certificate.png',
        stories: [
            { id: 'hack-1', type: 'image', src: '/assets/hackathon-certificate.png' },
        ],
    },
    {
        username: 'ICPC',
        gradient: 'from-blue-500 to-indigo-600',
        avatar: '/assets/icpc-icon.png',
        stories: [
            { id: 'icpc-1', type: 'image', src: '/assets/icpc-certificate.png' },
        ],
    },
    {
        username: 'CodeRun',
        gradient: 'from-orange-500 to-red-600',
        avatar: '/assets/coderun-icon.png',
        stories: [
            { id: 'coderun-1', type: 'image', src: '/assets/coderun-certificate.png' },
        ],
    },
    {
        username: 'CodeRun Winter',
        gradient: 'from-orange-500 to-red-600',
        avatar: '/assets/coderun-icon.png',
        stories: [
            { id: 'coderun-2', type: 'image', src: '/assets/coderun-winter.png' },
        ],
    },
    {
        username: 'ETH Bishkek 2025',
        gradient: 'from-orange-500 to-red-600',
        avatar: '/assets/eth-logo.png',
        stories: [
            { id: 'eth-1', type: 'image', src: '/assets/eth-photo.jpg' },
        ],
    },
    {
        username: 'Startup Nation 2025',
        gradient: 'from-orange-500 to-red-600',
        avatar: '/assets/startup-logo.png',
        stories: [
            { id: 'startup-1', type: 'image', src: '/assets/startup-photo.png' },
        ],
    },
];

const Stories = () => {
    return (
        <section id="stories" className="py-12 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="w-full bg-white/[0.02] border border-white/10 rounded-2xl p-6 lg:p-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Camera className="w-5 h-5 text-primary" />
                            Events
                        </h3>
                        <span className="text-xs text-neutral-500 font-mono">tap to view</span>
                    </div>

                    {/* Stories Row */}
                    <div className="flex gap-6 overflow-x-auto py-2">
                        {stories.map((story) => (
                            <StoryViewer
                                key={story.username}
                                stories={story.stories}
                                username={story.username}
                                avatar={story.avatar}
                                gradient={story.gradient}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Stories);
