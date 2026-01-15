import LoadingSkeletonCard from '@/Components/Items/LoadingSkeletonCard';
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-15">
      {[...Array(12)].map((_, i) => (
        <LoadingSkeletonCard key={i}></LoadingSkeletonCard>
      ))}
    </div>
  );
};

export default LoadingSkeleton;