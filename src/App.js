import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Post from './components/Post';

import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

// history.listen((location) => {
//   ReactGA.set({ page: location.pathname + location.search }); // Update the user's current page
//   ReactGA.pageview(location.pathname + location.search); // Record a pageview for the given page
// });
// console.log('location', history);

const App = () => {
  return (
    <>
      <div className="App">
        <React.Fragment>
          <Router history={history}>
            <Header />

            <React.Fragment>
              <Switch>
                <Route exact path="/" component={BlogPost} />
                <Route path="/post/:id" component={Post} />
              </Switch>
            </React.Fragment>
          </Router>
        </React.Fragment>
      </div>
      <div className="style" />
      <Footer />
    </>
  );
};

export default App;
