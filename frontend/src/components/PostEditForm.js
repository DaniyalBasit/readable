import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

let PostEditForm = (props) => {
    const {handleSubmit, categories, post } = props
    return (
        <div className="container">
            <h3>Create New Post</h3>
            <form className="col-xs-6 col-xs-push-3 form-group" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Title</label>
                    <Field name="title" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="firstName">Body</label>
                    <Field name="body" component="input" type="text" />
                </div>
                <button className="btn btn-category" type="submit">Submit</button>
            </form>
        </div>
    )
}

PostEditForm = reduxForm({
    form: 'postEdit'
})(PostEditForm)

PostEditForm = connect(
    state => ({
      initialValues: state.post.data // pull initial values from account reducer
    })
)(PostEditForm)

function mapStateToProps(state, props){
    return {...state.post}
}

export default withRouter(connect(mapStateToProps)(PostEditForm))