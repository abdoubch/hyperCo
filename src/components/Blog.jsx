import React from "react";
import { Link } from "react-router-dom";
import bigPic from "../assets/blogPic.svg";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
const Blog = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="py-14 flex justify-between w-full">
          <h2 className="font-bold text-5xl">Blog</h2>
          <Link to={"/boutique"} onClick={() => {}}>
            <p className="font-bold text-xl px-4 py-1 hover:bg-main-red hover:text-white transition-colors duration-[.5s] rounded-3xl">
              Plus
            </p>
          </Link>
        </div>
      </div>
      <div className="border-2 border-black rounded-2xl">
        <img src={bigPic} alt="" className="object-cover" />
        <div className="flex flex-col justify-between px-3">
          <h2 className="font-bold text-[30px]">
            La formidable histoire des sneakers Air Jordan
          </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            sint ea, deserunt minima officia amet ipsum vel ducimus suscipit
            quaerat praesentium reprehenderit pariatur nam nesciunt ratione
            totam, molestiae animi libero! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eius, quos ut mollitia delectus quidem
            voluptatibus quas quisquam dolores numquam ullam ipsam eum sunt
            veniam. Eum dignissimos ullam eius beatae neque. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Tempore quis eligendi facere?
            Quo dolor repellat id dignissimos voluptates eveniet deleniti
            voluptatum impedit labore, quasi esse atque earum facere numquam
            animi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Quidem id veniam asperiores! Eius, iure culpa. Nulla debitis veniam
            molestiae similique tenetur hic, non harum iure quis reprehenderit
            eos repellat optio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Neque, eaque iure illo in accusantium, quisquam,
            iste mollitia culpa reprehenderit blanditiis suscipit nisi possimus
            sit magni aperiam adipisci quasi ducimus? Libero.
          </p>
          <div className="flex flex-col justify-center items-center w-full my-5">
            <div className="bg-main-red w-20 h-2 rounded-md" />
            <div className="font-semibold cursor-pointer">Voir plus</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-14">
        <Link>
          <div className="w-14 h-14 mx-3 bg-white border-[3px] border-main-red rounded-full flex justify-center items-center">
            <ArrowLeftIcon className="text-black w-10 h-10" />
          </div>
        </Link>

        <Link>
          <div className="w-14 h-14 mx-3  bg-black rounded-full flex justify-center items-center">
            <ArrowRightIcon className="text-white w-10 h-10" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
