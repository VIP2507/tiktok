import React, { useState } from 'react'
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share"
import './VideoSidebar.css'

function VideoSidebaar({likes,messages,Share}) {

    const [liked,setLiked]=useState(false);

    return (
        <div  className="video__sidebar">
            <div className="video__sidebaar__button">
                { liked ? (
                    <FavoriteIcon fontSize="large"
                    onClick={(e)=>setLiked(false)}/>
                ):(
                    <FavoriteBorderIcon fontSize="large"
                    onClick={(e) => setLiked(true)}/>
                )
            }
                <p>{liked ? likes+1 : likes}</p>
            </div>
            <div className="video__sidebaar__button">
                <MessageIcon fontSize="large"/>
                <p>{messages}</p>
            </div>
            <div className="video__sidebaar__button">
                <ShareIcon fontSize="large"/>
                <p>{Share}</p>
            </div>
        </div>
    )
}

export default VideoSidebaar
