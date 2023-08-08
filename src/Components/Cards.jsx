import React from "react";
import {
  AiOutlineUserSwitch,
  AiOutlineUsergroupAdd,
  AiOutlineUsergroupDelete,
} from "react-icons/ai";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1100px] mx-auto grid md:grid-cols-3  gap-8">
        <div className="w-full text-center  border shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-[1.1] duration-300 ">
          <AiOutlineUserSwitch size={60} className="mx-auto bg-white mt-8 text-gray-400" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$20.49</p>
          <div className="text-ceter font-medium">
            <p className="py-2 border-b mt-8">500 gb storage</p>
            <p className="py-2 border-b mt-8">Granted user</p>
            <p className="py-2 border-b mt-8">Send up to 2gb+</p>
          </div>
          <button className="bg-[#00df9a] px-6 rounded-md font-medium w-[200px]  my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
        <div className="w-full text-center  bg-gray-100 border shadow-xl flex flex-col  p-4 my-4 rounded-lg  hover:scale-[1.1] duration-300 ">
          <AiOutlineUsergroupAdd size={60} className="mx-auto bg-transparent mt-8 text-gray-400" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$20.49</p>
          <div className="text-ceter font-medium">
            <p className="py-2 border-b mt-8">500 gb storage</p>
            <p className="py-2 border-b mt-8">Granted user</p>
            <p className="py-2 border-b mt-8">Send up to 2gb+</p>
          </div>
          <button className="bg-[#000300] px-6 rounded-md font-medium w-[200px]  my-6 mx-auto py-3 text-[#00df9a]">
            Start Trial
          </button>
        </div>
        <div className="w-full text-center  border shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-[1.1] duration-300 ">
          <AiOutlineUsergroupDelete size={60} className="mx-auto bg-white mt-8 text-gray-400" />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-4xl font-bold text-center">$20.49</p>
          <div className="text-ceter font-medium">
            <p className="py-2 border-b mt-8">500 gb storage</p>
            <p className="py-2 border-b mt-8">Granted user</p>
            <p className="py-2 border-b mt-8">Send up to 2gb+</p>
          </div>
          <button className="bg-[#00df9a] px-6 rounded-md font-medium w-[200px]  my-6 mx-auto py-3 text-black">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
