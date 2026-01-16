import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        {/* Clear Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Build, Explore & Manage
          <span className="block text-yellow-300">Products with Ease</span>
        </h1>

        {/* Simple Explanation */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100 mb-10">
          A modern product listing application built with Next.js. Browse items,
          view details, and manage products using a secure system.
        </p>

        {/* Call To Action */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/items"
            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"
          >
            View Items
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;