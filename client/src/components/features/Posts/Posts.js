import React from 'react';
import PropTypes from 'prop-types';
import PostsList from '../../layouts/PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

    componentDidMount() {
        const {loadPostsByPage, initialPage} = this.props;
        loadPostsByPage(initialPage, 3);
    }

    loadPostsPage = page => {
        const {loadPostsByPage} = this.props;
        loadPostsByPage(page, 3);
    };

    render() {
        const {posts, request, pages, initialPage} = this.props;
        const {loadPostsPage} = this;

        if (!request.pending && request.success && posts.length > 0) {
            return (
                <div>
                    <PostsList posts={posts}/>
                    <Pagination pages={pages} onPageChange={loadPostsPage}
                    initialPage={initialPage} isActive={true}/>
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
    loadPostsByPage: PropTypes.func.isRequired,
    initialPage: PropTypes.number.isRequired
};

export default Posts;
