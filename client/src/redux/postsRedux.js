import axios from 'axios';
import {API_URL} from "../config";

const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_POST = createActionName('LOAD_POST');
export const START_REQUEST = createActionName('START_REQUEST');
export const STOP_REQUEST = createActionName('STOP_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const loadPosts = payload => ({payload, type: LOAD_POSTS});
export const loadPost = post => ({post, type: LOAD_POST});
export const startRequest = () => ({type: START_REQUEST});
export const stopRequest = () => ({type: STOP_REQUEST});
export const errorRequest = error => ({error, type: ERROR_REQUEST});

export const getPosts = ({posts}) => posts.data;
export const getPost = ({posts}) => posts.singlePost;
export const getQuantityOfPosts = ({posts}) => posts.data.length;
export const getRequest = ({posts}) => posts.request;

/*THUNKS*/
export const loadPostsRequest = () => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            let res = await axios.get(`${API_URL}/posts`);
            await new Promise(resolve => setTimeout(resolve, 2000));
            dispatch(loadPosts(res.data));
            dispatch(stopRequest());
        } catch (e) {
            dispatch(errorRequest(e.message));
        }
    }
};

export const loadPostRequest = id => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            let res = await axios.get(`${API_URL}/posts/${id}`);
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (res.data !== null) {
                dispatch(loadPost(res.data));
                dispatch(stopRequest());
            } else {
                dispatch(errorRequest(`Post with id:${id} don't exist`));
            }

        } catch (e) {
            dispatch(errorRequest(e.message));
        }
    }
};

export const addPostRequest = post => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            let res = axios.post(`${API_URL}/posts`, post);
            await new Promise(resolve => setTimeout(resolve, 2000));
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message))
        }
    }
};

const initialState = {
    data: [],
    request: {
        pending: false,
        error: null,
        success: null
    },
    singlePost: {}
};

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return {...statePart, data: action.payload};
        case LOAD_POST:
            return {...statePart, singlePost: action.post};
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: null}};
        case STOP_REQUEST:
            return {...statePart, request: {pending: false, error: null, success: true}};
        case ERROR_REQUEST:
            return {...statePart, request: {pending: false, error: action.error, success: false}};
        default:
            return statePart;
    }
}
