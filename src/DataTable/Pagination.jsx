import React from 'react'

import PaginationPageItem from './PaginationPageItem'
import PropTypes from 'prop-types';

const Pagination = ({currentPageNumber = 0, totalNumberOfPages, onChange}) => {

    if (!totalNumberOfPages || totalNumberOfPages <= 1) {
        return null;
    }

    const pages =
        [...Array(totalNumberOfPages).keys()]
            .map(pageNumber => {
                return <PaginationPageItem
                    key={pageNumber}
                    isActive={pageNumber === currentPageNumber}
                    pageNumber={pageNumber}
                    onChange={onChange}/>
            })


    return (
        <ul className="pagination">
            {pages}
        </ul>
    )
}

Pagination.propTypes = {
    currentPageNumber: PropTypes.number.isRequired,
    totalNumberOfPages: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Pagination
