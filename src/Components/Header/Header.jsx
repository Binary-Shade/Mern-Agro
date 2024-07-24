import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { RxHamburgerMenu } from "react-icons/rx";
import Banner from './Banner';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    // <div>
    //   <Banner />
    //   <nav className="border-gray-200 bg-primary">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
    //       <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //         <img src={Logo} className="h-16" alt="Logo" />
    //         <span className="self-center text-white text-sm font-semibold whitespace-nowrap sm:text-xl">Happy Nest Agro</span>
    //       </Link>
    //       <div className="flex items-center md:order-2 md:space-x-0 rtl:space-x-reverse">
    //         <button
    //           type="button"
    //           className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //           id="user-menu-button"
    //           aria-expanded="false"
    //           data-dropdown-toggle="user-dropdown"
    //           data-dropdown-placement="bottom"
    //         >
    //           <span className="sr-only">Open user menu</span>
    //             <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
    //                 <span class="font-medium text-gray-600">JL</span>
    //             </div>
    //         </button>
            
    //         <button
    //           data-collapse-toggle="navbar-user"
    //           type="button"
    //           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-slate-500"
    //           aria-controls="navbar-user"
    //           aria-expanded={isDropdownOpen}
    //           onClick={toggleDropdown}
    //         >
    //           <span className="sr-only">Open main menu</span>
    //           <RxHamburgerMenu className='h-8 text-white'/>
    //         </button>
    //       </div>
    //       <div
    //         className={`items-center justify-between ${isDropdownOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}
    //         id="navbar-user"
    //       >
    //         <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-slate-500 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-primary">
    //           <li>
    //             <Link to="/" className="block py-2 px-3 text-white bg-hover rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
    //           </li>
    //           <li>
    //             <Link to="/about" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white hover:bg-hover">About</Link>
    //           </li>
    //           <li>
    //             <Link to="/services" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white hover:bg-hover">Services</Link>
    //           </li>
    //           <li>
    //             <Link to="/farms" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white hover:bg-hover">Farms</Link>
    //           </li>
    //           <li>
    //             <Link to="/contact" className="block py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white hover:bg-hover">Contact</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
    <></>
  );
};

export default Header;
