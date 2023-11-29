import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import {

  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import panier from "../assets/panier.svg"
import heart from "../assets/heart.svg";


const NavBar = () => {
  const [active, setActive] = useState("Acceuil");
  const [searchBar, setSearchBar] = useState(false)
  const navLinks = [
    {
      id: "home",
      title: "Acceuil",
    },
    {
      id: "boutique",
      title: "Boutique",
    },
    {
      id: "blog",
      title: "Blog",
    },
    {
      id: "contact",
      title: "Nous contacter",
    },
  ];
  return (
    <>
      <div
        className={`flex justify-end py-3 px-2 ${styles.paddingX} bg-black/[5%]`}
      >
        <Link>
          <p>Connexion </p>
        </Link>
      </div>
      {searchBar && (
        <div className=" absolute top-0 w-full z-10  ">
          <div className="h-[100vh]  bg-black/[0.2]">
            <div className="absolute flex flex-col justify-around w-full h-[350px] bg-white">
              <div className="flex justify-end items-end " onClick={()=>setSearchBar(!searchBar)}>
                <img src="" alt="" />
                kkkkkkkkk
              </div>
              <div className="flex justify-center items-center ">
                <input
                  type="text"
                  className=" py-2 border-b-2 border-gray-400 bg-transparent w-[60%] h-11 placeholder:text-[30px] placeholder:font-bold"
                  placeholder="Recherche"
                />
              </div>
              <div className="flex justify-center items-center text-[30px] py-3 pb-10">
                Recherche populaires :{" "}
                <span className="font-bold">Jordan Adidas Panda ...</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <nav className="relative w-full justify-center top-0 bg-primary py-3 px-10">
        <div
          className={`relative w-full flex justify-between items-center ${styles.paddingX}`}
        >
          <Link
            to={`/home`}
            onClick={() => setActive("Acceuil")}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="" className="h-[120px] w-[212px]" />
          </Link>
          <ul className="list-none lg:flex hidden gap-12">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title
                    ? "border-b-4 border-main-red font-semibold"
                    : ""
                } hover:text-main-red py-1 text-[19px] transition-all duration-[0.6s]`}
              >
                <Link to={`/${link.id}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className=" hidden lg:flex justify-around items-center gap-5">
            <img
              src={panier}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />
            <img
              src={heart}
              alt=""
              className="w-[30px] h-[30px] cursor-pointer"
            />

            <MagnifyingGlassIcon
              className="text-black h-[30px] w-[30px] cursor-pointer"
              onClick={() => setSearchBar(!searchBar)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;


