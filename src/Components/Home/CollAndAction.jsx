import Link from 'next/link';
import React from 'react';

const CollAndAction = () => {
  return (
    <section >
      <div>
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl p-8  text-center">
          {/* Decorative Background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-100 rounded-full blur-3xl"></div>

          {/* Content */}
          <h2 className="relative text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Start Exploring Products Today
          </h2>

          <p className="relative max-w-2xl mx-auto text-lg text-gray-600 mb-10">
            Discover high-quality products, view full details, and manage items
            with a simple and secure system built using modern web technologies.
          </p>

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/items"
              className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
            >
             View Items
            </Link>

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollAndAction;