import AddItemForm from '@/Components/Items/AddItemForm';
import React from 'react';

const AddItems = () => {

  return (
    <div>
      <div className=" flex flex-col justify-center items-center min-h-screen ">
        <div className=' mb-4 text-center'>
          <h1 className=' text-2xl font-bold mb-2'>Add New Item</h1>
          <p>Fill in the details to create a new product</p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
           <AddItemForm></AddItemForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;