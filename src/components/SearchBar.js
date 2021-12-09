import React from "react";
import "./SearchBar.css";

class SearchBar extends React.component  {
    constructor() {
        super();
        this.state = {
            value: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
    }

    handleUserInput = (event) => {
        const { value } = event.target.value;
        this.setState({
            value: event.target.value,
        })
    }
    
        render() {
            return ( 
        
        <form onSubmit={this.handleSubmit} className="video-container">
            <input 
            type="text" 
            placeholder="Search..."
            onChange={this.handleUserInput}
            />
            <button type="submit">Search</button>
        </form>
    );
    }
}

export default SearchBar;