import Image from 'next/image';
import React from 'react';

 const popularItemsData = [
   {
     id: 1,
     name: 'Wireless Headphones',
     price: '$99',
     image: 'https://i.ibb.co.com/1tV9vGpk/headset-aa-white-surface.jpg',
   },
   {
     id: 2,
     name: 'Smart Watch',
     price: '$149',
     image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
   },
   {
     id: 3,
     name: 'Gaming Mouse',
     price: '$49',
     image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
   },
   {
     id: 4,
     name: 'Bluetooth Speaker',
     price: '$79',
     image: 'https://i.ibb.co.com/mr8cyZb5/still-life-tech-device.jpg',
   },
 ];

const Popular = () => {
  return (
    <section className="md:bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto md:px-6">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Popular Items
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Some of the most popular products loved by our users.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularItemsData.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-indigo-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;