import React from "react";
import SearchBar from "./SearchBar";
import Video from "./Video";
import VideoThumbNail from "./VideoThumbNail";
import "./Home.css";


class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            display: [],
        }
    }
    render(){
        return (
            <section>
                {/* <SearchBar />
                <Video />
                <VideoThumbNail /> */}
            </section>
        )
    }
}

export default Home; 