import React, { useState } from 'react';

const faqs = [
    {
        question: "Is SchoolHQ only for African schools?",
        answer: "While we've optimized SchoolHQ for African education systems, it can be used by schools anywhere in the world. However, some features like local payment integrations are Africa-specific."
    },
    {
        question: "Do I need technical skills to use it?",
        answer: "Not at all! SchoolHQ is designed to be intuitive for school administrators and teachers with minimal technical experience. We also provide training materials and support."
    },
    {
        question: "Can I migrate from Excel or paper records?",
        answer: "Yes! We provide tools and guidance to help you import existing student and staff data from Excel. Our team can also assist with large migrations."
    },
    {
        question: "Is SchoolHQ available in French?",
        answer: "Yes, SchoolHQ supports multiple languages including English, French, and Swahili. You can switch languages in your account settings."
    },
    {
        question: "What if my internet connection is unreliable?",
        answer: "SchoolHQ works well with intermittent connections. Critical functions work offline, and data syncs automatically when connection is restored."
    },
    {
        question: "How do I get support?",
        answer: "We offer email and chat support in English and French. Our African-based support team is available during business hours across major timezones."
    }
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600">
                        Get answers to common questions about SchoolHQ
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                <svg
                                    className={`w-5 h-5 text-blue-600 transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="px-6 pb-4 pt-0 text-gray-600">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;