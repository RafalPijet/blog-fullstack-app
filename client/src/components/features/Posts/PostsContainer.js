import {connect} from 'react-redux';
import {
    getPosts,
    loadPostsByPageRequest,
    getRequest,
    getPages,
    getPresentPage,
    setVotesToSelectedPostRequest
} from "../../../redux/postsRedux";
import Posts from './Posts';

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
    pages: getPages(state),
    selectedPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
    loadPostsByPage: (page, postsPerPage) => dispatch(loadPostsByPageRequest(page, postsPerPage)),
    setVotes: (id, isUp) => dispatch(setVotesToSelectedPostRequest(id, isUp))
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
