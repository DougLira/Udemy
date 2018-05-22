import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import Header from './components/header';
import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
    <div>
      <Header />
      <hr/>
      <Switch>
        <Route exact path="/" component={PostsIndex} />
        <Route exact path="/posts/new" component={PostsNew} />
        <Route exact path="/posts/:post_id" component={PostShow} />
      </Switch>
    </div>
    </Router>
  </Provider>
  , document.querySelector('#app'));