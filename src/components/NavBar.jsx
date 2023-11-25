import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1hyper.png"

const NavBar = () => {
  const [active, setActive] = useState("Acceuil");
  const navLinks = [
    {
      id: "/",
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
      id: "/apropos",
      title: "A propos de nous",
    },
    {
      id: "/contact",
      title: "Nous contacter",
    },
  ];
  return (
    <nav className="w-full flex justify-center py-4 sticky top-0 z-20 bg-white">
      <div
        className={`w-full flex justify-between items-center max-w-7xl mx-auto`}
      >
        <Link
          to={`/`}
          onClick={() => setActive("Acceuil")}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="" className="h-[120px] w-[212px]" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              onClick={() => setActive(link.title)}
              className={`${
                active === link.title ? "border-b-4 border-main-red" : ""
              } py-1 text-black text-[19px] transition-all duration-[0.2s]`}
            >
              <Link to={`${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <div className=" hidden sm:flex justify-around  items-center gap-3">
          <div className="px-6 py-3 bg-gray-200 hover:bg-main-red/50 duration-[0.5s] transition-all text-[14px]  rounded-3xl cursor-pointer text-black">
            Signin
          </div>
          <div className="px-6 py-3 bg-main-red hover:bg-main-red/50 duration-[0.5s] transition-all  rounded-3xl text-[14px] cursor-pointer text-black">
            Signup
          </div>
        </div>
      </div>
    </nav>
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
