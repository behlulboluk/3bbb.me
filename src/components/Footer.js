import React, { useState, useEffect } from 'react';
import {
  MediumCircleFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  GithubFilled
} from '@ant-design/icons';
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

  return (
    <>
      <footer className="footer">© 2020 Copyright: 3bbb.me</footer>
    </>
  );
};

export default BlogPost;
