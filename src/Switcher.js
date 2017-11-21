import React, { Component } from 'react';
import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = e => {
    const id = parseInt(e.target.getAttribute('data-id'), 10);
    this.setState({ selectedChild: id });
  };

  render() {
    const { children } = this.props;
    const childs = React.Children.toArray(children);
    return (
      <div>
        <ul className="component-list">
          {childs.map((item, index) => (
            <li
              key={item.key}
              data-id={index}
              className="component-list__name"
              onClick={this.handleChangeChild}
            >
              {item.type.displayName ? item.type.displayName : item.type.name}
            </li>
          ))}
        </ul>
        <hr />
        <section className="component-wrapper">
          {childs[this.state.selectedChild]}
        </section>
      </div>
    );
  }
}

export default Switcher;
