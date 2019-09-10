import React from 'react';
import PropTypes from 'prop-types';
import {FacebookProvider, Comments, ShareButton} from 'react-facebook';
import {FaShare} from "react-icons/fa";
import {withRouter} from 'react-router-dom';
import {BASE_URL} from "../../../config";
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Spinner from '../../common/Spinner/Spinner';
import Alert from "../../common/Alert/Alert";
import Button from '../../common/Button/Button';
import {Link} from "react-router-dom";
import Facebook from "react-facebook/module/FacebookProvider";

class PostItem extends React.Component {

    state = {
        singlePost: {}
    };

    componentDidMount() {
        const {isRandom} = this.props;
        const {randomHandling, singleHandling} = this;
        isRandom ? randomHandling() : singleHandling();
    }

    singleHandling = async () => {
        const {loadPost, id} = this.props;
        await loadPost(id);
        this.setState({singlePost: this.props.singlePost})
    };

    randomHandling = async () => {
        const {loadPost, loadPosts} = this.props;
        await loadPosts();
        let posts = this.props.posts;
        await loadPost(posts[Math.round(Math.random() * (posts.length - 1))].id);
        this.setState({singlePost: this.props.singlePost});
    };

    render() {
        const {singlePost} = this.state;
        const {request, location} = this.props;

        if (!request.pending && request.success) {
            return (
                <div>
                    <SmallTitle>{singlePost.title}</SmallTitle>
                    <FacebookProvider appId="710139419429929">
                        <ShareButton className="button" href={`${BASE_URL}${location.pathname}`}>
                            <FaShare title="share" />
                        </ShareButton>
                    </FacebookProvider>
                    <p>Author: {singlePost.author}</p>
                    <HtmlBox>{singlePost.content}</HtmlBox>
                    <Link to="/posts/edit">
                        <Button variant="info">Edit post</Button>
                    </Link>
                    <FacebookProvider appId="710139419429929">
                        <Comments href={`${BASE_URL}${location.pathname}`}/>
                    </FacebookProvider>
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
    loadPost: PropTypes.func,
    loadPosts: PropTypes.func,
    isRandom: PropTypes.bool,
    posts: PropTypes.array
};

export default withRouter(props => <PostItem {...props}/>);
