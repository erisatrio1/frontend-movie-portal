import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ url }) => {
  const { movies, error, loading } = useFetch(url);
  const [current, setCurrent] = useState("");

  // const [oldSlide, setOldSlide] = useState(0);
  // const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // beforeChange: (current, next) => {
    //   setOldSlide(current);
    //   setActiveSlide(next);
    // },
    afterChange: (current) => setActiveSlide2(current),
  };

  let movie;

  // movies
  //   ? (movie = movies[Math.floor(Math.random() * movies.length)])
  //   : console.log("Data unavailable");

  movies ? (movie = movies[activeSlide2]) : console.log("Data unavailable");

  // console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[500px] md:h-[700px] relative grid grid-cols-12 mb-20 md:mb-9">
      {loading && <h1 className="text-center text-white">Loading..</h1>}
      <div className="w-full h-full absolute top-0">
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full absolute top-0 bg-gradient-to-r from-black"></div>
      <div className="col-span-12 z-20 md:col-span-7">
        {movies && (
          <div className="h-full text-white mx-10 md:mx-24 flex flex-col justify-center">
            <h1 className="font-bold text-2xl text-[#8d6ff7] lg:text-3xl">
              FIND MOVIES
            </h1>
            <h1 className="font-bold text-3xl my-2 lg:text-4xl bg-gradient-to-r from-blue-700 to-pink-700 text-transparent bg-clip-text inline-block">
              TV SHOW AND MORE
            </h1>
            <h1 className="font-bold text-xl">Title: {movie?.title}</h1>
            <h1 className="">Released: {movie?.release_date}</h1>
            <h1 className="">{truncateString(movie?.overview, 100)}</h1>
          </div>
        )}
      </div>
      <div className="col-span-12 md:col-span-5 flex justify-center items-center">
        <Slider {...settings} className="w-48 md:w-80">
          {movies &&
            movies.map((movie, id) => (
              <div className="" key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  alt={movie?.title}
                  className="w-full h-full rounded-2xl"
                />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
