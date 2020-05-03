import React, { useState, useEffect } from 'react';
import {
  MediumCircleFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  GithubFilled,
  createFromIconfontCN
} from '@ant-design/icons';
import moment from 'moment';

import { Link } from 'react-router-dom';

import blogpost from '../BlogPosts/variable';
import Post from './Post';

import { Tag } from 'antd';

const BlogPost = () => {
  //   const [posts, setPosts] = useState('');
  //   useEffect(() => {
  //     fetch(blogpost)
  //       .then((response) => response.text())
  //       .then((values) => {
  //         setPosts(values);
  //       });
  //   });
  //   console.log('posts:', posts);
  const IconFont = createFromIconfontCN({
    scriptUrl: [
      '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
      '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js' // icon-shoppingcart, icon-python
    ]
  });

  return (
    <>
      <div className="tags">
        <Tag color="goldenrod" className="category">
          <code>JS</code>
        </Tag>
        <Tag color="darkblue" className="category">
          <code>AWS</code>
        </Tag>
        {/* <Tag color="darkred" className="category">
          Neural Network
        </Tag>
        <Tag color="darkblue" className="category">
          <IconFont type="icon-python" /> Python
        </Tag>
        <Tag color="darkgreen" className="category">
          İmage processing
        </Tag> */}
      </div>
      {blogpost.map((res) => {
        const image = require(`../BlogPosts/${res.id}.jpg`);
        return (
          <Link to={'/post/' + res.id}>
            <div className="blog-post-card">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  borderTopLeftRadius: '1em',
                  borderTopRightRadius: '1em',
                  height: '200px'
                }}
              >
                <Tag color={res.category_color} className="postCategory">
                  <code>{res.category}</code>
                </Tag>
                <div
                  style={{
                    display: 'none'
                  }}
                >
                  asdf
                </div>
              </div>
              <div>
                <p className="postTitle"> {res.title}</p>
                <p className="postDate"> {moment(res.date).format('MMMM DD YYYY')}</p>
              </div>
            </div>
            {/* <div style={{ display: 'none' }}>
                  <Post id={res.id} />
                </div> */}
          </Link>
        );
      })}
    </>
  );
};

export default BlogPost;
