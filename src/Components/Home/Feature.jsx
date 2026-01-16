import React from 'react';

const featuresData  = [
  {
    title: "Modern UI Design",
    description:
      "Clean and modern user interface built with Next.js and Tailwind CSS for a smooth user experience.",
    icon: "🎨",
  },
  {
    title: "Fast Performance",
    description:
      "Optimized performance using Next.js App Router for faster page loading and navigation.",
    icon: "⚡",
  },
  {
    title: "Public & Protected Routes",
    description:
      "Supports both public pages and protected routes with authentication.",
    icon: "🔐",
  },
  {
    title: "Product Listing",
    description:
      "Browse a list of products with images, prices, and details fetched from an API.",
    icon: "🛒",
  },
  {
    title: "Authentication System",
    description:
      "Secure login system using cookies or NextAuth for protected actions.",
    icon: "👤",
  },
  {
    title: "Easy Product Management",
    description:
      "Add and manage products easily through a simple and user-friendly form.",
    icon: "➕",
  },
];

const Feature = () => {
  return (
    <section className="md:bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto md:px-6 ">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Powerful Features
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Everything you need to build, explore, and manage products in one
            simple application.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;