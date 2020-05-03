import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import Post from './components/Post';
import { Row, Col } from 'antd';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <React.Fragment>
          <Router>
            <Header />
            <Row type="flex" justify="center">
              <Col xs={24} sm={24} md={20} lg={20} xl={20}>
                <React.Fragment>
                  <Route exact path="/" component={BlogPost} />
                  <Route path="/post/:id" component={Post} />
                </React.Fragment>
              </Col>
            </Row>
          </Router>
        </React.Fragment>
      </div>
      <div className="style" />
      <Footer />
    </>
  );
}

export default App;
