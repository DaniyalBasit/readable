import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';

class PostView extends Component {
    render(){
        const {post} = this.props
        console.log(post)
        return (
            <div>This is a test</div>        
        )
    }
}

function mapStateToProps(state, props) {
	return { ...state.post }
};

export default withRouter(connect(mapStateToProps)(PostView));