import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Puthu malargal poothidum velai...',
            category: 'Short Film',
            videoId: 'jqdig1nIZ6E'
        },
        {
            id: 2,
            title: 'Tholaintha kathal oviyam',
            category: 'Short Film',
            videoId: 'tJuKQDTRcfk'
        },
        {
            id: 3,
            title: 'Unnal uyirthen',
            category: 'Music Video',
            videoId: 'qXkzFryZvK8'
        },
        {
            id: 4,
            title: 'Kiramathu kathal',
            category: 'Short Film',
            videoId: 'Mtu7Bhtvdk4'
        },
        {
            id: 5,
            title: 'Minnale en vanam theendava',
            category: 'Music Video',
            videoId: 'RpNbFA1tQbI'
        },
        {
            id: 6,
            title: 'Kargala uravugal',
            category: 'Short Film',
            videoId: '8QcLaNEPy2E'
        }
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12 text-3xl font-bold text-white">
                    Projects
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="group relative rounded-xl overflow-hidden glass-card !p-0 border-none flex flex-col h-full"
                        >
                            {/* Thumbnail */}
                            <div className="relative overflow-hidden h-48">
                                <img
                                    src={`https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Play Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <a
                                        href={`https://www.youtube.com/watch?v=${project.videoId}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    >
                                        <svg
                                            className="w-6 h-6 fill-current ml-1"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <span className="text-blue-400 text-sm font-semibold mb-2">
                                    {project.category}
                                </span>

                                <h3 className="text-xl font-bold text-white mb-4">
                                    {project.title}
                                </h3>

                                <a
                                    href={`https://www.youtube.com/watch?v=${project.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 fill-current mr-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                    </svg>
                                    Watch on YouTube
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
