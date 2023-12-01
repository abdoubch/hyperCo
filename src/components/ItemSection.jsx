import React, { useState } from "react";
import ItemCard from "./ItemCard";
import ReactPaginate from "react-paginate";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { data } from "autoprefixer";
import Pagination from "./Pagination";

const ItemSection = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 9;

  const indexOfLastPost = currentPage * itemPerPage;
  const indexOfFirstPost = indexOfLastPost - itemPerPage;

  const displayItems = props.data
    .slice(indexOfFirstPost, indexOfLastPost)
    .map((item, index) => (
      <ItemCard
        index={index}
        image={item.img}
        price={item.price}
        name={item.name}
      />
    ));
  const paginate = (pageNumber) => {
    const element = document.getElementById("top"); // assuming you have an element with id 'top'
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    setCurrentPage(pageNumber);
  };
  const totalPosts = props.data.length;

  const nextPage = () => {
    if (currentPage <= totalPosts / itemPerPage) {
      const element = document.getElementById("top"); // assuming you have an element with id 'top'
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      const element = document.getElementById("top"); // assuming you have an element with id 'top'
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-20 py-10">
        {displayItems}
      </div>
      <div className="flex justify-center items-center">
        <Pagination
          itemPerPage={itemPerPage}
          totalPosts={totalPosts}
          paginate={paginate}
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ItemSection;
