import Image from 'next/image';
import React from 'react';

 const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'Frontend Developer',
    message:
      'This application is very easy to use. The interface is clean, and the performance is excellent.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Michael Brown',
    role: 'Product Manager',
    message:
      'I really like the simple design and clear structure. It shows good understanding of real-world applications.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Ayesha Rahman',
    role: 'UI/UX Designer',
    message:
      'The layout is modern and responsive. It works smoothly on all devices.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
];


const TiMon = () => {
  return (
    <section className="md:bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What People Say
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Feedback from users who have explored and used our application.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              {/* Message */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                “{testimonial.message}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TiMon;