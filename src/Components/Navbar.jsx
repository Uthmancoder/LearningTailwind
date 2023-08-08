import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [nav, setnav] = useState(true)

    const handleNav = ()=>{
        setnav(!nav)
    }
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1140px] mx-auto px-4   ">
      <h1 className="text-[#00df9a] w-full  font-bold text-4xl">React</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }   
      </div>
      <div className={!nav? "fixed left-0 top-0 w-[60%] border-r-gray-900 h-full bg-[#000200] ease-in-out duration-700"  : "fixed left-[-100%]"}>
      <h1 className="text-[#00df9a] w-full mt-6 mx-5 font-bold text-4xl">React</h1>
        <ul  className=" uppercase p-5">
          <li className="p-4 border-b border-gray-500 ">Home</li>
          <li className="p-4 border-b border-gray-500 ">Company</li>
          <li className="p-4 border-b border-gray-500 ">Resources</li>
          <li className="p-4 border-b border-gray-500 ">About</li>
          <li className="p-4 border-b border-gray-500 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
