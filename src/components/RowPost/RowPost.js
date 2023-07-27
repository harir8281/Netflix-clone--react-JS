import React, { useEffect, useState } from 'react'
import './RowPost.css'
import YouTube from 'react-youtube'
import axios from 'axios'
import { API_KEY, imgUrl, baseUrl } from '../../constants/constant'
function RowPost({ title, isSmall, videoId }) {

    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
            autoplay: 1, // Autoplay enabled
            controls: 0, // Hide player controls
            showinfo: 0, // Hide video title and player actions
            modestbranding: 1,
            mute: 1 // Hide YouTube logo
        },
    };
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response) => {
            setPosts(response.data.results)
        }).catch((error) => {
            console.error(error)
        })
    }, [])


    return (
        <div className='row'>
            <h2>{title}</h2>
            <YouTube videoId={videoId} opts={opts} autoplay />

            <div className="posters">
                {
                    posts && posts.map((obj, index) => {
                        return (
                            <img className={isSmall ? 'small_poster' : 'poster'} src={`${imgUrl + obj.backdrop_path}`} alt="" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RowPost