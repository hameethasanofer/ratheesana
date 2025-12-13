import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-800/20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-col lg:flex-row gap-16">

                    <div className="lg:w-2/3">
                        <h2 className="text-left mb-8 !text-4xl text-white">About Me</h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                I am a Detail-oriented individual eager to start a career in HR, utilizing organizational skills and a
                                commitment to fostering a positive workplace culture while supporting recruitment and employee
                                development initiatives.
                            </p>
                        </div>

                        <div className="mt-12">
                            <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2 inline-block">Education</h3>
                            <div className="space-y-8">
                                <div className="relative pl-8 border-l-2 border-blue-500/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                                    <h4 className="text-xl font-bold text-white">UVA Wellassa University</h4>
                                    <p className="text-blue-400">Reading Bachelors of Business Management</p>
                                    <p className="text-gray-400 text-sm mt-1">Specializing in Human Resources Development</p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-purple-500/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
                                    <h4 className="text-xl font-bold text-white">Hill College</h4>
                                    <p className="text-purple-400">Advanced Diploma</p>
                                    <p className="text-gray-400 text-sm mt-1">Information Technology & English</p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-pink-500/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500"></div>
                                    <h4 className="text-xl font-bold text-white">Alizon Campus</h4>
                                    <p className="text-pink-400">Diploma</p>
                                    <p className="text-gray-400 text-sm mt-1">Fashion Designing</p>
                                </div>
                                <div className="relative pl-8 border-l-2 border-green-500/30">
                                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
                                    <h4 className="text-xl font-bold text-white">Chamber of Psychology & Counselling Institute</h4>
                                    <p className="text-green-400">Certificate</p>
                                    <p className="text-gray-400 text-sm mt-1">Basic Counselling Skills</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="glass-card p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-white mb-6">Languages</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-300">Tamil</span>
                                        <span className="text-blue-400">Native</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-500 w-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-300">English</span>
                                        <span className="text-purple-400">Professional</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-purple-500 w-[90%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-gray-300">Sinhala</span>
                                        <span className="text-pink-400">Conversational</span>
                                    </div>
                                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                                        <div className="h-full bg-pink-500 w-[75%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
