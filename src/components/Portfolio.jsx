import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-20 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent to-slate-900/50 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <h2 className="mb-16">Work Experience</h2>

                <div className="max-w-3xl mx-auto">
                    {/* Experience Item */}
                    <div className="glass-card p-8 border-l-4 border-l-yellow-500 relative">
                        <div className="absolute -left-[42px] top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-yellow-500 border-4 border-slate-900 hidden md:block"></div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-white">Accountant</h3>
                                <p className="text-yellow-400 font-semibold">Wholesale Department</p>
                            </div>
                            <div className="mt-2 md:mt-0 px-4 py-1 rounded-full bg-yellow-500/10 text-yellow-300 text-sm font-bold border border-yellow-500/20">
                                2021 – 2022
                            </div>
                        </div>

                        <h4 className="text-xl text-gray-300 mb-2">Satheesh Jewellary, Gold manufacturers PVT LTD</h4>
                        <p className="text-gray-400 leading-relaxed">
                            Managed financial records and transactions for the wholesale department, ensuring accuracy and compliance with company standards.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
