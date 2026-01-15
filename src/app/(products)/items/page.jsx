import { productItems } from '@/lib/dbCollection';
import React from 'react';

const Items = async () => {
  const result = await productItems('productsItems').find().toArray()
  
  return (
    <div>
      <p>items</p>
    </div>
  );
};

export default Items;