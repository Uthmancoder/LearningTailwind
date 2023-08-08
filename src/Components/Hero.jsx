import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1240px] mt-[96px] w-full h-screen text-center mx-autoflex-column justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-5xl font-bold md:py-6">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center ">
          <p className="font-bold md:text-5xl sm:text-4xl text-xl p-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="font-bold md:text-5xl sm:text-4xl text-xl p-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={180}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 p-4">Monitor your data analytics to increase revenue for BTB, BTC & SASS  platforms.</p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get-started</button>
      </div>
    </div>
  );
};

export default Hero;
