import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { getPostInfo } from "../actions/postsAction";


class PostView extends Component {

    componentDidMount(){
        console.log(this.props)
        this.props.id && this.props.getPost(this.props.id)
    }

    render(){
        const {post} = this.props
        console.log("Post in its view:", post)
        return (
            <div>This is a test</div>
        )
    }
}

function mapStateToProps(state, props) {
	return { ...state.post }
};

const mapDispatchToProps = dispatch => ({
	getPost: (id) => dispatch(getPostInfo(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostView));