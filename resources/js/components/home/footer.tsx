import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between mb-16">
                    <div className="mb-10 lg:mb-0 lg:w-1/3">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                                SQ
                            </div>
                            <span className="text-xl font-bold">SchoolHQ</span>
                        </div>
                        <p className="text-gray-400 mb-6">
                            The complete school management system built for African education systems.
                        </p>
                        <div className="flex space-x-4">
                            {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                                <a key={social} href="#" className="text-gray-400 hover:text-white transition">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Product</h3>
                            <ul className="space-y-2">
                                {['Features', 'Pricing', 'Integrations', 'Updates'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
                            <ul className="space-y-2">
                                {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-4">Support</h3>
                            <ul className="space-y-2">
                                {['Help Center', 'Contact Us', 'API Docs', 'Status'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-400 hover:text-white transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 mb-4 md:mb-0">
                            © {new Date().getFullYear()} SchoolHQ. All rights reserved.
                        </p>

                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
                            <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
                            <a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;