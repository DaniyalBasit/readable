import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


class PostView extends Component {
    render(){
        const {id} = this.props
        console.log("Post in its view:", id)
        return (
            <div>This is a test</div>
        )
    }
}

export default withRouter(connect(null, null)(PostView));