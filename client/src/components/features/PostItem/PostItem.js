import React from 'react';
import PropTypes from 'prop-types';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";

class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.props.loadPost(this.props.id);
    }

    render() {
        const {singlePost, request} = this.props;

        if (!request.pending && request.success) {
            return (
                <div>
                    <SmallTitle>{singlePost.title}</SmallTitle>
                    <p>Author: {singlePost.author}</p>
                    <HtmlBox>{singlePost.content}</HtmlBox>
                </div>
            )
        } else if (request.pending || request.success === null) {
            return <Spinner/>
        } else if (!request.pending && request.error !== null) {
            return <Alert variant="error">{request.error}</Alert>;
        } else if (!request.pending && request.success === false && request.error === null) {
            return <Alert variant="warning">Post don't exist</Alert>
        }
    }
}

PostItem.propTypes = {
    singlePost: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        author: PropTypes.string
    }),
    loadPost: PropTypes.func.isRequired
};

export default PostItem;
