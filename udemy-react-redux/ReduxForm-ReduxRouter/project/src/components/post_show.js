import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchPost, deletePost } from "../actions";

class PostShow extends React.Component {
  render() {
    // const post = this.props.posts[this.props.match.params.post_id]
    const { post } = this.props;

    if (!post) return null;

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <button
          onClick={this.onDeleteClick}
          className="btn btn-danger pull-xs-right"
        >
          Delete Post
        </button>
      </div>
    );
  }

  componentWillMount() {
    // Avoid re-fetching
    if (!this.props.post) {
      const { post_id } = this.props.match.params;
      this.props.fetchPost(post_id);
    }
  }

  onDeleteClick = () => {
    const { post_id } = this.props.match.params;
    this.props.deletePost(post_id, () => {
      this.props.history.push("/");
    });
  };
}

const mapStateToProps = ({ posts }, ownProps) => {
  // return { posts };
  return { post: posts[ownProps.match.params.post_id] }; // Taking the specific post
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchPost: fetchPost,
      deletePost: deletePost
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
