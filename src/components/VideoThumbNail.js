import React from "react";






class VideoThumbNail extends React.Component {
    render() {
        const { song } = this.props
        const {handleDisplay} = this.props
    

        return (
            <div className="videoDisplay">
                <img onClick={handleDisplay} name={song.id.videoId} src={song.snippet.thumbnails.medium.url} alt={song.snippet.description} type="video"/>
                <p className="title">{song.snippet.title}</p>
            </div>
        )
    }
}

export default VideoThumbNail;

