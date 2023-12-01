import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import {

  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import panier from "../assets/panier.svg"
import heart from "../assets/heart.svg";
import close from "../assets/coleIcon.svg"

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
            <div className="absolute flex flex-col justify-around  w-full h-[350px] bg-white px-5">
              <div
                className="flex justify-end items-end pr-2 pt-2"
                onClick={() => setSearchBar(!searchBar)}
              >
                <img src={close} alt="" className="w-7 h-7 cursor-pointer" />
              </div>
              <div className="flex justify-center items-center">
                <div className="flex border-b-2 border-gray-400 w-[70%] py-3 ">
                  <input
                    type="text"
                    className=" py-2  bg-transparent w-full h-11 text-[30px] placeholder:text-[30px] placeholder:font-semibold focus:outline-none focus:border-none"
                    placeholder="Recherche ..."
                  />
                  <MagnifyingGlassIcon className="text-[#D70707]/[0.8] w-[40px] h-[40px] cursor-pointer" />
                </div>
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
                } hover:text-main-red py-1 text-[19px] transition-all duration-[0.3s]`}
              >
                <Link to={`/${link.id}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="  flex justify-around items-center gap-3">
            <img
              src={panier}
              alt=""
              className="w-[34px] h-[34px] cursor-pointer lg:flex"
            />
            <img
              src={heart}
              alt=""
              className="w-[34px] h-[34px] cursor-pointer"
            />

            <MagnifyingGlassIcon
              className="text-black h-[34px] w-[34px] cursor-pointer lg:flex hidden"
              onClick={() => setSearchBar(!searchBar)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;


