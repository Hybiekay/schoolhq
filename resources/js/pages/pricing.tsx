import React from 'react';
import Header from '@/components/home/header';
import Footer from '@/components/home/footer';
import Pricing from '@/components/home/pricing';

const PricingPage = () => {
    return (
        <div className="font-sans text-gray-800 bg-white">
            <Header />
            <main className="pt-10">
                <Pricing />
            </main>
            <Footer />
        </div>
    );
};

export default PricingPage;
