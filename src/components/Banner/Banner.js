import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constant'
import { baseUrl, imgUrl } from '../../constants/constant'
import './Banner.css'
import axios from 'axios'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            // console.log(response.data.results[0])
            setMovie(response.data.results[0])

        })
    }, [])
    return (
        <div className='banner' style={{ backgroundImage: `${movie && imgUrl + movie.backdrop_path}`}}>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                <div className='banner_button' >
                    <button className='button'>Playing</button>
                    <button className='button'>My lIst</button>

                </div>
                <h1 className='discription'>{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom">

            </div>

        </div>
    )
}

export default Banner
