'use server'
import { productItems } from "@/lib/dbCollection";


export const AddItemPost = async (items) => {
  if (!items) {
    return {
      message:'no data 404'
    }
  }

  const result = await productItems('productsItems').insertOne(items);

 return result.insertedId.toString()
}
 
 
 

 