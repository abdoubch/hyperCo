import React, { useState } from 'react'
import { styles } from '../styles'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ItemSection } from '../components';
import { data } from 'autoprefixer';
import basket1 from "../assets/basket1.png"
import basket2 from "../assets/basket2.png";
import basket3 from "../assets/basket3.png";
import basket4 from "../assets/basket5.svg";
import basket5 from "../assets/basket6.svg";


const PageBoutique = () => {
  const data = [
    {
      name: "Basket",
      img: basket1,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket2,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket3,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket4,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket5,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket1,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket2,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket3,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket4,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket5,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket1,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket2,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket3,
      price: "14000DA",
    },
    {
      name: "Basket",
      img: basket5,
      price: "14000DA",
    },
    {
      name: "JJJJJJJJJ",
      img: basket4,
      price: "14000DA",
    },
  ];
  const [active, setActive] = useState("tout")
  const criteres = [
    {
      id: "tout",
      title: "TOUT",
    },
    {
      id: "sneakers",
      title: "SNEAKERS",
    },

    {
      id: "hoodie",
      title: "HOODIE",
    },
    {
      id: "tshirt",
      title: "T-SHIRT",
    },
  ];
  return (
    <>
      <div className={`${styles.paddingX}`}>
        <div className="flex justify-center items-center my-10">
          <h2 className="font-bold text-5xl">Boutique</h2>
        </div>
        <div className="flex justify-between items-center my-24">
          <div className="flex gap-4">
            {criteres.map((filtre) => (
              <div
              id="top"
                className={`${
                  active === filtre.id
                    ? "bg-main-red border-0 text-white"
                    : "border-[0.5px] border-black hover:text-main-red "
                } text-[20px] font-medium  px-5 py-3 rounded-full cursor-pointer transition-all duration-[0.4s]`}
                onClick={() => setActive(filtre.id)}
              >
                {filtre.title}
              </div>
            ))}
          </div>
          <div className=" flex justify-between px-5 rounded-full py-3 border-2 border-black">
            <input
              type="text"
              name=""
              placeholder="Rechercher ..."
              className="bg-transparent focus:outline-none focus:border-none"
            />
            <MagnifyingGlassIcon className="text-black w-[40px] h-[40px] cursor-pointer" />
          </div>
        </div>
        <div className=''>
          <ItemSection data={data} />
        </div>
      </div>
    </>
  );
}

export default PageBoutique