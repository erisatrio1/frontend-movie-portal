import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);

  return (
    <Link
      to={`/details/${item?.id}`}
      className="cursor-pointer"
      key={item?.id}
    >
      <img
        className="object-cover"
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
      />
      {/* <div className="absolute top-0 left-0 w-full h-full text-white">
        <p>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-400" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-400" />
          )}
        </p>
      </div> */}
      <div className="w-full text-white p-2">
        <p className="text-sm md:text-xl font-bold">
          {item?.title}
        </p>
        
        <p className="text-sm md:text-lg">Released: {item?.release_date}</p>
        {/* <p className="whitespace-normal text-xs md:text-base">Popularity: {item?.popularity}</p> */}
      </div>
    </Link>
  );
};

export default Movie;
