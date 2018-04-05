import React from 'react'
import PropTypes from 'prop-types'

const CategoryLink = (props) => (
    <button className="btn btn-category">{props.name}</button>
)

export default CategoryLink

CategoryLink.prototype = {
    name: PropTypes.string.isRequired
}