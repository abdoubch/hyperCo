import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  ArrowDownRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const ItemCard = ({ index, image, price, name }) => {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="sm:min-w-[388px] sm:w-[388px] sm:h-[472px] group rounded-[10px] px-3"
      >
      <Link>
      <div className="relative w-full sm:h-[388px] rounded-[10px] p-10 flex justify-center items-center group-hover:bg-[#D70707]/[.05] transition-colors duration-[0.4s] ">
        {liked ? (
          <HeartIconSolid
            onClick={() => setLiked(!liked)}
            className="absolute text-main-red w-8 h-8 right-4 top-4 cursor-pointer"
          />
        ) : (
          <HeartIcon
            onClick={() => setLiked(!liked)}
            className="absolute w-8 h-8 right-4 top-4 cursor-pointer"
          />
        )}
        
        <img src={image} alt="" className="w-[388px]" />
      </div>
        </Link>
      <div className="flex justify-between items-center py-4 w-full">
        <div className="flex flex-col">
          <h1 className="font-bold text-[23px]">{name}</h1>
          <p>{price}</p>
        </div>
        <Link to={'/product'}>
          <div className="h-[50px]  w-[50px] rounded-full bg-black group-hover:bg-main-red transition-colors duration-[0.4s] flex justify-center items-center">
            <ArrowDownRightIcon className="text-[20px] text-white w-5 h-5 text-center " />
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default ItemCard;
