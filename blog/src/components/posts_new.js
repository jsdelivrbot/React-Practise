import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field){
        return(
            <div className="form-group">
                <label>{ field.label }</label>
                <input
                className="form-control"
                type = "text"
                {...field.input.value}
               />
               { field.meta.error }
            </div>
            );
    }

    render(){
        return (
            <form>
                <Field
                 name="title"
                 label="Title"
                 component={ this.renderField }
                />
                <Field
                 name="tags"
                 label="Tags"
                 component={ this.renderField }
                />
                <Field
                 name="catogeries"
                 label="Catogeries"
                 component={ this.renderField }
                />
            </form>
            );
    }
}

function validate(values){
    const errors = {};

    if(values.title){
        errors.title = "Enter a title";
    }
    if(values.catogeries){
        errors.catogeries = "Enter some catogeries";
    }
    if(values.content){
        errors.content = "Enter some content please";
    }

    return errors;
}

export default reduxForm({
    form: 'PostsNewForm'
    })(PostsNew);
