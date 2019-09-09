import {connect} from 'react-redux';
import {getPosts, loadPostsByPageRequest, getRequest, getPages, getPresentPage} from "../../../redux/postsRedux";
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
    pages: getPages(state),
    presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
    loadPostsByPage: page => dispatch(loadPostsByPageRequest(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
