import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { emptyPost } from '../actions/postsAction';
class PostForm extends Component{
    componentDidMount(){
        this.props.post && this.props.clearPost()
    }
    render(){
        const {handleSubmit, categories} = this.props
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
                    <div>
                        <label htmlFor="firstName">Author</label>
                        <Field name="author" component="input" type="text" />
                    </div>
                    <div>
                        <Field className="form-select" name="category" component="select">
                            <option value="">Select a category</option>
                            {Array.isArray(categories) && categories.map(category => (
                                <option value={category.name} key={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <button className="btn btn-category" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

PostForm = reduxForm({
    form: 'post'
})(PostForm)

function mapStateToProps(state, props){
    return {...state.post}
}

const mapDispatchToProps = (dispatch) => ({
    clearPost: () => dispatch(emptyPost())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))