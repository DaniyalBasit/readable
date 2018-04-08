import React from "react"
import { connect } from 'react-redux'
import { postOption } from "../actions/postsAction";
import PropTypes from 'prop-types'

function VoteScore(props) {
    const {id, voteScore, postVote} = props
    return (
        <div className="votes pull-right">
            <div onClick={()=> postVote(id, "upVote")}><i className="fas fa-arrow-circle-up"></i></div>
            <div className="vote-score">{voteScore}</div>
            <div onClick={()=> postVote(id, "downVote")}><i className="fas fa-arrow-circle-down"></i></div>
        </div>
    )
}

function mapStateToProps(state, props) {
	return { ...state.posts.voteScore }
};

const mapDispatchToProps = dispatch => ({
    postVote: (id, option) => dispatch(postOption(id, option))
});

export default connect(mapStateToProps, mapDispatchToProps)(VoteScore)

VoteScore.prototype = {
	voteScore: PropTypes.string.isRequired
}