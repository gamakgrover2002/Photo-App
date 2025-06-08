import React from "react";
import { Link } from "react-router-dom";


const HeroSection: React.FC = () => {
  return (
    <div className="flex justify-center flex-col h-[500px] w-full items-center text-center  ">
      <div className=" w-[100%] max-w-[500px] text-5xl mb-[20px] ">Discover and Share Stunning Images </div>
      <div className="text-lg text-gray-400">Browse or upload high-quality images by category</div>
      <div className=" flex-col mb-1 md:flex justify-center items-center gap-4 my-[20px]">
        <Link to="/category"><button className="bg-[white] text-blue-700 border-2 h-[50px] w-[200px] hover:cursor-pointer hover:bg-blue-700 hover:text-white mb-1">Browse Category</button></Link>
        <Link to="/upload"><button className="text-white bg-blue-700 h-[50px] w-[200px] hover:cursor-pointer hover:bg-[white] hover:text-blue-700 hover:border-2">Upload Images</button></Link>
      </div>
    </div>
  );
};

export default HeroSection;
