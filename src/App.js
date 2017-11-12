import React, { Component } from "react";
import NewsPost from "./NewsPost";
import "./App.css";

let id = 0;

function getNewsId() {
  return ++id;
}

class App extends Component {
  state = {
    news: [],
    newsInput: ""
  };

  handleChange = event => {
    this.setState({ newsInput: event.target.value });
  };

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      const { news, newsInput } = this.state;
      const newNews = { id: getNewsId(), text: newsInput };

      this.setState({ newsInput: "", news: [...news, newNews] });
    }
  };

  render() {
    const { newsInput } = this.state;
    return (
      <div className="App">
        <input
          className="todo-input"
          value={newsInput}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          type="text"
          placeholder="Какие новости?"
        />
      </div>
    );
  }
}

export default App;
