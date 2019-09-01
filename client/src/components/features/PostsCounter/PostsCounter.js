import React from 'react'

class PostsCounter extends React.Component {
    render() {
        const {quantity} = this.props;
        return (
            quantity !== 0 ? <div>{`Posts amount: ${quantity}`}</div> : <div>- no posts -</div>
        )
    }
}

export default PostsCounter;
