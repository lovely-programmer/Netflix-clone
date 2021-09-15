import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'


const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row(props) {
    const [movies,setMovies] = useState([])

    const [trailerUrl,setTrailerUrl] = useState("")

    // A snippet of code which runs based on a specific conditions/variable
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(props.fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[props.fetchUrl])

    const opts = {
        height: '390',
         width: '100%',
     	playerVars: { 
            // https://developers.google.com/youtube/player_parameters
             autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl("")
        }
        else{
            movieTrailer(movie?.name || movie?.original_name || movie?.title || "")
            .then(url=>{

                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerUrl(
                    urlParams.get('v')
                ) 
            }).catch(error => console.log(error)) 
        }
    }


    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='row__posters'>
                {movies.map(movie=>(
                    <img onClick={()=> handleClick(movie)} key={movie.id} className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} src={`${baseUrl}${
                        props.isLargeRow ? movie.poster_path : movie.backdrop_path }`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            {/* 'XtMThy8QKq' */}
        </div>
    )
}

export default Row
