import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import fileReducer from "./FileReducer";
import userReducer from "./userReducer";
import {reducer} from "redux-form"

const rootReducer = combineReducers( {
    form: reducer,
    user: userReducer,
    files: fileReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

export default store;