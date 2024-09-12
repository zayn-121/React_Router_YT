import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="shadow ">
        <nav>
          <div className="flex justify-between items-center m-3">
            <Link to="/">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className=" h-14"
                alt="Logo"
              />
            </Link>
            <ul className="flex flex-row font-medium ">
              {/* <Link to="/">
                <li className="p-3">Home</li>
              </Link> */}
              <NavLink  
              className={({isActive})=>`p-3 ${isActive ? "text-orange-700" : "text-gray-700"}` }
              to="/">
               Home
              </NavLink>
              <NavLink  
              className={({isActive})=>`p-3 ${isActive ? "text-orange-700" : "text-gray-700"}` }
              to="/about">
               About
              </NavLink>
              <NavLink  
              className={({isActive})=>`p-3 ${isActive ? "text-orange-700" : "text-gray-700"}` }
              to="/contact">
               Contact
              </NavLink>
              <NavLink  
              className={({isActive})=>`p-3 ${isActive ? "text-orange-700" : "text-gray-700"}` }
              to="/github">
               Github
              </NavLink>
             
            </ul>
            <div className="flex flex-row gap-4 ">
              <button className="">Login</button>
              <button className=" bg-orange-700 p-2 text-white rounded">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
