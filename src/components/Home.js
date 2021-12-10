import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import VideoThumbNail from "./VideoThumbNail";
import "./Home.css";


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
        }
    }

    

    render(){
        return (

            <section className="home">
                <SearchBar />
                <Video className="videoDisplay" />
                <VideoThumbNail />

            </section>
        )
    }
}

export default Home; 

// AIzaSyCUGo0lHGnp0HZtbMZ2kUynD6ytG-I2HSQ