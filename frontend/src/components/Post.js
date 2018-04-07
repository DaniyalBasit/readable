import React from "react"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPostInfo } from "../actions/postsAction";
import PropTypes from 'prop-types'

function Post (props) {
	const date = new Date(props.timestamp)
	return (
		<div onClick={()=>props.getPost(props.id)} className="post col-xs-12 col-md-8 col-md-push-2">
			<h3 className="post-title">{props.title}</h3>
			<div className="container">
				<div className="post-author col-xs-3">Posted by: {props.author}</div>
				<div className="post-author col-xs-3">Votes: {props.votes}</div>
				<div className="post-author col-xs-3">{date.toString().split('G')[0]}</div>
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