import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBudget } from '../../reducers/selectors';

import './Budget.css';

class Budget extends Component {
  render() {
    const {
      profit,
      marketExpanse,
      farmExpanse,
      deliveryExpanse
    } = this.props.budget;
    const total = profit - marketExpanse - farmExpanse - deliveryExpanse;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>Всего получено денег: {profit}</p>
        <p>
          Расходы продавцов:{' '}
          {marketExpanse !== 0 ? `-${marketExpanse}` : marketExpanse}
        </p>
        <p>
          Расходы на ферме:{' '}
          {farmExpanse !== 0 ? `-${farmExpanse}` : farmExpanse}
        </p>
        <p>
          Расходы на доставку:{' '}
          {deliveryExpanse !== 0 ? `-${deliveryExpanse}` : deliveryExpanse}
        </p>
        <p>Итого: {total}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  budget: getBudget(state)
});

export default connect(mapStateToProps)(Budget);
