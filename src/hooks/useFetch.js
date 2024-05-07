import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ( url ) => {
//   const abortCont = new AbortController();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'Accept': 'application/json',
          Authorization:
            "Bearer " + import.meta.env.VITE_IMDB_HEADERS_AUTHORIZATION,
        },
        // signal: abortCont.signal,
      })
      .then((response) => {
        // console.log(response);
        // if (!response.ok) {
        //   // error coming back from server
        //   throw Error("could not fetch the data for that resource");
        // }
        setData(response.data);
        setMovies(response.data.results);
        setLoading(false); 
        setError(null);
      })
      .catch((error) => {
        // if (error.name === 'AbortError') {
        //     console.log('fetch aborted');
        // } else {
        //     setError(error)
        // }
        setError(error)
      });
    // return () => abortCont.abort();
  }, [url]);

  return { data, movies, error, loading };
};

export default useFetch;
