import React from 'react'
import x1 from "../assets/xRedfull.svg";
import x2 from "../assets/xBlackempty.svg";
import x3 from "../assets/xRedempty.svg";
import x4 from "../assets/xBlackfull.svg";
import slog from "../assets/slog.svg";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
const Hero = () => {
  return (
    <div className=" relative w-full bg-black px-16 my-10 pt-6 ">
      <div className="absolute -right-[50px] top-[150px]">
        <img src={x1} alt="" className="h-[100px] w-[100px]" />
      </div>
      <div className="absolute -right-[100px] top-[240px] -z-10">
        <img src={x2} alt="" className="h-[200px] w-[200px]" />
      </div>
      <div className="absolute -left-[106px] top-[307px] z-10">
        <img src={x3} alt="" className="h-[200px] w-[200px]" />
      </div>
      <div className="absolute -left-[90px] top-[497px] z-10">
        <img src={x4} alt="" className="h-[90px] w-[90px]" />
      </div>
      <div className="flex justify-around items-center px-9 ">
        <div className="text-white">
          <h2 className="max-w-[700px] font-extrabold text-[60px] ">
            La référence ultime de streetwear <br /> en Algérie.
          </h2>
          <p className="max-w-[540px] font-medium text-[25px] my-[28px]">
            Ne cherchez pas plus plus loin , vous etes au bon endroit
          </p>
          <div className="flex flex-row gap-8 my-[34px]">
            <div className="bg-white text-black px-7 py-4 rounded-full text-[20px] font-medium">
              Acheter maintenant
            </div>
            <div className="bg-white h-14 w-14 rounded-full flex justify-center items-center">
              <ArrowRightIcon className="text-black h-10 w-10" />
            </div>
          </div>
        </div>
        <div className="pr-10 pb-16">
          <img src={slog} alt="" className="w-[540px] h-[540px]" />
        </div>
      </div>
      <div className="relative flex justify-center items-center py-2">
        <div className="absolute">
          <img src={x1} alt="" className="h-[100px] w-[100px]" />
        </div>{" "}
        <div className="relative w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center">
          <ArrowDownIcon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}

export default Hero;