import React from "react";
import "./SearchBar.css";
import Video from "./Video";

class SearchBar extends React.Component  {
    constructor() {
        super();
        this.state = {
            userInput: "",
            result: [],
            search:false,
        }
    }

    handleSearch = () => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => {
            return response.json()})
        .then((video) => {

            this.setState({ result: video.items })
            this.setState({ search: true })
        })
        .catch((err) => {
            console.log('error fetching data')
        })
    }

    
    

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            userInput: "",
        })
    }

    handleUserInput = (event) => {
        const { value } = event.target;
        this.setState({
            userInput: value,
        })
    }


        render() {
        const { userInput, result, search } = this.state
        const {handleDisplay} = this.props
      
        if(search) {

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
                <Video  result={result} handleDisplay={handleDisplay}  /> 
            </div>)
        }
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
                <p>No search results yet! Enter above</p> 
                <Video  result={result} handleDisplay={handleDisplay}  />
            </div>
    );
    }
}

export default SearchBar;