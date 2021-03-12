import React from 'react'
import PropTypes from 'prop-types';

const Row = ({row}) => {

    if (!row) {
        return;
    }

    return (
        <tr>
            <td>
                <a href={row.edit_path}>
                    {row.name1}
                </a><br/>
                <small>{row.email}</small>
            </td>
        </tr>
    )
}

Row.propTypes = {
    row: PropTypes.object.isRequired
}

export default Row
