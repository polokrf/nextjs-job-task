'use server'
import { productItems } from "@/lib/dbCollection";
import { revalidatePath } from "next/cache";


export const AddItemPost = async (items) => {
  if (!items) {
    return {
      message:'no data 404'
    }
  }

  const result = await productItems('productsItems').insertOne(items);

  revalidatePath('/items')
 return result.insertedId.toString()
}
 
 
 

 