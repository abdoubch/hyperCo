import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";

import ItemCard from "./ItemCard";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";


const BestSellers = ({data ,title}) => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [isTab, setIsTab] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 940px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery.addEventListener("change", handleMediaChange);
    };
  }, []);
  useEffect(() => {
    const mediaQuery1 = window.matchMedia("(max-width: 1300px)");
    setIsTab(mediaQuery1.matches);
    const handleMediaChange = (event) => {
      setIsTab(event.matches);
    };
    mediaQuery1.addEventListener("change", handleMediaChange);
    return () => {
      mediaQuery1.addEventListener("change", handleMediaChange);
    };
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTab ? 2 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <motion.div
        variants={fadeIn("left", "spring", 0.3, 0.77)}
        className="py-7 flex justify-between xs:max-w-lg"
      >
        <h2 className="font-bold text-5xl">{title}</h2>
        <Link to={"/boutique"} onClick={()=>{}}>
          <p className="font-bold text-xl px-4 py-1 hover:bg-main-red hover:text-white transition-colors duration-[.5s] rounded-3xl">
            Plus
          </p>
        </Link>
      </motion.div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <ItemCard index={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default BestSellers;
