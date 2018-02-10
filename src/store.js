import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import showsMiddleware from './middlewares/showsMiddleware';
import searchMiddleware from './middlewares/searchMiddleware';

export default initialState =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(searchMiddleware, showsMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
