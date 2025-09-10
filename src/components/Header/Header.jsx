import React from 'react';
import { Link, NavLink } from 'react-router';


const Header = () => {

   const links = <>
      <li>
    <NavLink
      to="/" 
      className={({ isActive }) => 
        isActive 
          ? "text-[#23BE0A] font-bold border" 
          : "text-[#131313CC]"
      }
    >
      Home
    </NavLink>
  </li>
     <li>
    <NavLink 
      to="/listedBooks" 
      className={({ isActive }) => 
        isActive 
          ? "text-[#23BE0A] border  font-bold" 
          : "text-[#131313CC]"
      }
    >
      Listed Books
      
    </NavLink>
  </li>

     <li>
    <NavLink 
      to="/PagesToRead" 
      className={({ isActive }) => 
        isActive 
          ? "text-[#23BE0A] border  font-bold" 
          : "text-[#131313CC]"
      }
    >
      Pages to Read
      
    </NavLink>
  </li>

   </>

    return (
        <div>
            <nav className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/sv" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu text-[#131313CC] font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-[#131313CC] font-semibold menu-horizontal px-1">
 {links}
    </ul>
  </div>
  <div className="navbar-end gap-3">
    <a className="btn bg-[#23BE0A] text-white md:px-5 px-2 md:py-5 py-1 md:text-base text-xs rounded-lg ">Sign in</a>
    <a className="btn bg-[#59C6D2] text-white md:px-5 px-2 md:py-5 py-1 md:text-base text-xs rounded-lg">Sign up</a>
  </div>
</nav>
        </div>
    );
};

export default Header;