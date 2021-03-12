import React from 'react'

import Page from './Page'

const Pagination = ({currentPageNumber = 0, totalNumberOfPages, onChange}) => {

    if (totalNumberOfPages <= 1) {
        return null;
    }

    const pages =
        [...Array(totalNumberOfPages).keys()]
            .map(pageNumber => {
                return <Page
                    key={pageNumber}
                    currentPageNumber={currentPageNumber}
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
