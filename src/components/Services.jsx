import React from 'react';

const Services = () => {
   const skills = [
    { name: 'HR system management & recruiting', icon: '🗂️' },
    { name: 'Research writing & proposal writing', icon: '✍️' },
    { name: 'Content writing, copywriting & book/essay writing', icon: '📚' },
    { name: 'Data entry & market research', icon: '💻' },
    { name: 'English tutoring & life coaching', icon: '🧑‍🏫' },
    { name: 'Voice-over work', icon: '🎙️' },
    { name: 'Fashion & apparel content', icon: '👗' },
    { name: 'Project management support', icon: '📋' },
];






    return (
        <section id="services" className="bg-slate-900/50 py-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-12">Skills & Expertise</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={index} className="glass-card p-6 text-center hover:bg-slate-800/80 group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 transform inline-block">
                                {skill.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
