import React from "react";
import Searchbar from "./Searchbar";
import Video from "./Video";
import VideoThumbNail from "./VideoThumbNail";
import "./Home.css";


class Home extends React.component {
    constructor() {
        super();
        this.state = {
            display: [],
        }
    }
    render(){
        return (
            <section className="home-screen">
                <Searchbar />
                <Video />
                <VideoThumbNail />
            </section>
        )
    }
}

export default Home;