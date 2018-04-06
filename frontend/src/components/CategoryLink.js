import React from 'react'
import PropTypes from 'prop-types'

function CategoryLink(props) {
    function handleChnage() {
        props.onPress(props.name)
    }
    return (
        <button className="btn btn-category" onClick={handleChnage}>{props.name}</button>
    )
}

export default CategoryLink

CategoryLink.prototype = {
    name: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}