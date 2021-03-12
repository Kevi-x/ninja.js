export const calculateTotalNumberOfPages = (total, rowsPerPage) => {

    if (rowsPerPage === 0) {
        return 0
    }
    return Math.ceil(total / rowsPerPage)
}

export const getDataStartEndIndexOnPage = (pageNumber, rowsPerPage) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
}

export const getPageData = (data, currentPageNumber, rowsPerPage) => {
    const [startIndex, endIndex] = getDataStartEndIndexOnPage(currentPageNumber, rowsPerPage);

    return data.slice(startIndex, endIndex);
}
