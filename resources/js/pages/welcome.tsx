import FAQ from '@/components/home/f-a-q';
import Features from '@/components/home/feature';
import Footer from '@/components/home/footer';
import Header from '@/components/home/header';
import Hero from '@/components/home/hero';
// Removed: import Pricing from '@/components/home/pricing';
import SchoolSearch from '@/components/home/school-search';
import Testimonials from '@/components/home/testimonials';
import WhyAfrica from '@/components/home/why-africa';
import React from 'react';

const App: React.FC = () => {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <Header />
            <main>
                <Hero />
                <SchoolSearch />
                <Features />
                <WhyAfrica />
                <Testimonials />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
};

export default App;
