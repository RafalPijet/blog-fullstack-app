import React from 'react';
import PostForm from '../../features/PostForm/PostFormContainer';
import PageTitle from '../../common/PageTitle/PageTitle';

const EditPost = () => (
    <div>
        <PageTitle>Edit Post</PageTitle>
        <PostForm isEdit={true}/>
    </div>
);

export default EditPost;
