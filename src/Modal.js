import ReactDOM from 'react-dom';
import { Component } from 'react';

class Modal extends Component {
  render() {
    return ReactDOM.createPortal(this.props.children, this.props.domNode);
  }
}

export default Modal;
