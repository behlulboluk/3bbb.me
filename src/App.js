import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Post from './components/Post';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <>
      <div className="App">
        <React.Fragment>
          <Router history={history}>
            <Header />

            <React.Fragment>
              <Route exact path="/" component={BlogPost} />
              <Route path="/post/:id" component={Post} />
            </React.Fragment>
          </Router>
        </React.Fragment>
      </div>
      <div className="style" />
      <Footer />
    </>
  );
}

export default App;
