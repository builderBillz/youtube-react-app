import React from "react";
import SearchBar from "./SearchBar";
import "./Home.css";
import YouTube from "react-youtube";


class Home extends React.Component {
    constructor(){
        super()
        this.state = ({
            displayVideo: false,
            videosId: "",
            darkMode: false,
        })
    }
    
    handleDisplay = (event) => {
        this.setState({displayVideo: true})
        this.setState({videosId:event.target.name})
        console.log(event.target.name)
    
}

handleDarkMode = (event) => {
    const darkMode = this.state.darkMode
    this.setState({darkMode:!darkMode})

}



    render(){
        const { displayVideo, videosId, darkMode} = this.state
       
        const opts = {
            height: '700',
            width: '100%',
            playerVars: {
              autoplay: 1,
            },
          };

          console.log(darkMode)
        if(displayVideo) {
            if(darkMode){
            return <div className="theater" 
            style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: 25,
                height: 0
              }}>
                 <YouTube videoId={videosId} opts={opts} />;
                 <button className="switch" onClick={this.handleDarkMode}>Dark Mode Toggle</button>
            </div>}
            
            else{
                return <div className="default" 
                style={{
                position: "relative",
                paddingBottom: "56.25%",
                paddingTop: 25,
                height: 0
              }}>
                 <YouTube videoId={videosId} opts={opts} />;
                 <button className="switch" onClick={this.handleDarkMode}>Dark Mode Toggle</button>
            </div>
            }
        }
        


        return (
            
            <section className="home">
                <SearchBar handleVideoId={this.handleVideoId} handleDisplay={this.handleDisplay} videosId={videosId} />

            </section>
        )
    }
}

export default Home; 

// AIzaSyCUGo0lHGnp0HZtbMZ2kUynD6ytG-I2HSQ