import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <div className="heading">
        <h1>{props.heading}</h1>
    </div>
)

Header.prototype = {
    heading: PropTypes.string.isRequired
}

export default Header
