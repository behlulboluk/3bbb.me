import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import ReactMarkdown from 'react-markdown';
import Highlights from './Highlights';
import blogpost from '../BlogPosts/variable';
import moment from 'moment';
import ReactGA from 'react-ga';

const Post = (props) => {
  const [terms, setTerms] = useState('');
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    const post = require(`../BlogPosts/${props.match.params.id}.mdx`);
    fetch(post)
      .then((response) => response.text())
      .then((data) => {
        setTerms(data);
      });
  });
  // console.log('window.location.pathname post', window.location.pathname);

  const image = require(`../BlogPosts/${props.match.params.id}.jpg`);
  const data = blogpost.filter((res) => res.id === props.match.params.id);
  return (
    <>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={20} lg={14} xl={14}>
          <div className="blog-post-image">
            <div
              className="postImage"
              style={{
                backgroundImage: `url(${image})`
              }}
            ></div>
          </div>
          <div className="postDate">published {moment(data[0].date).format('MMMM DD YYYY')}</div>
        </Col>
      </Row>

      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={20} lg={14} xl={14}>
          <div className="blog-post">
            {/* <img
              className="postImage"
              src={image}
              // style={{
              //   backgroundImage: `url(${image})`
              // }}
            ></img> */}

            <ReactMarkdown source={terms} renderers={{ code: Highlights }} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Post;
