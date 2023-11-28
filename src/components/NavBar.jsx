import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import {
  HeartIcon,
  UserIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";

const NavBar = () => {
  const [active, setActive] = useState("Acceuil");
  const navLinks = [
    {
      id: "/home",
      title: "Acceuil",
    },
    {
      id: "/boutique",
      title: "Boutique",
    },
    {
      id: "/blog",
      title: "Blog",
    },
    {
      id: "/contact",
      title: "Nous contacter",
    },
  ];
  return (
    <>
      <div
        className={`flex justify-end py-3 px-2 ${styles.paddingX} bg-black/[5%]`}
      >
        <Link>
          <p>Se connecter </p>
        </Link>
        <Link>
          <p> / S'inscrire</p>
        </Link>
      </div>
      <nav className="relative w-full justify-center top-0 z-20 bg-primary py-3">
        
        <div
          className={`relative w-full flex justify-between items-center ${styles.paddingX}`}
        >
          <Link
            to={`/`}
            onClick={() => setActive("Acceuil")}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="" className="h-[120px] w-[212px]" />
          </Link>
          <ul className="list-none lg:flex hidden gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setActive(link.title)}
                className={`${
                  active === link.title
                    ? " text-main-red font-semibold"
                    : "text-black"
                } hover:bg-main-red rounded-xl hover:text-white px-4 py-1 text-[19px] transition-all duration-[0.6s]`}
              >
                <Link to={`${link.id}`}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className=" hidden lg:flex justify-around items-center gap-5">
            {/* <div className="px-6 py-3 bg-gray-200 hover:bg-main-red/50 duration-[0.5s] transition-all text-[14px]  rounded-3xl cursor-pointer text-black">
            Signin
          </div>
          <div className="px-6 py-3 bg-main-red hover:bg-main-red/50 duration-[0.5s] transition-all  rounded-3xl text-[14px] cursor-pointer text-black">
            Signup
          </div> */}
            <UserIcon className="text-black h-[30px] w-[30px] cursor-pointer" />
            <ShoppingBagIcon className="text-black h-[30px] w-[30px] cursor-pointer" />
            {/* <HeartIcon className="text-black h-[30px] w-[30px] cursor-pointer" /> */}
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

// import React, { useState } from "react";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
// const NavBar = () => {
//   const [active, setActive] = useState("Home");
//   return (
//     <nav className="w-full flex items-center py-4 sticky top-0 z-20 bg-white">
//       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
//         <Link to="/" className="flex items-center gap-2" onClick={() => {setActive("Home")}}>
//           <img src={logo} alt="logo" />
//         </Link>
//         <ul className="list-none hidden sm:flex flex-row gap-10">
//           {navLinks.map((link) => (
//             <li
//               key={link.id}
//               onClick={() => setActive(link.title)}
//               className={`${
//                 active === link.title ? "border-b-4 border-main-yellow" : ""
//               } text-black text-[19px] transition-all duration-[0.5s]`}
//             >
//               <Link to={`${link.id}`}>{link.title}</Link>
//             </li>
//           ))}
//         </ul>
//         <div className=" hidden sm:flex justify-around  items-center gap-3">
//           <div className="px-6 py-3 bg-gray-200 hover:bg-main-yellow/50 duration-[0.5s] transition-all text-[14px]  rounded-3xl cursor-pointer text-black">
//             Signin
//           </div>
//           <div className="px-6 py-3 bg-main-yellow hover:bg-main-yellow/50 duration-[0.5s] transition-all  rounded-3xl text-[14px] cursor-pointer text-black">
//             Signup
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;
