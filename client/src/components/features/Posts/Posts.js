import React from 'react';
import PropTypes from 'prop-types';
import PostsList from '../../layouts/PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

    componentDidMount() {
        const {loadPostsByPage, initialPage, postsPerPage} = this.props;
        initialPage !== undefined ? loadPostsByPage(initialPage, postsPerPage || 3) :
            loadPostsByPage(1, postsPerPage || 3);
    }

    loadPostsPage = page => {
        const {loadPostsByPage, postsPerPage} = this.props;
        loadPostsByPage(page, postsPerPage || 3);
    };

    render() {
        const {posts, request, pages, initialPage, pagination, selectedPage} = this.props;
        const {loadPostsPage} = this;
        
        if (!request.pending && request.success && posts.length > 0) {
            return (
                <div>
                    <PostsList posts={posts}/>
                    <Pagination pages={pages} onPageChange={loadPostsPage}
                                initialPage={initialPage !== undefined ? initialPage : selectedPage}
                                isActive={pagination}/>
                </div>
            )

        } else if (request.pending || request.success === null) {
            return <Spinner/>;
        } else if (!request.pending && request.error !== null) {
            return <Alert variant="error">{request.error}</Alert>;
        } else if (!request.pending && request.success && posts.length === 0) {
            return <Alert variant="info">No posts</Alert>
        }
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        })
    ),
    loadPostsByPage: PropTypes.func,
    initialPage: PropTypes.number,
    selectedPage: PropTypes.number,
    postsPerPage: PropTypes.number,
    pagination: PropTypes.bool
};

export default Posts;
