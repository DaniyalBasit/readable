import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Comments from "./Comments";
import VoteScore from "./VoteScore";

class PostView extends Component {
    render(){
        const {id, title, body, author, timestamp, voteScore} = this.props.post
        const date = new Date(timestamp)
        return (
            <div className="container">
                <div className="col-xs-1">
                    <VoteScore voteScore={voteScore} id={id} />				
                </div>
                <div className="col-xs-11">
                    <div className="col-xs-3">Posted by: {author}</div>
                    <div className="col-xs-6 pull-right">Posted at: {date.toString().split('G')[0]}</div>
                    <h3>{title}</h3>
                    <div>{body}</div>
                    <Comments />
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
	return { ...state.post }
};

export default withRouter(connect(mapStateToProps)(PostView));