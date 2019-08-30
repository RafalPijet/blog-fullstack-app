import React from 'react';

const SinglePost = props =>
    <div>
        <h1>Single post, id: {props.match.params.id}</h1>
    </div>;

export default SinglePost;
