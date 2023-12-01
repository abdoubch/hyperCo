import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({itemPerPage,totalPosts,paginate,nextPage,prevPage,currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts/itemPerPage); i++) {
        pageNumbers.push(i)
    }
    console.log(pageNumbers)
    const handlClick =(number)=>{
        paginate(number)
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth", // Use 'auto' if you don't want smooth scrolling
        });
        
    }
  return (
    <nav className="flex py-20">
      <div
        onClick={prevPage}
        className={`${
          currentPage === 1
            ? "bg-black/[0.2] text-white cursor-not-allowed"
            : "cursor-pointer bg-white text-black border-black hover:border-main-red  hover:text-white hover:bg-main-red"
        }  w-14 h-14 mx-10  rounded-full flex justify-center items-center border-2  transition-colors duration-[0.4s]`}
      >
        <ArrowLeftIcon className=" w-7 h-7" />
      </div>

      {/* <ul className='flex'>
            {pageNumbers.map((number)=>(
                <li key={number} className='px-8'>
                       <div onClick={()=>paginate(number)} className='cursor-pointer'>
                        {number}
                       </div>
                </li>
            ))}
        </ul> */}
      <div
        onClick={nextPage}
        className={`${
          currentPage === Math.ceil(totalPosts / itemPerPage)
            ? "bg-black/[0.2] text-white cursor-not-allowed"
            : "cursor-pointer bg-white text-black border-black hover:border-main-red  hover:text-white hover:bg-main-red"
        }  w-14 h-14 mx-10  rounded-full flex justify-center items-center border-2  transition-colors duration-[0.4s]`}
      >
        <ArrowRightIcon className=" w-7 h-7" />
      </div>
    </nav>
  );
}

export default Pagination

{/* <div className="w-14 h-14 mx-3  bg-black rounded-full flex justify-center items-center">
            <ArrowRightIcon className="text-white w-10 h-10" />
          </div> */}