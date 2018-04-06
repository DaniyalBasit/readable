import React from "react"
import PropTypes from 'prop-types'

function Post (props) {
    return (
        <div className="post col-xs-12 col-md-8 col-md-push-2">
            <h3 className="post-title">{props.title}</h3>
            <p>{props.body}</p>
            <p className="post-author">Posted by: {props.author}</p>
            <p>{props.votes}</p>
        </div>
    )
}

export default Post

Post.prototype = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    votes: PropTypes.string.isRequired
}