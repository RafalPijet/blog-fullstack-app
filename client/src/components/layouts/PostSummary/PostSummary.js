import React from 'react';
import PropTypes from 'prop-types';
import './PostSummary.scss';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import {cutText} from "../../../utils/functions";

const PostSummary = ({id, title, content}) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <HtmlBox>{cutText(content, 60)}</HtmlBox>
        <Button variant="primary">Read More</Button>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default PostSummary;
