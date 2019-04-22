import React from 'react';

const SearchBar = props => {
        console.log(props)
    return (
        <div className="d-flex justify-content-center col-md-4 m-2">
            <input type="search" className="form-control" value={props.searchText}
                onChange={props.handleSearchchange} name="search" id="searchBar" />
            <button className="btn btn-default" onClick={props.searchProduct}>
            <i className="fa fa-search"></i></button>
        </div>
    )
}
export default SearchBar;