import FAQ from '@/components/home/f-a-q';
import Features from '@/components/home/feature';
import Footer from '@/components/home/footer';
import Header from '@/components/home/header';
import Hero from '@/components/home/hero';
// Removed: import Pricing from '@/components/home/pricing';
import SchoolSearch from '@/components/home/school-search';
import Testimonials from '@/components/home/testimonials';
import WhyAfrica from '@/components/home/why-africa';
import { Head } from '@inertiajs/react';
import React from 'react';

const App: React.FC = () => {
    return (
        <>
            <Head>
                <title>SchoolHQ - Modern School Management for African Schools | schoolhq.ng</title>
                <meta name="description" content="SchoolHQ by Eulogia Technologies is a powerful, easy-to-use school management system designed for African schools. Manage students, staff, academics, payroll, and more—all from one platform." />
                <meta name="keywords" content="school management system, student portal, SchoolHQ, timetable, online result, e-learning, Nigeria schools, African education, schoolhq.ng" />
                <meta name="author" content="Eulogia Technologies" />

                {/* Google Site Verification */}
                <meta name="google-site-verification" content="your-google-site-verification-code-here" />
                {/* Open Graph / Facebook / WhatsApp / LinkedIn */}
                <meta property="og:title" content="SchoolHQ - Simplify Your School Operations" />
                <meta property="og:description" content="SchoolHQ is an all-in-one school management platform by Eulogia Technologies. Perfect for schools in Nigeria and across Africa." />
                <meta property="og:image" content="https://schoolhq.ng/images/schoolhq-preview.png" />
                <meta property="og:url" content="https://schoolhq.ng" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="SchoolHQ" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="SchoolHQ - Simplify Your School Operations" />
                <meta name="twitter:description" content="Manage students, teachers, and academics easily with SchoolHQ from Eulogia Technologies." />
                <meta name="twitter:image" content="https://schoolhq.ng/images/schoolhq-preview.png" />

                <link rel="me" href="https://wa.me/234XXXXXXXXXX" />

                {/* LinkedIn Page Link (optional) */}
                <link rel="publisher" href="https://www.linkedin.com/company/eulogia-technologies" />
            </Head>


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
        </>
    );
};

export default App;
