import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <!-- component --> */}
      <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-2 md:py-0 min-h-[125px] z-50">
        {/* <!-- logo --> */}
        <h1 className="w-3/12 text-green-500 text-2xl">
          <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
            <img src={logo} alt="scissors" className='h-20 w-auto' />
            <span className='hidden md:block ml-2'>myScrapbook</span>
          </NavLink>
        </h1>

        {/* <!-- burger menu icon for mobile --> */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* <!-- navigation --> */}
        <nav className={`nav font-semibold text-lg ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row items-center md:items-center">
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-500 duration-200 cursor-pointer active">
              <NavLink to='/create'>
                Create Scrapbook
              </NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-500 duration-200 cursor-pointer">
              <NavLink to='/collections'>
                Collections
              </NavLink>
            </li>
            <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:text-green-500 duration-200 cursor-pointer">
              <NavLink to='/contact'>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
