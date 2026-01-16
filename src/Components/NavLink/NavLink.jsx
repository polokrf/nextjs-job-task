'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {

  const pathName = usePathname()
  const isActive = href ==='/'?pathName==='/':pathName.startsWith(href)
  return (
    <div>
      <Link
        className={`${
          isActive
            && ' text-blue-600 hover:text-blue-700 transition'
            
        }`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;