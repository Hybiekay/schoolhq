import React from 'react';

const testimonials = [
    {
        quote: "SchoolHQ helped us digitize everything – from admissions to results – without needing IT staff!",
        author: "Principal Jane Mwangi",
        school: "Nairobi Academy, Kenya",
        avatar: "JM"
    },
    {
        quote: "It's built with our school realities in mind. Reliable even with slow internet.",
        author: "Headmaster Kwame Asante",
        school: "Accra Prep School, Ghana",
        avatar: "KA"
    },
    {
        quote: "Moving from paper to digital was seamless. Our teachers love the simple interface.",
        author: "Director Amina Diallo",
        school: "Dakar International School, Senegal",
        avatar: "AD"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by African Schools</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join hundreds of schools across Africa using SchoolHQ daily
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl">
                            <div className="text-yellow-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-4">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <h4 className="font-semibold">{testimonial.author}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.school}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;