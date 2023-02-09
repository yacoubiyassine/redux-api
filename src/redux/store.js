import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducer from './reducer/Reducer';

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(Reducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));
  export default store