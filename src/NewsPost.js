import React, { Component } from "react";
import Comment from "./Comment";
import "./NewsPost.css";

let id = 0;

function getCommentId() {
  return ++id;
}

class NewsPost extends Component {
  state = {
    comments: [],
    commentInput: ""
  };

  handleChange = event => {
    this.setState({ commentInput: event.target.value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { comments, commentInput } = this.state;
      const newComment = { id: getCommentId(), text: commentInput };

      this.setState({ commentInput: "", comments: [...comments, newComment] });
    }
  };

  handleDelete = id => {
    this.setState(state => ({
      comments: state.comments.filter(comment => id !== comment.id)
    }));
  };

  render() {
    return (
      <div className="news-post">
        <p>{this.props.text}</p>
        {this.state.comments.map(comment => (
          <Comment
            key={comment.id}
            text={comment.text}
            id={comment.id}
            onDelete={this.handleDelete}
          />
        ))}
        <input
          type="text"
          placeholder="Прокомментируй!"
          className="comment-input"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={this.state.commentInput}
        />
      </div>
    );
  }
}

export default NewsPost;
