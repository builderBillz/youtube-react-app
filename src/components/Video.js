import React from "react";
import "./Video.css";
import VideoThumbNail from "./VideoThumbNail";




class Video extends React.Component {
    render() {
        const { result } = this.props;
        const {handleDisplay} = this.props
        const {videosId} = this.props
        // console.log({videosId})  
        let VideoList = result.map((song, i) => {
            return <VideoThumbNail handleDisplay={handleDisplay} videosId={videosId}  song={song} key={song.id.videoId} />
        })
        // console.log({VideoList})

        return (
            <div className="videosList">
                {VideoList}
            </div>
        )
    }
}

export default Video;