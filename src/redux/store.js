import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducers/reducer";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
