import React, { useState } from 'react';
import CTAButton from './c-t-a-button';

const Pricing: React.FC = () => {
    const [billingPeriod, setBillingPeriod] = useState<'term' | 'year'>('term');

    const pricingPlans = [
        {
            name: "Lite",
            price: billingPeriod === 'term' ? "₦20,000" : "₦50,000",
            period: billingPeriod === 'term' ? "per term" : "per year",
            description: "Unlimited features. One flat fee for your entire school.",
            features: [
                "Unlimited students & staff",
                "Includes 1 admin (upgrade for more)",
                "Report cards & attendance",
                "Parent-teacher messaging",
                "Free school subdomain",
                "Local payment options (₦)"
            ],
            featured: false
        },
        {
            name: "Growth",
            price: billingPeriod === 'term' ? "₦40,000" : "₦100,000",
            period: billingPeriod === 'term' ? "per term" : "per year",
            description: "For growing schools ready to go fully digital",
            features: [
                "Everything in Lite",
                "3 admin accounts",
                "Custom grading system",
                "Student promotion & analytics",
                "Basic homepage builder",
                "Email support"
            ],
            featured: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "For large institutions or school networks",
            features: [
                "Everything in Growth",
                "Unlimited admin accounts",
                "White-label mobile app",
                "API access & integrations",
                "Custom domain",
                "On-premise or private hosting",
                "Dedicated support"
            ],
            featured: false
        }
    ];

    const toggleBillingPeriod = () => {
        setBillingPeriod(billingPeriod === 'term' ? 'year' : 'term');
    };

    return (
        <section id="pricing" className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Affordable Pricing</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        All plans include our complete school management system with AI-powered learning
                    </p>

                    {/* Billing Period Toggle */}
                    {/* <p className="text-sm font-medium text-gray-500 mb-2">Choose billing period</p> */}

                    <div className="flex justify-center items-center mt-8">

                        <span className={`mr-4 font-medium ${billingPeriod === 'term' ? 'text-blue-600' : 'text-gray-500'}`}>Pay per Term</span>
                        <button
                            type="button"
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${billingPeriod === 'year' ? 'bg-blue-600' : 'bg-gray-200'}`}
                            onClick={toggleBillingPeriod}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${billingPeriod === 'year' ? 'translate-x-6' : 'translate-x-1'}`}
                            />
                        </button>
                        <span className={`ml-4 font-medium ${billingPeriod === 'year' ? 'text-blue-600' : 'text-gray-500'}`}>Pay Annually (Save 20%)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-sm overflow-hidden ${plan.featured ? "border-2 border-blue-500 transform md:-translate-y-4" : ""}`}
                        >
                            {plan.featured && (
                                <div className="bg-blue-500 text-white text-center py-2 font-medium">
                                    Most Popular
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    {plan.period && <span className="text-gray-500">/{plan.period}</span>}
                                </div>
                                <p className="text-gray-600 mb-6">{plan.description}</p>

                                <ul className="mb-8 space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <CTAButton fullWidth>{plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}</CTAButton>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Affordable Pricing — You Host, We Power Everything
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        All plans include unlimited students, hosting, updates, and full access to the SchoolHQ system.
                    </p>
                </div>

                {/* AI Learning Feature Highlight */}
                <div className="mt-16 bg-white rounded-xl shadow-sm p-8 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                            <div className="bg-blue-100 rounded-full p-6 text-blue-600">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                        </div>
                        <div className="md:w-2/3 md:pl-8">
                            <h3 className="text-2xl font-bold mb-4">AI-Powered Learning Assistant</h3>
                            <p className="text-gray-600 mb-4">
                                Students can learn through natural conversation with our AI tutor. Ask questions in your own words and get instant explanations, just like talking to a teacher.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Voice and text conversation</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Available 24/7 for students</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Supports multiple subjects</span>
                                </div>
                                <div className="flex items-start">
                                    <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Works on mobile app</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile App Feature Highlight */}
                <div className="mt-8 bg-white rounded-xl shadow-sm p-8 max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                            <div className="bg-blue-100 rounded-full p-6 text-blue-600">
                                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                        <div className="md:w-2/3 md:pl-8">
                            <h3 className="text-2xl font-bold mb-4">Dedicated Mobile App</h3>
                            <p className="text-gray-600 mb-4">
                                Access SchoolHQ anywhere with our native mobile apps for teachers, students, and parents. Available on both iOS and Android devices.
                            </p>
                            <div className="flex space-x-4">
                                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.8 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-.9 3.09-1.53 4.84zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                    </svg>
                                    <span>App Store</span>
                                </div>
                                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.31M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
                                    </svg>
                                    <span>Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;