import Link from 'next/link';
import NavLink from '../NavLink/NavLink';
import HeaderBtn from './HeaderBtn';

const Header = () => {
 
  
  const items = (
    <>
      <li>
        {' '}
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        {' '}
        <NavLink href="/items">Items</NavLink>
      </li>
      <li>
        <NavLink href="/add-item">Add-Item</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar  md:max-w-[1300px] mx-auto w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <h1 className="bg-linear-to-l to-green-300 from-green-400 bg-clip-text text-transparent text-xl">
            ProductFlow
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
         <HeaderBtn></HeaderBtn>
        </div>
      </div>
    </div>
  );
};

export default Header;