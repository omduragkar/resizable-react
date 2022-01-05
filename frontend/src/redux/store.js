import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import {  userLoginReducers } from "./reducers/userReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addNew } from "./reducers/addNew";
const reducers = combineReducers({user:userLoginReducers, addnewContent: addNew,});
const userinfofromLocalStorage = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')).data: null;

const intialState={
    user: {userinfo:userinfofromLocalStorage},
    addnewContent: null
}
const Store = createStore(reducers, intialState, composeWithDevTools(applyMiddleware(thunk)))
export default Store;





