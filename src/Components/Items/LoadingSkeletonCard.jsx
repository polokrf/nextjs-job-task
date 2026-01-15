import React from 'react';

const LoadingSkeletonCard = () => {
  return (
    <div className="max-w-sm rounded-2xl shadow-md bg-white overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gray-300"></div>

      {/* Content skeleton */}
      <div className="p-4 space-y-3 flex justify-between items-center">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      </div>
      <div>
        <div className="h-10 bg-gray-300 rounded-xl w-full"></div>
      </div>
    </div>
  );
};

export default LoadingSkeletonCard;