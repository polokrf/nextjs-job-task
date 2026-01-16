'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ItemsDetailsBtn = ({ title }) => {
  const [buy, setBuy] = useState(false);
  const handleClick = () => {
   toast.info(`you buy ${title}`);
    setBuy(true)
  };
  
  return (
    <button
      disabled={buy}
      onClick={handleClick}
      className={`btn w-full cursor-pointer hover:animate-pulse  duration-300   mt-4  py-3 rounded-xl  ${buy ?'btn-disabled' : 'bg-blue-600 text-white' } `}
    >
      {
        buy?'Buy':' Buy Now'
     }
    </button>
  );
};

export default ItemsDetailsBtn;