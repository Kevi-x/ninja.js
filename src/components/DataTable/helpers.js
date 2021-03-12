import {config} from '../../config/config';
import {isNumber} from '../../utils/utils';

/**
 * Calculates total number of available pages
 * @param total total count of data rows
 * @param rowsPerPage number of rows per page
 * @return {number} number of pages
 */
export const calculateTotalNumberOfPages = (total, rowsPerPage) => {

    if (!isNumber(total) || !isNumber(rowsPerPage)) {
        return 0;
    }


    return Math.ceil(total / rowsPerPage)
}

/**
 * Gets a start index and an end index for given page number and rows per page. When either of parameters is not a
 * number or rowsPerPage is 0, it returns default values got from the config
 * @param pageNumber current page number
 * @param rowsPerPage number of rows per page
 * @return {[number, *]|[number, number]} [startIndex, endIndex]
 */
export const getDataStartEndIndexOnPage = (pageNumber, rowsPerPage) => {
    if (!isNumber(pageNumber) || !isNumber(rowsPerPage) || rowsPerPage === 0) {
        return [0, config.defaultRowsPerPage];
    }

    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
}


/**
 * Gets data for current page
 * @param data displayed data
 * @param currentPageNumber current page number
 * @param rowsPerPage rows per page
 * @return {*} data to be displayed
 */
export const getPageData = (data, currentPageNumber, rowsPerPage) => {
    const [startIndex, endIndex] = getDataStartEndIndexOnPage(currentPageNumber, rowsPerPage);

    return data.slice(startIndex, endIndex);
}

/**
 * Gets search results for query string
 * @param data data to be search in
 * @param queryString text to be search for
 * @return {*[]|*} search result
 */
export const getSearchResult = (data, queryString) => {
    if (!data) {
        return [];
    }

    if (!queryString) {
        return data;
    }

    queryString = queryString.toLowerCase();

    return data.filter(item => (item.name1 && item.name1.toLowerCase().includes(queryString)) || (item.email && item.email.toLowerCase().includes(queryString)));
}

