import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createPost } from "../actions";

class PostsNew extends Component {
  renderField = field => {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    const fontSizeError = { fontSize: ".825em" };

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // Wiring all event handlers and properties of an input HTML tag
        />
        <div style={fontSizeError} className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  };

  onSubmit = (values, reset) => {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });
    this.props.reset();
  };

  render() {
    const { handleSubmit, invalid } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button
          type="submit"
          disabled={invalid}
          className="btn btn-primary btn-block"
        >
          Submit
        </button>
        <Link to="/" className="btn btn-danger btn-block">
          Cancel
        </Link>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (values.title && values.title.length < 3)
    errors.title = "Title must be at least 3 chacteres*";

  if (!values.title) errors.title = "Enter a title*";

  if (!values.categories) errors.categories = "Enter some categories*";

  if (!values.content) errors.content = "Content is required*";

  return errors;
};

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew));
