import axios from 'axios';
import {API_URL} from "../config";

const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_POST = createActionName('LOAD_POST');
export const LOAD_POST_PAGE = createActionName('LOAD_POST_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const STOP_REQUEST = createActionName('STOP_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const SET_VOTES_POST = createActionName('SET_VOTES_POST');
export const CHANGE_REQUEST = createActionName('CHANGE_REQUEST');

export const loadPosts = payload => ({payload, type: LOAD_POSTS});
export const loadPost = post => ({post, type: LOAD_POST});
export const loadPostsByPage = payload => ({payload, type: LOAD_POST_PAGE});
export const startRequest = () => ({type: START_REQUEST});
export const stopRequest = () => ({type: STOP_REQUEST});
export const errorRequest = error => ({error, type: ERROR_REQUEST});
export const resetRequest = () => ({type: RESET_REQUEST});
export const setVotesPost = post => ({post, type: SET_VOTES_POST});
export const changeVotes = () => ({type: CHANGE_REQUEST});

export const getPosts = ({posts}) => posts.data;
export const getPost = ({posts}) => posts.singlePost;
export const getPages = ({posts}) => Math.ceil(posts.amount / posts.postsPerPage);
export const getPresentPage = ({posts}) => posts.presentPage;
export const getQuantityOfPosts = ({posts}) => posts.data.length;
export const getRequest = ({posts}) => posts.request;

/*THUNKS*/
export const loadPostsRequest = () => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            let res = await axios.get(`${API_URL}/posts`);
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
            await axios.post(`${API_URL}/posts`, post);
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message))
        }
    }
};

export const updatePostRequest = post => {
    return async dispatch => {

        dispatch(startRequest());

        try {
            await axios.put(`${API_URL}/posts`, post)
                .then(() => dispatch(stopRequest()))
                .catch(err => dispatch(errorRequest(err.message)));
        } catch (err) {
            dispatch(errorRequest(err.message))
        }
    }
};

export const loadPostsByPageRequest = (page, postsPerPage) => {
    return async dispatch => {
        dispatch(startRequest());

        try {
            const startA = (page - 1) * postsPerPage;
            const limit = postsPerPage;

            let res = await axios.get(`${API_URL}/posts/range/${startA}/${limit}`);

            const payload = {
                posts: res.data.posts,
                amount: res.data.amount,
                postsPerPage,
                presentPage: page
            };

            dispatch(loadPostsByPage(payload));
            dispatch(stopRequest());

        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};

export const setVotesToSelectedPostRequest = (id, isUp) => {
    return async dispatch => {
        dispatch(changeVotes());

        try {
            let res = await axios.put(`${API_URL}/posts/votes/${id}/${isUp}`);
            await new Promise(resolve => setTimeout(resolve, 2000));

            dispatch(setVotesPost(res.data));
            dispatch(stopRequest());
        } catch (err) {
            dispatch(errorRequest(err.message));
        }
    }
};

const initialState = {
    data: [],
    request: {
        pending: false,
        error: null,
        success: null,
        votes: false
    },
    singlePost: {},
    amount: 0,
    postsPerPage: 10,
    presentPage: 1
};

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return {...statePart, data: action.payload};
        case LOAD_POST:
            return {...statePart, singlePost: action.post};
        case LOAD_POST_PAGE:
            return {
                ...statePart,
                presentPage: action.payload.presentPage,
                postsPerPage: action.payload.postsPerPage,
                amount: action.payload.amount,
                data: [...action.payload.posts]
            };
        case SET_VOTES_POST:
            return {
                ...statePart,
                data: statePart.data.map(post => {
                    if (post.id === action.post.id) {
                        return {...post, votes: action.post.votes};
                    } else {
                        return post;
                    }
                })
            };
        case START_REQUEST:
            return {...statePart, request: {pending: true, error: null, success: null, votes: false}};
        case STOP_REQUEST:
            return {...statePart, request: {pending: false, error: null, success: true, votes: false}};
        case ERROR_REQUEST:
            return {...statePart, request: {pending: false, error: action.error, success: false, votes: false}};
        case RESET_REQUEST:
            return {...statePart, request: {pending: false, error: null, success: null, votes: false}};
        case CHANGE_REQUEST:
            return {...statePart, request: {pending: false, error: null, success: null, votes: true}};
        default:
            return statePart;
    }
}
