import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000/api/posts')
            .then(res => res.json())
            .then(res => this.setState({posts: res}))
            .then(() => console.log(this.state.posts));

    }

    render() {
        return (
            <div className="App">
                <ul>
                    {this.state.posts.map(post =>
                    <li key={post.id}>{`title: ${post.title}: content: ${post.content}`}</li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
