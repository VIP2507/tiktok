import React from 'react'
import './Video/VideoFooter.css'
import MusicNoteIcon from "@material-ui/icons/MusicNote"
import Ticker from 'react-ticker'

function VideoFooter({name,description,song}) {
    return (
        <div className="video__footer">
            <div className="video__footertext">
                <h3>@{name}</h3>
                <p>{description} </p>
                <div className="video__footerMusic">
                    <MusicNoteIcon className="video__footerIcon"/>
                    <Ticker mode="smooth">
                        {({index})=>(
                            <>
                                <p>{song} </p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img 
            className="video__footer__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""/>
        </div>
    ) 
}

export default VideoFooter
