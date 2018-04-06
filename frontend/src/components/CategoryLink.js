import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function CategoryLink(props) {
    return (
        <Link to={"/" + props.name} className="btn btn-category" >{props.name}</Link>
    )
}

export default CategoryLink

CategoryLink.prototype = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}