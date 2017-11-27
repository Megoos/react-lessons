import { combineReducers } from 'redux';

import { CREATE_ORDER, MOVE_ORDER_TO_FARM } from '../actions/marketTypes';

const orders = (state = [], action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return [...state, action.payload];
    case MOVE_ORDER_TO_FARM:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

const market = combineReducers({
  orders
});

export default market;

export const getMarketOrders = state => state.market.orders;
