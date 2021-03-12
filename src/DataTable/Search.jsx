import React from 'react'

const Search = (props) => {
    const {onSearch} = props

    const searchHandler = (event) => {
        onSearch(event.target.value);
    }

    return (
        <div className="p-b-1">
            <input
                type="search"
                className="form-control"
                placeholder="Søg brugere"
                onChange={searchHandler}/>
        </div>
    )
}

export default Search
