import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-slate-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-20 right-20 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="md:w-1/2 text-left">
                        <div className="inline-block px-4 py-2 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-300 font-semibold text-sm mb-6">
                           HR System & Talent Management Freelancer
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                            Ratheesana <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                                Sivaperumal
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
                            Detail-oriented individual eager to start a career in HR, utilizing organizational skills and a commitment to fostering a positive workplace culture.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="btn btn-primary px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-all">
                                Contact Me
                            </a>
                            <a href="#about" className="px-8 py-3 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-white transition-all">
                                Learn More
                            </a>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        <div className="relative w-full max-w-md mx-auto aspect-square">
                            {/* Profile Image */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl transform rotate-3 blur-md opacity-50"></div>
                            <img
                                src="/fieldvisit/profile.jpeg"
                                alt="Ratheesana Sivaperumal"
                                className="relative z-10 w-full h-full object-cover rounded-3xl border-2 border-slate-700 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
