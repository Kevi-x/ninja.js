import React from 'react'
import PropTypes from 'prop-types';

const Search = ({onSearch, placeholder = 'Søg brugere'}) => {


    const searchHandler = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="p-b-1">
            <input
                type="search"
                className="form-control"
                placeholder={placeholder}
                onChange={searchHandler}/>
        </div>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

export default Search
