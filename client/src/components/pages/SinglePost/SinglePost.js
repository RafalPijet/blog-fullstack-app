import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostItem from '../../features/PostItem/PostItemContainer';

const SinglePost = props => (
    <div>
        <PageTitle>SinglePost</PageTitle>
        <PostItem id={props.match.params.id}/>
    </div>
);

SinglePost.propTypes = {
    id: PropTypes.string
};

export default SinglePost;
