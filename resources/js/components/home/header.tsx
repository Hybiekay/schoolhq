import React from 'react';
import CTAButton from './c-t-a-button';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                        SQ
                    </div>
                    <span className="ml-3 text-xl font-bold text-blue-800">SchoolHQ.ng</span>
                </div>

                <nav className="hidden md:flex space-x-8">
                    <a href="#features" className="hover:text-blue-600 transition">Features</a>
                    <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
                    <a href="#faq" className="hover:text-blue-600 transition">FAQ</a>
                    <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
                </nav>

                <div className="hidden md:block">
                    <CTAButton variant="outline" size="sm">Login</CTAButton>
                </div>

                <button className="md:hidden">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;