import React,{useState, useEffect} from 'react'
import axios from './axios'
import request  from './request'
import './Banner.css'

function Banner() {
    const [movies,setMovies] = useState([])

    // A snippet of code which runs based on a specific conditions/variable
    useEffect(()=> {
        async function fetchData() {
            const requests = await axios.get(request.fetchTrending)

            setMovies(
                requests.data.results[
                    Math.floor(Math.random() * requests.data.results.length - 1)
                ]
            );
            
            return requests
        }
        fetchData();
    },[])

    function truncate(str, n){
        return str?.length ? str.substr(0, n-1) + "..." : str
    }


    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner_contents">

                <h1 className='banner_title'>
                    {movies?.title || movies?.name || movies?.original_name }
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>List</button>
                </div>
                <h1 className='banner_description'>
                    {truncate(movies?.overview, 150)}
                </h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    )
}

export default Banner
