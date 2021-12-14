import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import VideoThumbNail from "./VideoThumbNail";
import "./Home.css";
import YouTube from "react-youtube";


class Home extends React.Component {
    constructor(){
        super()
        this.state = ({
            displayVideo: false,
            videosId: "7",
        })
    }
    
    handleDisplay = (event) => {
        this.setState({displayVideo: true})
        // this.setState({videoId: {song.id.videoId}})
        console.log(event.target.type)
}

    handleVideoId = () =>{
        if (this.state.displayVideo){
            // this.setState({videosId =  })
        }
    }



    render(){
        const { displayVideo, videosId } = this.state
        // console.log({videoId})
        if(displayVideo) {
            return <div>
                 <YouTube videoId={videosId}/>
            </div>
        }


        return (
            
            <section className="home">
                <SearchBar handleDisplay={this.handleDisplay} videosId={videosId} />
                <p>No search results yet! Enter above</p>

            </section>
        )
    }
}

export default Home; 

// AIzaSyCUGo0lHGnp0HZtbMZ2kUynD6ytG-I2HSQ