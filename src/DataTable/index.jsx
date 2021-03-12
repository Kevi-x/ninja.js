import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'
import {calculateTotalNumberOfPages, getPageData, getSearchResult} from './helpers';
import {config} from '../config/config';

const DataTable = ({rows = [], rowsPerPage = config.defaultRowsPerPage}) => {

    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [queryString, setQueryString] = useState('');

    const filteredRows = getSearchResult(rows, queryString);

    const totalNumberOfPages = calculateTotalNumberOfPages(filteredRows.length, rowsPerPage);


    const searchHandler = (text) => {
        setQueryString(text);
        setCurrentPageNumber(0);
    }

    const changePageNumberHandler = (pageNumber) => setCurrentPageNumber(pageNumber);

    const rowsToRender = getPageData(filteredRows, currentPageNumber, rowsPerPage)

    return (
        <div>
            <Search onSearch={searchHandler}/>
            <table>
                <tbody>
                {rowsToRender.map(row =>
                    <Row key={row.per_id} row={row}/>
                )}

                </tbody>
            </table>
            <Pagination
                currentPageNumber={currentPageNumber}
                totalNumberOfPages={totalNumberOfPages}
                onChange={changePageNumberHandler}/>
        </div>
    )
}

DataTable.propTypes = {
    rows: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired
}

export default DataTable
