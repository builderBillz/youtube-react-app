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
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.userInput}&type=video&key=${process.env.REACT_APP_API_KEY}`
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
        const { value } = event.target;
        this.setState({
            userInput: value,
        })
    }
    
        render() {
        const { userInput, result } = this.state;
        console.log({userInput})
        console.log(process.env.REACT_APP_API_KEY)
            return ( 
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
    );
    }
}

export default SearchBar;