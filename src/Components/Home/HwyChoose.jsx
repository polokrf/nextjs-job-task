import React from 'react';

 const whyChooseUsData = [
  {
    title: 'Simple & Clean Interface',
    description:
      'The application is designed with simplicity in mind, making it easy for users to navigate and use.',
    icon: '✨',
  },
  {
    title: 'Built with Modern Technology',
    description:
      'Developed using Next.js App Router and Express.js to ensure scalability and performance.',
    icon: '⚙️',
  },
  {
    title: 'Secure Authentication',
    description:
      'Authentication is handled securely using cookies or NextAuth to protect sensitive actions.',
    icon: '🔒',
  },
  {
    title: 'Fast & Responsive',
    description:
      'Fully responsive design that works smoothly on mobile, tablet, and desktop devices.',
    icon: '📱',
  },
];


const HwyChoose = () => {
  return (
    <section className="py-10 md:bg-white">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            A reliable and modern solution designed to deliver the best user
            experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-xl border hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

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

export default HwyChoose;