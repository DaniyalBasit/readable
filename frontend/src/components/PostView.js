import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter, Link} from 'react-router-dom';
import Comments from "./Comments";
import VoteScore from "./VoteScore";
import { deletePost, resetRedirect } from "../actions/postsAction";

class PostView extends Component {
    componentDidMount(){
        this.props.reDirectReset()
    }
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
                <div className="col-xs-2">
                    <Link to={'/posts/' + id +'/edit'} className="btn-delete">Edit Post</Link>
                    <a onClick={()=>this.props.deletePost(id)} className="btn-delete">Delete Post</a>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, props) {
	return { ...state.post }
};

const mapDispatchToProps = (dispatch) => ({
    deletePost: (id) => dispatch(deletePost(id)),
	reDirectReset: () => dispatch(resetRedirect())    
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostView));