import React from "react"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPostInfo } from "../actions/postsAction";
import PropTypes from 'prop-types'

function Post (props) {
	const {id, title, author, timestamp, getPost} = props
	const date = new Date(timestamp)
	return (
		<div onClick={()=>getPost(id)} className="post col-xs-12 col-md-8">
			<h3 className="post-title">{title}</h3>
			<div className="col-xs-12">
				<div className="post-element pull-left col-xs-6">Posted by: {author}</div>
				<div className="post-element pull-right col-xs-6">{date.toString().split('G')[0]}</div>
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	getPost: (id) => dispatch(getPostInfo(id)),
});

export default withRouter(connect(null, mapDispatchToProps)(Post))

Post.prototype = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	votes: PropTypes.string.isRequired
}