import React, {useState} from 'react'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

const DataTable = ({rows, rowsPerPage}) => {

  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const [queryString, setQueryString] = useState('');

  const calculateTotalNumberOfPages = (rows) => {
    if (rowsPerPage == 0) return 0
    return Math.ceil(rows.length / rowsPerPage)
  }

    const totalNumberOfPages = calculateTotalNumberOfPages(rows)




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
    this.setState({ currentPageNumber: pageNumber })
  }

  const rowsInPageNumber = (pageNumber) => {

    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }

    const rowsToRender = rows
      .map(row => <Row key={row.per_id} row={row} />)
      .slice(...rowsInPageNumber(currentPageNumber))

    return(
      <div>
        <Search onSearch={search.bind(this)} />
        <table>
          <tbody>
            { rowsToRender }
          </tbody>
        </table>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={changeToPageNumber.bind(this)} />
      </div>
    )
  }


export default DataTable
