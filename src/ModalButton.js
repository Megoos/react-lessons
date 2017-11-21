import React, { Component } from 'react';
import Modal from './Modal';
import './ModalButton.css';

class ModalButton extends Component {
  static displayName = 'Modal Button';

  state = {
    isModalShow: false
  };

  showModal = () => {
    this.setState({ isModalShow: true });
  };

  hideModal = () => {
    this.setState({ isModalShow: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.showModal}>Open</button>
        {this.state.isModalShow ? (
          <Modal domNode={document.querySelector('#portal')}>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно</h1>
                  <button onClick={this.hideModal}>Закрыть</button>
                </div>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default ModalButton;
