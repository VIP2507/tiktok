import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from '../VideoFooter';
import VideoSidebaar from '../VideoSidebaar';

function Video({url , name , description, song ,likes, messages, Share}) {

    const [playing,setPlaying] = useState(false)
    const videoRef = useRef(null);
    const handleVideoPress = () =>{
            if(playing){
                videoRef.current.pause();
                setPlaying(false);
            }else{
                videoRef.current.play();
                setPlaying(true);
            }
    }

    return (
        <div className="video">
           <video 
           onClick={handleVideoPress}
           className="video__player"
           loop
           ref={videoRef}  src={url} />
           <VideoFooter name={name} description={description} song={song} />
           <VideoSidebaar likes={likes} messages={messages} Share={Share} />
        </div>
    )
}

export default Video
