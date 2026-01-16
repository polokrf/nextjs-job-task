import ItemsDetailsBtn from '@/Components/Items/ItemsDetailsBtn';
import { productItems } from '@/lib/dbCollection';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react';

const findITems = async (id) => {
   if (!ObjectId.isValid(id)) {
     return null
   }
  const result = await productItems('productsItems').findOne({ _id: new ObjectId(id) })
 
  return result 
}
const ItemsDetails = async({params}) => {
  const { id } =await  params;
  const product= await findITems(id);
  

  return (
    <div className=" my-15 p-2 md:max-w-[1300px] mx-auto w-full">
      <div className=" mb-4 text-center">
        <h1 className=" text-2xl font-bold capitalize mb-2">Product Details</h1>
        <p>Explore features, pricing, and performance at a glance</p>
      </div>
      <div className="md:max-w-4xl w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden ">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative w-full h-72 md:h-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover cursor-pointer hover:translate-1 duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>

              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="flex items-center gap-4 mb-4">
                <span className="text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </span>
                <span className="text-xl font-bold text-blue-600">
                  ${product.price}
                </span>
              </div>
            </div>

            <ItemsDetailsBtn title={product.title}></ItemsDetailsBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsDetails;