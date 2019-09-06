import React from 'react';
import PropTypes from 'prop-types';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import Button from '../../common/Button/Button';
import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './PostForm.scss';

class PostForm extends React.Component {

    state = {
        post: {
            id: '',
            title: '',
            author: '',
            content: ''
        }
    };

    componentDidMount() {
        const {isEdit, resetRequest, getPost} = this.props;
        resetRequest();

        if (isEdit) {
            let postToEdit = getPost;
            this.setState({
                post: {
                    id: postToEdit.id,
                    title: postToEdit.title,
                    author: postToEdit.author,
                    content: postToEdit.content
                }});
        }
    }

    handleChange = event => {
      const {post} = this.state;
      this.setState({post: {...post, [event.target.name]: event.target.value}});
    };

    handleEditor = text => {
        const {post} = this.state;
        this.setState({post: {...post, content: text}});
    };

    addPost = event => {
        const {addPost} = this.props;
        const {post} = this.state;
        event.preventDefault();
        let newPost = {
            title: post.title,
            author: post.author,
            content: post.content
        };
        addPost(newPost);
    };

    updatePost = event => {
        const {updatePost} = this.props;
        const {post} = this.state;
        event.preventDefault();
        updatePost(post);
    };

    render() {
        const {post} = this.state;
        const {handleChange, handleEditor, addPost, updatePost} = this;
        const {request, isEdit} = this.props;

        if (request.error) return <Alert variant="error">{request.error}</Alert>;
        else if (request.success) return <Alert variant="success">{isEdit ? "Post has been updated!" : "Post has been added!"}</Alert>
        else if (request.pending) return <Spinner/>;
        else return (
            <form onSubmit={isEdit ? updatePost : addPost}>
                <TextField label="Title" value={post.title} onChange={handleChange} name="title"/>
                <TextField label="Author" value={post.author} onChange={handleChange} name="author"/>
                <SectionTitle>Edit post content</SectionTitle>
                <Editor className='content-editor' text={post.content} onChange={handleEditor}
                        options={{
                            placeholder: false, toolbar:
                                {buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3']}
                        }}/>
                <Button variant="primary">{isEdit ? "Update post" : "Add post"}</Button>
            </form>
        )
    }
}

PostForm.propTypes = {
    request: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
    isEdit: PropTypes.bool
};

export default PostForm;
