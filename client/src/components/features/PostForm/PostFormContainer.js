import {connect} from 'react-redux';
import {addPostRequest, getRequest} from "../../../redux/postsRedux";
import PostForm from './PostForm';

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post))
});

const mapStateToProps = state => ({
   request: getRequest(state) 
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
