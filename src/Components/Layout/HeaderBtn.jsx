'use client'
import Link from 'next/link';
import {  useContext } from 'react';

import { toast } from 'react-toastify';
import { AuthContext } from '../AuthContext';

const HeaderBtn = () => {
  const {logged}=useContext(AuthContext)
  const handleClick = () => {
    toast.info('Already login')
  }
  return (
    <div>
      {logged ? (
        <button onClick={handleClick} className="  text-white btn   btn-success ">Logged</button>
      ) : (
        <Link href="/login" className="  text-white btn   btn-info ">
          Login
        </Link>
      )}
    </div>
  );
};

export default HeaderBtn;