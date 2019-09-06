import {connect} from 'react-redux';
import {
    addPostRequest,
    getRequest,
    resetRequest,
    getPost,
    updatePostRequest} from "../../../redux/postsRedux";
import PostForm from './PostForm';

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post)),
    resetRequest: () => dispatch(resetRequest()),
    updatePost: post => dispatch(updatePostRequest(post))
});

const mapStateToProps = state => ({
    request: getRequest(state),
    getPost: getPost(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
