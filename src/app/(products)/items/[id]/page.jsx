import { productItems } from '@/lib/dbCollection';
import { ObjectId } from 'mongodb';
import React from 'react';

const findITems = async(id) => {
  const result = await productItems('productsItems').findOne({ _id: new ObjectId(id) })
  return result 
}
const ItemsDetails = async({params}) => {
  const { id } = await params;
  const data = await findITems(id);
  console.log(data)

  return (
    <div>
      
    </div>
  );
};

export default ItemsDetails;