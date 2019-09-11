import React from 'react';
import PropTypes from 'prop-types';
import './PostSummary.scss';
import {FaThumbsUp, FaThumbsDown} from "react-icons/fa";
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import {cutText} from "../../../utils/functions";
import {Link} from 'react-router-dom';

const PostSummary = ({id, title, content, author, votes, votesHandling, votesPending}) => {

    return (
        <article className="post-summary">
            <SmallTitle>{title}</SmallTitle>
            <p>Author: {author}</p>
            <HtmlBox>{cutText(content, 60)}</HtmlBox>
            <Link to={'/posts/' + id}>
                <Button variant="primary">Read More</Button>
            </Link>
            <Button disabled={votesPending} title='thumbUp' variant={!votesPending ? "success" : " progress"}
                    onClick={() => votesHandling(id, true, votes)}>
                <FaThumbsUp/>
            </Button>
            <span>{votes}</span>
            <Button disabled={votesPending} title='thumbDown' variant={!votesPending ? "danger" : " progress"}
                    onClick={() => votesHandling(id, false, votes)}>
                <FaThumbsDown/>
            </Button>
        </article>
    )
};

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default PostSummary;
