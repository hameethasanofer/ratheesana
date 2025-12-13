import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 block">
                            Portfolio.
                        </a>
                        <p className="text-gray-400 text-sm">Building digital experiences that matter.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fab fa-github text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fab fa-twitter text-xl"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/sivaperumal-ratheesana-a7808828b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fab fa-linkedin text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <i className="fab fa-instagram text-xl"></i>
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2024 Freelancer Portfolio. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
