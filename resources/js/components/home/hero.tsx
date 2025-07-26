import React from 'react';
import CTAButton from './c-t-a-button';
import { router } from '@inertiajs/react';

const Hero: React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Manage Your School Seamlessly with SchoolHQ
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Built for African schools — Unlimited student records, dedicated subdomain, and smart tools to simplify school operations.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <CTAButton onClick={() => router.visit("/school-registration")}>Start Free Trial</CTAButton>
                        <CTAButton variant="outline">Book a Demo</CTAButton>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="bg-blue-200 rounded-xl w-full h-80 md:h-96 flex items-center justify-center text-blue-800">
                        {/* Placeholder for hero illustration */}
                        <svg className="w-64 h-64" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;