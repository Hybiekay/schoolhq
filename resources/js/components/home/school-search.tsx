import React, { useState } from 'react';
import CTAButton from './c-t-a-button';

// Mock data for demonstration
const mockSchools = [
    { id: 1, name: "Nairobi Academy", domain: "nairobi.schoolhq.ng", country: "Kenya" },
    { id: 2, name: "Accra Prep School", domain: "accra.schoolhq.ng", country: "Ghana" },
    { id: 3, name: "Dakar International", domain: "dakar.schoolhq.ng", country: "Senegal" },
    { id: 4, name: "Lagos Grammar", domain: "lagos.schoolhq.ng", country: "Nigeria" },
    { id: 5, name: "Cairo Modern School", domain: "cairo.schoolhq.ng", country: "Egypt" },
];

const SchoolSearch: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<typeof mockSchools>([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSearching(true);

        // Simulate API call with timeout
        setTimeout(() => {
            const results = mockSchools.filter(school =>
                school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                school.domain.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setSearchResults(results);
            setIsSearching(false);
        }, 800);
    };

    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Find Your School
                    </h2>
                    <p className="text-xl text-gray-600">
                        Search to see if your school is already using SchoolHQ
                    </p>
                </div>

                <form onSubmit={handleSearch} className="mb-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Enter your school name or domain"
                            className="flex-grow px-6 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            required
                        />
                        <CTAButton className="md:w-auto">
                            {isSearching ? 'Searching...' : 'Search'}
                        </CTAButton>
                    </div>
                </form>

                {searchResults.length > 0 && (
                    <div className="bg-gray-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-4">Search Results</h3>
                        <div className="space-y-4">
                            {searchResults.map((school) => (
                                <div key={school.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                                    <div>
                                        <h4 className="font-medium">{school.name}</h4>
                                        <p className="text-sm text-gray-500">{school.country}</p>
                                    </div>
                                    <a
                                        href={`https://${school.domain}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-2 sm:mt-0 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                                    >
                                        Go to School
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {searchTerm && searchResults.length === 0 && !isSearching && (
                    <div className="text-center py-8">
                        <p className="text-gray-600 mb-4">No schools found matching "{searchTerm}"</p>
                        <p className="text-gray-500">
                            Is your school not using SchoolHQ yet?{' '}
                            <a href="#pricing" className="text-blue-600 hover:underline">Get started today</a>
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SchoolSearch;