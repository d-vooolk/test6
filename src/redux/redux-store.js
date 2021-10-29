import {applyMiddleware, combineReducers, createStore} from 'redux';
import employeesReducer from "./employeesReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    employeesPage: employeesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;