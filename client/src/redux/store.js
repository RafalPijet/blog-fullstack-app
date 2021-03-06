import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import posts from './postsRedux';

const rootReducer = combineReducers({
    posts
});

const store = createStore(
    rootReducer, applyMiddleware(thunk)
);

export default store;
