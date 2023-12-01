import React from "react";
import { BestSellers, Blog, Footer } from "../components";
import basket1 from "../assets/basket1.png";
import basket2 from "../assets/basket2.png";
import basket3 from "../assets/basket3.png";
import apropospic from "../assets/apropospic.svg";
import { styles } from "../styles";
import Hero from "../components/Hero";

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
      <div className={`${styles.paddingX}`}>
        <Hero />
        <BestSellers data={data} title={"BestSells"} />
        <div className="py-9" />
        <Blog />
        <div className="py-9" />
        <BestSellers data={data} title={"Nouveau"} />
        <div className={`flex flex-col items-center ${styles.paddingY} `}>
          <h2 className="font-bold text-5xl my-6">A propos de nous</h2>
          <div
            className={`flex lg:flex-row flex-col  items-center justify-around`}
          >
            <div className="flex justify-center items-center w-[50%] px-4">
              <img src={apropospic} alt="" className="" />
            </div>
            <div className="flex justify-center items-cneter w-[50%] px-3">
              <p className="lg:text-[25px] text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                hic officiis est repellendus nisi id deleniti quam. Accusantium
                cupiditate doloremque excepturi reiciendis harum, dolorum eaque,
                molestiae vero, laudantium itaque vel. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Asperiores quas molestiae
                neque distinctio ad expedita totam pariatur, fugit alias
                accusantium cupiditate earum nemo sapiente voluptatibus
                recusandae, suscipit culpa. Veniam, illo! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nemo voluptatum rem,
                praesentium consectetur impedit nihil modi porro minus dolore
                distinctio eveniet delectus obcaecati illo laboriosam vel quam
                fuga, sint hic!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAcceuil;
