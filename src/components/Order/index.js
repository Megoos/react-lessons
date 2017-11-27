import React from 'react';
import './Order.css';

export default function Order(props) {
  const { order } = props;

  return (
    <div className="order">
      <div className="order__upper">
        <div className="p--order">Название: {order.name}</div>
        <div className="p--order">Цена: {order.price}</div>
      </div>
      <div className="order__lower">
        <div className="p--order">Создан: {order.createdAt.toString()}</div>
      </div>
    </div>
  );
}
