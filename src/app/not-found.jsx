import React from 'react';
import img from '../../public/222608-P1YYGC-757.jpg'
import Image from 'next/image';
import Link from 'next/link';
const NotFoundPage = () => {
  return (
    <div className="my-15">
      <div className="  relative md:max-w-[400px] mx-auto w-full h-[400px] flex flex-col items-center justify-center">
        <Image src={img} alt="" fill className=" object-cover"></Image>
      </div>
      <div className=" mt-3 text-center">
        <Link href="/" className=" btn btn-info text-white">
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;