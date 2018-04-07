import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import Comments from "./Comments";

class PostView extends Component {
    render(){
        const {title, body, author, timestamp, voteScore} = this.props
        const date = new Date(timestamp)
        return (
            <div>
                <div className="container">
                    <div className="col-xs-4">Posted by: {author}</div>
                    <div className="col-xs-4">Votes: {voteScore}</div>
                    <div className="col-xs-4">Posted at: {date.toString().split('G')[0]}</div>
                </div>
                <h3>{title}</h3>
                <div>{body}</div>
                <Comments />
            </div>
        )
    }
}

export default withRouter(connect(null, null)(PostView));