import React from 'react';

const WhyAfrica: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-blue-800 text-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for African Schools</h2>
                        <p className="text-xl mb-8 opacity-90">
                            SchoolHQ is designed with the unique needs of African education systems in mind.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-700 rounded-full p-2 mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
                                    <p className="opacity-90">Works perfectly on smartphones used by teachers and administrators.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-700 rounded-full p-2 mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Low Bandwidth Optimized</h3>
                                    <p className="opacity-90">Works reliably even with slow or intermittent internet connections.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-700 rounded-full p-2 mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">Localized Support</h3>
                                    <p className="opacity-90">Local currencies, multiple languages (English, French, Swahili), and African timezones.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="bg-blue-700 rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Why African Schools Choose SchoolHQ</h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="text-blue-300 text-2xl font-bold mr-4">1</div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2">Simple Interface</h4>
                                        <p className="opacity-90">Designed for users with varying levels of technical experience.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-blue-300 text-2xl font-bold mr-4">2</div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2">Multi-School Support</h4>
                                        <p className="opacity-90">Perfect for school networks and education groups.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="text-blue-300 text-2xl font-bold mr-4">3</div>
                                    <div>
                                        <h4 className="text-lg font-semibold mb-2">African Support Team</h4>
                                        <p className="opacity-90">Get help from experts who understand your context.</p>
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

export default WhyAfrica;