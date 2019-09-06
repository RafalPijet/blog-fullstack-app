import React from 'react';
import PostForm from '../../features/PostForm/PostFormContainer';
import PageTitle from '../../common/PageTitle/PageTitle';

const AddPost = () =>
    <div>
        <PageTitle>Add Post</PageTitle>
        <PostForm isEdit={false}/>
    </div>;

export default AddPost;
