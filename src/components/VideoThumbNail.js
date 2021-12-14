import React from "react";
import YouTube from "react-youtube";





class VideoThumbNail extends React.Component {
    render() {
        const { song } = this.props

        return (
            <div className="videoDisplay">
                <img src={song.snippet.thumbnails.medium.url} alt={song.snippet.description} type="video"/>
                <p className="title">{song.snippet.title}</p>
                <YouTube videoId={song.id.videoId}/>
            </div>
        )
    }
}

export default VideoThumbNail;

