import React, { Component } from 'react';

class CardNumberInput extends Component {
  state = {
    number: ''
  };

  componentWillReceiveProps(nextProps) {
    const { cardNumber } = nextProps;

    this.setState({ number: this.format(cardNumber) });
  }

  componentWillMount() {
    const { cardNumber } = this.props;
    this.setState({ number: this.format(cardNumber) });
  }
  normalize = str => {
    if (!str) return '';

    return str.replace(/\s/g, '').replace(/\D/, '');
  };

  format = str => {
    if (!str) return '';

    return str.toString().replace(/\d{4}/g, `$& `);
  };

  handleChange = e => {
    const { onChange } = this.props;
    const value = e.target.value;

    onChange(this.normalize(value));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.number}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CardNumberInput;
