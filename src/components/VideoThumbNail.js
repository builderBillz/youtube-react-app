import React from "react";
import YouTube from "react-youtube";





class VideoThumbNail extends React.Component {
    render() {
        const { song } = this.props
        const {handleDisplay} = this.props
        const {videosId} = this.props
    

        return (
            <div className="videoDisplay">
                <img onClick={handleDisplay} src={song.snippet.thumbnails.medium.url} alt={song.snippet.description} type="v" value={song.id.videoId} />
                <p className="title">{song.snippet.title}</p>
                <YouTube videoId={song.id.videoId}/>
            </div>
        )
    }
}

export default VideoThumbNail;

