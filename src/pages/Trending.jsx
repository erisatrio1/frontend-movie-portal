import React, { useState } from "react";
import Request from "../request/Request";
import useFetch from "../hooks/useFetch";
import Movie from "../components/Movie";
import Pagination from "../utilities/Pagination";

const Trending = () => {
  const [page, setPage] = useState(1);
  const { paginationUrl } = Request;
  const { data } = useFetch(`${paginationUrl.pagiTrending}page=${page}`);

  return (
    <>    
      <header className="text-white text-4xl font-bold mb-4 group mx-10 md:mx-24">Trending page: {page}</header>
      <main>
        {data && (
          <div className="group mx-10 md:mx-24">
            <div
              className="w-full h-full grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4"
            >
              {data.results.map((item, id) => (
                <Movie item={item} key={id} />
              ))}
            </div>
          </div>
        )}
        <Pagination page={page} setPage={setPage} lastPage={data?.total_pages}/>
      </main>
    </>
  );
};

export default Trending;
