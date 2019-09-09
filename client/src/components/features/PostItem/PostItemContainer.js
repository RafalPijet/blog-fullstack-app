import {connect} from 'react-redux';
import {getPost, loadPostRequest, getRequest, loadPostsRequest, getPosts} from "../../../redux/postsRedux";
import PostItem from './PostItem';

const mapStateToProps = state => ({
    singlePost: getPost(state),
    request: getRequest(state),
    posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
    loadPost: id => dispatch(loadPostRequest(id)),
    loadPosts: () => dispatch(loadPostsRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
