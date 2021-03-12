import React, {useState} from 'react'
import PropTypes from 'prop-types';
import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'
import {calculateTotalNumberOfPages, getPageData} from './helpers';

const DataTable = ({rows, rowsPerPage}) => {

    const [currentPageNumber, setCurrentPageNumber] = useState(0);
    const [queryString, setQueryString] = useState('');


    const totalNumberOfPages = calculateTotalNumberOfPages(rows.length, rowsPerPage);


    const search = (event) => {

        const text = event.target.value
        let rowsFound = rows

        if (text) {
            rowsFound = rows.filter((row) => {
                return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
                    (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
            })
        }
        //
        //   this.setState({
        //     rows: rowsFound,
        //     currentPageNumber: 0,
        //     totalNumberOfPages: calculateTotalNumberOfPages(rowsFound)
        //   })
    }

    const changeToPageNumber = (pageNumber) => {
        setCurrentPageNumber(pageNumber);
    }

    const rowsToRender = getPageData(rows, currentPageNumber, rowsPerPage)

    return (
        <div>
            <Search onSearch={search.bind(this)}/>
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
                onChange={changeToPageNumber.bind(this)}/>
        </div>
    )
}

DataTable.propTypes = {
    rows: PropTypes.array.isRequired,
    rowsPerPage: PropTypes.number.isRequired
}

export default DataTable
