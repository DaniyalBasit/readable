import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';


class PostView extends Component {
    render(){
        const {id, title, body} = this.props
        console.log("Post in its view:", id)
        return (
            <div>
                <h3>{title}</h3>
                <div>{body}</div>
            </div>
        )
    }
}

export default withRouter(connect(null, null)(PostView));