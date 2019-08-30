import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Contact from './components/pages/Contact/ContactPage';
import Home from './components/pages/Home/HomePage';
import NotFound from './components/pages/NotFound/NotFoundPage';
import Posts from './components/pages/Posts/PostsPage';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    render() {
        return (
            <div>
                <MainLayout>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/posts' exact component={Posts} />
                        <Route path='/contact' exact component={Contact} />
                        <Route component={NotFound}/>
                    </Switch>
                </MainLayout>
            </div>
        );
    }
}

export default App;
