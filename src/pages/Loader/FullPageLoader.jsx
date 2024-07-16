import React, { useState, useEffect } from 'react';

const FullPageLoader = () => {
    const [loading, setLoading] = useState(true);

    // Simulating a delay (e.g., API call) with useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-75 ${loading ? 'bg-gray-800' : 'bg-green-500'}`}>
            {loading ? (
                <div className="flex flex-col items-center text-white">
                    <svg className="animate-spin h-12 w-12 text-white mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014.086 14H2v2h3.2c.29 0 .573.06.834.169L6 17.29l.586.587zM12 20c-4.418 0-8-3.582-8-8h2c0 3.313 2.687 6 6 6v2zm5.914-2.707A7.965 7.965 0 0120 12h-2c0 1.71-.664 3.309-1.757 4.493l1.671 1.672z"></path>
                    </svg>
                    <p className="text-lg font-semibold">Loading...</p>
                </div>
            ) : (
                <div className="text-white">
                    <svg className="h-16 w-16 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path fill="currentColor" d="M14 9l3 3m0 0l-3 3m3-3H8"></path>
                    </svg>
                    <p className="text-lg font-semibold">Loaded successfully!</p>
                </div>
            )}
        </div>
    );
};

export default FullPageLoader;
