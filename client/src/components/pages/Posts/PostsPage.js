import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from '../../features/Posts/PostsContainer';
import PostsCounter from '../../features/PostsCounter/PostsCounter';

const PostsPage = props =>
    <div>
        <PageTitle>Posts list</PageTitle>
        <PostsCounter/>
        <Posts/>
    </div>;

export default PostsPage;
