import React from "react";
import { SectionWrapper } from "../hoc";
import { BestSellers, Blog, Nouveau } from "../components";
import basket1 from "../assets/basket1.png";
import basket2 from "../assets/basket2.png";
import basket3 from "../assets/basket3.png";
import slog from "../assets/slog.svg";
import { Link } from "react-router-dom";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import apropospic from "../assets/apropospic.svg";
import { styles } from "../styles";
import x1 from "../assets/xRedfull.svg";
import x2 from "../assets/xBlackempty.svg";
import x3 from "../assets/xRedempty.svg";
import x4 from "../assets/xBlackfull.svg";


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
              La reference ultime de streetwear <br /> en Algerie
            </h2>
            <p className="max-w-[540px] font-medium text-[25px] my-[28px]">
              Ne cherchez pas plus plus loin , vous etes au bon endroit
            </p>
            <div className="flex gap-4 my-[34px]">
              <div className="bg-white text-black px-7 py-4 rounded-full text-[20px] font-medium">
                Acheter maintenant
              </div>
              <div className="bg-white flex justify-center items-center rounded-full">
                <ArrowRightIcon className="text-black h-8 w-14" />
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
      <BestSellers data={data} title={"BestSells"} />
      <div className="py-9" />
      <Blog />
      <div className="py-9" />
      <BestSellers data={data} title={"Nouveau"} />
      <div className={`flex flex-col items-center ${styles.paddingY} `}>
        <span className="hash-span" id={"apropos"}>
          &nbsp;
        </span>
        <h2 className="font-bold text-5xl my-6">A propos de nous</h2>
        <div
          className={`flex lg:flex-row flex-col  items-center justify-around`}
        >
          <div className="flex justify-center items-center w-[50%] px-4">
            <img src={apropospic} alt="" className="" />
          </div>
          <div className="flex justify-center items-cneter w-[50%] px-3">
            <p className="lg:text-[25px] text-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum hic
              officiis est repellendus nisi id deleniti quam. Accusantium
              cupiditate doloremque excepturi reiciendis harum, dolorum eaque,
              molestiae vero, laudantium itaque vel. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Asperiores quas molestiae neque
              distinctio ad expedita totam pariatur, fugit alias accusantium
              cupiditate earum nemo sapiente voluptatibus recusandae, suscipit
              culpa. Veniam, illo! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nemo voluptatum rem, praesentium consectetur
              impedit nihil modi porro minus dolore distinctio eveniet delectus
              obcaecati illo laboriosam vel quam fuga, sint hic!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(PageAcceuil);
