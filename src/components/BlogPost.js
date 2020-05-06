import React from 'react';
import moment from 'moment';

import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import blogpost from '../BlogPosts/variable';
import { Tag } from 'antd';

const BlogPost = () => {
  return (
    <>
      <div className="tags">
        <Tag color="goldenrod" className="category">
          <code>JS</code>
        </Tag>
        <Tag color="#ec912c" className="category">
          <code>AWS</code>
        </Tag>
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
