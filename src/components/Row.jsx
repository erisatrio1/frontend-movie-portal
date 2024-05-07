import React from "react";
import useFetch from "../hooks/useFetch";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
import { Link } from "react-router-dom";

const Row = ({ title, rowID, url, route }) => {
  const { movies, error, loading } = useFetch(url);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  // console.log(movies);

  return (
    <div className="">
      {error && <div>{error}</div>}
      {loading && (
            <h1 className='text-center text-white'>Loading..</h1>
        )}
      {movies && (
        <div className="flex justify-between items-center my-4 mx-10 md:mx-24 text-white">
          <div className="ml-4 font-bold text-xl ">{title}</div>
          <Link className="mr-4 hover:text-[#F0A500] ease-in-out duration-300 cursor-pointer" to={`/${route}`}>
            See More
          </Link>
        </div>
      )}
      {movies && (
        <div className=" group mx-10 md:mx-24">
          <div
            id={"slider" + rowID}
            className="w-full h-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4"
          >
            {movies.slice(0,10).map((item, id) => (
              <Movie item={item} key={id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;
