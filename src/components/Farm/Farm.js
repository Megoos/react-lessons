import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from '../../actions/farmActions';
import { getFarmOrders } from '../../reducers/selectors';

import './Farm.css';
import Order from '../Order';

class Farm extends Component {
  moveLastOrderToCustomer = () => {
    const { orders } = this.props;

    this.props.moveOrderToCustomer(orders[orders.length - 1]);
  };

  render() {
    const { orders } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          onClick={this.moveLastOrderToCustomer}
          disabled={!orders.length}
        >
          Отправить урожай клиенту
        </button>
        <ul className="orders-list">
          {orders.map(order => (
            <li className="order-item" key={order.id}>
              <Order order={order} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  orders: getFarmOrders(state)
});

const mapDispatchToProps = {
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);
