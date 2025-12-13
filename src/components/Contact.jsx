import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <h2>Contact Me</h2>
                <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="md:w-1/3 space-y-4">
                        <div className="glass-card p-6 flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">
                                📞
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Phone</h3>
                                <p className="text-white font-medium">0764036864</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 text-xl">
                                📧
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</h3>
                                <p className="text-white font-medium text-sm break-all">ratheesanasivaperumal@gmail.com</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-xl">
                                📍
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Address</h3>
                                <p className="text-white font-medium text-sm">Mossend division, Torrington estate, Agarapathana</p>
                            </div>
                        </div>
                        <div className="glass-card p-6 flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/sivaperumal-ratheesana-a7808828b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white font-medium text-sm hover:text-blue-400 transition-colors">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="md:w-2/3 glass-card p-8">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Name</label>
                                    <input type="text" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-sm font-semibold mb-2">Email</label>
                                    <input type="email" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-semibold mb-2">Subject</label>
                                <input type="text" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Hiring Inquiry" />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-semibold mb-2">Message</label>
                                <textarea rows="5" className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Hello, I'd like to discuss..."></textarea>
                            </div>
                            <button type="button" className="w-full btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
