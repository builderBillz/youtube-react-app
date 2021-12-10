import React from "react";
import "./SearchBar.css";

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
            `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => response.json())
        .then((json) => {

            console.log(json)
            this.setState({
                result: json,
            })
        })
            .catch((err) => {
                console.log('error fetching data')
            })
    }

    componentDidMount = () => {
        this.handleSearch();

    };
    
    

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleUserInput = (event) => {
        const { userInput } = event.target.value;
        this.setState({
            userInput: event.target.value,
        })
    }
    
        render() {
        
            return ( 
        <form onSubmit={this.handleSubmit} className="searchBox">
            <input
            className="searchInput"
            type="text" 
            placeholder="Search..."
            onChange={this.handleUserInput}
            />
            <button className="searchButton" type="submit">Search</button>
        </form>
    );
    }
}

export default SearchBar;