import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constant'
import { baseUrl, } from '../../constants/constant'
import './Banner.css'
import axios from 'axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            for (let i = 0; i < response.data.results.length; i++) {
                // Generate a random index within the bounds of the array
                const randomIndex = Math.floor(Math.random() * response.data.results.length);
                // Swap elements at i and randomIndex to shuffle the array
                [response.data.results[i], response.data.results[randomIndex]] = [response.data.results[randomIndex], response.data.results[i]];
                // Call setMovie() with the randomly selected movie object
                setMovie(response.data.results[i]);
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <div className='banner' style={{
            backgroundImage: movie && `url('https://image.tmdb.org/t/p/original${movie.backdrop_path
                }')`,
            backgroundSize: 'cover',
            height: '448px',
            color: 'white'
        }}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_button' >
                    <button className='button'>Playing</button>
                    <button className='button'>My lIst</button>

                </div>
                <h1 className='discription' style={
                    {textOverflow:'ellipsis',WebkitLineClamp:3}
                }>{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom">

            </div>

        </div>
    )
}

export default Banner
