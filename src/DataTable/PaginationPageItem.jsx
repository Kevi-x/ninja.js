import React from 'react';
import PropTypes from 'prop-types';

const PaginationPageItem = ({pageNumber = 0, isActive = false, onChange}) => {


    const renderedPageNumber = () => {
        return pageNumber + 1;
    }

    const click = (event) => {
        event.preventDefault();
        onChange(pageNumber);
    }

    let buttonClasses = 'page-link';

    if (isActive) {
        buttonClasses += ' button-outline';
    }

    return (
        <li className="page-item mr-1">
            <button className={buttonClasses}
                    onClick={click}>{renderedPageNumber()}</button>
        </li>
    )


}

PaginationPageItem.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default PaginationPageItem;
