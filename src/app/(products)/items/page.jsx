import ItemsCard from '@/Components/Items/ItemsCard';
import { productItems } from '@/lib/dbCollection';
import React from 'react';

const Items = async () => {
  const result = await productItems('productsItems').find().toArray()
  
  return (
    <div className=" my-15 p-2">
      <div className=" mb-4 md:text-left text-center">
        <h1 className=' font-bold text-2xl capitalize mb-2'>All Items</h1>
        <p>Discover quality products designed to meet your everyday needs</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {result.map(product => (
          <ItemsCard key={product._id} product={product}></ItemsCard>
        ))}
      </div>
    </div>
  );
};

export default Items;