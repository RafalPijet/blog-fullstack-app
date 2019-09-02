import React from 'react';
import PropTypes from 'prop-types';
import PostsList from '../../layouts/PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';

class Posts extends React.Component {

    componentDidMount() {
        const {loadPosts} = this.props;
        loadPosts();
    }

    render() {
        const {posts, request} = this.props;
        return (
            <div>
                <PostsList posts={posts}/>
                {request.pending && <Spinner/>}
            </div>
        );
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    loadPosts: PropTypes.func.isRequired
};

export default Posts;
