import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

const store=createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store 