import React from 'react';

const howItWorksData = [
  {
    step: '01',
    title: 'Browse Products',
    description:
      'Explore a list of products without any login. View basic details such as name, image, and price.',
    icon: '🔍',
  },
  {
    step: '02',
    title: 'View Product Details',
    description:
      'Click on a product to see full details including description and additional information.',
    icon: '📦',
  },
  {
    step: '03',
    title: 'Login to Manage Items',
    description:
      'Sign in using a simple authentication system to add and manage products securely.',
    icon: '🔐',
  },
];

const HowToWorkIt = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A simple and clear process to explore and manage products easily.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {howItWorksData.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl border hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Step Number */}
              <span className="inline-block mb-3 text-sm font-semibold text-indigo-600">
                STEP {item.step}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToWorkIt;