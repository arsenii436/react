import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reducer from "../reducers/reducer";
import thunk from 'redux-thunk';

let reducers = combineReducers({
    pageapp:reducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunk)));
window.store = store;

export default store;