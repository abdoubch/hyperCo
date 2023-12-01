import React from 'react'
import logo from "../assets/lightlogo.svg"
import { styles } from '../styles';
import facebook from "../assets/facebookIcon.svg"
import ig from "../assets/igIcon.svg";
import twitter from "../assets/twitterIcon.svg";
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <div
      className={`w-full bg-black flex flex-col items-center text-white py-10 ${styles.paddingX}`}
    >
      <div className="w-full flex flex-row py-11 items-start justify-between">
        <div className="flex flex-col gap-10">
          <img src={logo} alt="" className="w-[164px] h-[115px]" />
          <p className="text-start max-w-[282px]">
            La référence ultime des passionnés de streetwear en Algérie.{" "}
          </p>
          <div className="flex gap-4">
            <img src={facebook} alt="" className="w-[33px] h-[33px]" />
            <img src={ig} alt="" className="w-[33px] h-[33px]" />
            <img src={twitter} alt="" className="w-[33px] h-[33px]" />
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <h2 className="font-semibold text-[29px]">EN SAVOIR PLUS</h2>
          <ul className="flex flex-col gap-10">
            <li className="cursor-pointer hover:text-main-red transition-color duration-[0.6s]">
              A propos de nous
            </li>
            <li className="cursor-pointer hover:text-main-red transition-color duration-[0.6s]">
              Service clients
            </li>
            <li className="cursor-pointer hover:text-main-red transition-color duration-[0.6s]">
              Infos de livraison
            </li>
            <li className="cursor-pointer hover:text-main-red transition-color duration-[0.6s]">
              Termes et conditions
            </li>
          </ul>
        </div>
        <div className="flex flex-col max-w-[500px] gap-5">
          <h2 className="font-semibold text-[29px]">REJOIGNEZ-NOUS</h2>
          <p className="text-[20px] py-4">
            Envie de rejoindre la communauté des Hypers ? Inscrivez-vous à notre
            newsletter pour recevoir les dernières news, sorties et promotions.
          </p>
          <div className="flex gap-7">
            <div className="bg-white text-black px-7 py-4 rounded-full text-[20px] font-medium">
              Entrer votre mail
            </div>
            <div className="bg-white h-14 w-14 rounded-full flex justify-center items-center">
              <ArrowRightIcon className="w-10 h-10 text-black" />
            </div>
          </div>
        </div>
      </div>
      <div className="font-thin text-[15px] mt-4">
        Copyright © 2023 Hypers&Co ™. Tous droits réservés.
      </div>
    </div>
  );
}

export default Footer