import React from "react";
import "./SearchBar.css";
import Video from "./Video";

class SearchBar extends React.Component  {
    constructor() {
        super();
        this.state = {
            userInput: "",
            result: [],
        }
    }

    handleSearch = () => {
        fetch(
<<<<<<< HEAD
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`
            )
        .then((response) => response.json())
        .then((json) => {
=======
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            return response.json()})
        .then((video) => {
>>>>>>> main

            console.log(video.items)
            this.setState({ result: video.items })
        })
        .catch((err) => {
            console.log('error fetching data')
        })
    }

<<<<<<< HEAD
=======
    
    

>>>>>>> main
    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleUserInput = (event) => {
        const { value } = event.target;
        this.setState({
            userInput: value,
        })
    }
    
        render() {
        const { userInput, result } = this.state
              console.log({result})      
            return ( 
            <div>
                <form onSubmit={this.handleSubmit} className="searchBox">
                    <input
                    className="searchInput"
                    type="text" 
                    placeholder="Search..."
                    value={userInput}
                    onChange={this.handleUserInput}
                    />
                    <button onClick={this.handleSearch} className="searchButton" type="submit">Search</button>
                </form>
                <Video result={result} /> 
            </div>
    );
    }
}

export default SearchBar;