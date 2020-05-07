import React, { useEffect } from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import blogpost from '../BlogPosts/variable';
import { Tag } from 'antd';
import ReactGA from 'react-ga';

const BlogPost = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });
  // console.log('window.location.pathname post', window.location.pathname);
  return (
    <>
      <div className="tags">
        <div className="categoryAbout">
          <code>I am interested in</code>
        </div>
        <Tag color="goldenrod" className="category">
          <code>JS</code>
        </Tag>
        <Tag color="darkblue" className="category">
          <code>React</code>
        </Tag>
        <Tag color="deeppink" className="category">
          <code>GraphQL</code>
        </Tag>
        <Tag color="gray" className="category">
          <code>Image Processing</code>
        </Tag>
        <Tag color="#ec912c" className="category">
          <code>AWS</code>
        </Tag>
        <div className="categoryAbout">
          <code> and hope I'll writing post about them</code>
        </div>
      </div>

      <Row type="flex" justify="center">
        {blogpost.map((res, index) => {
          const image = require(`../BlogPosts/${res.id}.jpg`);
          return (
            <Col xs={24} sm={24} md={20} lg={14} xl={14} key={index}>
              <Link to={'/post/' + res.id}>
                <div className="blog-post-card">
                  <div
                    className="post-card-image"
                    style={{
                      backgroundImage: `url(${image})`
                    }}
                  >
                    <Tag color={res.category_color} className="postCategory">
                      <code>{res.category}</code>
                    </Tag>
                  </div>
                  <div>
                    <p className="postTitle"> {res.title}</p>
                    <p className="postDate"> {moment(res.date).format('MMMM DD YYYY')}</p>
                  </div>
                </div>
              </Link>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default BlogPost;
