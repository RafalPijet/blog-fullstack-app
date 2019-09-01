import {connect} from 'react-redux';
import {getQuantityOfPosts} from "../../../redux/postsRedux";
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
    quantity: getQuantityOfPosts(state)
});

export default connect(mapStateToProps)(PostsCounter);
