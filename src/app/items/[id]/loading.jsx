import React from 'react';

const loading = () => {
  return (
    <div className="max-w-4xl  bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse my-15 p-2 md:max-w-[1300px] mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Image Skeleton */}
        <div className="w-full h-72 bg-gray-300"></div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-4">
          <div className="h-6 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>

          <div className="flex gap-4 mt-4">
            <div className="h-4 bg-gray-300 rounded w-20"></div>
            <div className="h-4 bg-gray-300 rounded w-24"></div>
          </div>

          <div className="h-12 bg-gray-300 rounded-xl w-full mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;