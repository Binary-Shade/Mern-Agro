import React from "react";
import { Gal1, Gal2, Gal3, Gal4, Gal5 } from "../assets/images";

const Gallery = () => {
  return (
    <div className="w-full max-w-5xl  p-5 pb-10 mx-auto  mb-10 columns-3 gap-1 md:gap-5 space-y-1 md:space-y-4 ">
     <img src={Gal1} alt="" className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/>
     <img src={Gal2} alt="" className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300" />
     <img src={Gal3} alt="" className="rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300" />
      <img src={Gal4} alt=""  className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/>
      <img src={Gal5} alt="" className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300" />
      {/* <img src={landscape3} alt=""  className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/> */}
      {/* <img src={vert3} alt=""  className="rounded-md md:rounded-lg hover:scale-105 hover:z-10 cursor-pointer transition-all duration-300"/> */}
      
    </div>
  );
};

export default Gallery;