'use client'

import axios from 'axios';
import React from 'react';
import { AddItemPost } from './AddItemPost';
import { toast } from 'react-toastify';


const AddItemForm = () => {
  const rating = (Math.random() * 5 + 1).toFixed(1);
 
  
  const handleSubmit =  (e) => {
    e.preventDefault();
    const title =e.target.title.value
    const image = e.target.image.files[0]
    const price = e.target.price.value
    const description = e.target.description.value
    
    const photo = new FormData()
    photo.append('image', image)
    const photoURL = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMG_KEY}`;
    axios.post(photoURL, photo).then( async(res) => {
      const items = {
        title: title,
        image: res.data.data.url,
        price: price,
        rating: rating,
        description: description,
      };
      
      const productPostdb= await AddItemPost(items)
      toast.info('Successful');
      form.reset()


    }).catch(err => {
      console.log(err)
    })
    

  }
  return (
    <form onSubmit={handleSubmit} className="fieldset">
      {/* name */}
      <label className="label">Product-Name</label>
      <input
        name="title"
        required
        type="text"
        className="input"
        placeholder="Title"
      />
      {/* image */}
      <label className="label">Product-Image</label>
      <input name="image" required type="file" className=" file-input" />
      {/* Price */}
      <label className="label">Product-Price</label>
      <input
        name="price"
        required
        type="number"
        className=" input"
        placeholder="Price"
      />
      {/* description */}
      <label className="label">Product-Description</label>
      <textarea
        type="text"
        required
        name="description"
        className=" textarea"
        placeholder="Product-Details"
      />

      <button className="btn bg-blue-600 text-white hover:bg-blue-700 transition mt-4">
        Add-Item
      </button>
    </form>
  );
};

export default AddItemForm;