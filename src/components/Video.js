import React from "react";
import "./Video.css";
import VideoThumbNail from "./VideoThumbNail";




class Video extends React.Component {
    render() {
        const { result } = this.props;
        const {handleDisplay} = this.props
      
        let VideoList = result.map((song, i) => {
            return <VideoThumbNail handleDisplay={handleDisplay} song={song} key={song.id.videoId} />
        })
      

        return (
            <div className="videosList">
                {VideoList}
            </div>
        )
    }
}

export default Video;