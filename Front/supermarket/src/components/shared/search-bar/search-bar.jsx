import React, { Component } from 'react';


class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="col-xs-4">
                <input type="search" className="form-control" name="search" id="searchBar" />
            </div>
        );
    }
}

export default SearchBar;