import React from "react";
import { SectionWrapper } from "../hoc";
import { BestSellers, Blog, Nouveau } from "../components";
import basket1 from "../assets/basket1.png";
import basket2 from "../assets/basket2.png";
import basket3 from "../assets/basket3.png";
import slog from "../assets/slog.svg";
import { Link } from "react-router-dom";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
const PageAcceuil = () => {
  const data = [
    {
      image: basket1,
      name: "Air force one",
      price: "14000DA",
    },
    {
      image: basket2,
      name: "Vans old school",
      price: "12000DA",
    },
    {
      image: basket3,
      name: "Jordan 11",
      price: "16000DA",
    },
    {
      image: basket3,
      name: "Jordan 11",
      price: "16000DA",
    },
    {
      image: basket3,
      name: "Jordan 11",
      price: "16000DA",
    },
  ];
  return (
    <>
      <div className=" flex justify-center items-center w-full px-10 bg-black p-14 my-14 rounded-lg ">
        <div className="flex lg:flex-row flex-col justify-between">
          <div className="w-full">
            <div className="">
              <h2 className="text-white font-bold text-[50px] text-start ">
                La reference ultime <br /> de streetwear <br /> en Algerie
              </h2>
            </div>
            <div className="py-6">
              <p className="text-white font-medium text-[30px]">
                Cherchez pas plus loin , vous etes au bon endroit
              </p>
            </div>
            <div className="flex justify-start items-center gap-7">
              <div className="bg-white text-black text-[25px] px-4 py-2 rounded-full">
                Acheter maintenant
              </div>

              <Link to={"/boutique"}>
                <div className="bg-white rounded-full p-2">
                  <ArrowRightIcon className="text-black h-8 w-8" />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center px-5 py-8 lg:py-0">
            <img src={slog} alt="" className="" />
          </div>
        </div>
      </div>
      <BestSellers data={data} title={"BestSellers"} />
      <div className="py-9" />
      <Blog />
      <div className="py-9" />
      <BestSellers data={data} title={"Nouveau"} />
    </>
  );
};

export default SectionWrapper(PageAcceuil);
