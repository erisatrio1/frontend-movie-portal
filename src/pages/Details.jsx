import React from 'react'
import { useParams } from 'react-router-dom'
import Request from '../request/Request';
import useFetch from '../hooks/useFetch';

const Details = () => {
    const { id } = useParams();
    const { detailUrl } = Request;
    const url = detailUrl(id);
    const { data, loading } = useFetch(url);
    // console.log(data);

    return ( 
        <>
        {loading && (
            <h1 className='text-center text-white'>Loading..</h1>
        )}
        {data && (
            <>
                <div className="w-full h-[400px] md:h-[500px] relative">
                    <div className="w-full h-full absolute top-0">
                        <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt={data?.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-full absolute top-0 bg-gradient-to-r from-black"></div>
                </div>
                <div className=' -translate-y-36 mx-10 md:mx-24'>
                    {/* <div className='h-auto w-[140px]'>
                        <img src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`} alt={data?.title} className="w-full h-full object-cover rounded-md " />
                    </div> */}
                    <div className='text-white'>
                        <h1 className='text-3xl font-bold'>{data?.title}</h1>
                        <p>{data?.release_date}</p>
                        <p>{data?.vote_average} votes</p>
                        <p>{data?.overview}</p>
                        <div className='flex flex-wrap gap-1 text-white'>
                            <p className='p-1'>Genres:</p>                       
                            {data?.genres.map((item, id) => (
                                <p className='bg-slate-800 p-1 rounded-md' key={id}>{item.name}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        )}        

        </>
    )
}

export default Details