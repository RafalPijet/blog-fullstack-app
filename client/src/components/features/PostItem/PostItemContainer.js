import {connect} from 'react-redux';
import {getPost, loadPostRequest, getRequest} from "../../../redux/postsRedux";
import PostItem from './PostItem';

const mapStateToProps = state => ({
    singlePost: getPost(state),
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    loadPost: id => dispatch(loadPostRequest(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
