import React from 'react'

const PaginationPageItem = ({pageNumber, isActive = false, onChange}) => {


    const renderedPageNumber = () => {
        return pageNumber + 1;
    }

    const click = (event) => {
        event.preventDefault();
        onChange(pageNumber);
    }

    let buttonClasses = 'page-link ';

    if(isActive) {
        buttonClasses += 'button-outline';
    }

    return (
        <li className="page-item mr-1">
            <button className={buttonClasses}
                    onClick={click}>{renderedPageNumber()}</button>
        </li>
    )


}

export default PaginationPageItem;
