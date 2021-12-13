import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import VideoThumbNail from "./VideoThumbNail";
import "./Home.css";


class Home extends React.Component {
    constructor(){
        super()
        this.state = ({
            displayVideo: false,
            videoId: "",
        })
    }
    
    handleDisplay = (event) => {
        this.setState({displayVideo: true})
        this.setState({videoId: event.target.key})

} 



    render(){
        const { displayVideo, videoId } = this.state
        if(displayVideo) {
            return <div>
                {videoId}
            </div>
        }


        return (

            <section className="home">
                <SearchBar handleDisplay={this.handleDisplay} />
                <p>No search results yet! Enter above</p>

            </section>
        )
    }
}

export default Home; 

// AIzaSyCUGo0lHGnp0HZtbMZ2kUynD6ytG-I2HSQ