import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import VideoThumbNail from "./VideoThumbNail";
import "./Home.css";


class Home extends React.Component {
    
    render(){
        return (

            <section className="home">
                <SearchBar />
                <p>No search results yet! Enter above</p>

            </section>
        )
    }
}

export default Home; 

// AIzaSyCUGo0lHGnp0HZtbMZ2kUynD6ytG-I2HSQ