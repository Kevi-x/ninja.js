import React from 'react'

import PaginationPageItem from './PaginationPageItem'

const Pagination = ({currentPageNumber = 0, totalNumberOfPages, onChange}) => {

    if (totalNumberOfPages <= 1) {
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

export default Pagination
