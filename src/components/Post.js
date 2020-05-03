import React, { useState, useEffect } from 'react';
// import {
//   MediumCircleFilled,
//   TwitterCircleFilled,
//   LinkedinFilled,
//   GithubFilled
// } from '@ant-design/icons';
import { Row, Col } from 'antd';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

import marked from 'marked';
import Markdown from 'markdown-to-jsx';

const Post = (props) => {
  const [terms, setTerms] = useState('');
  //   componentWillMount() {
  //     fetch(post)
  //       .then((response) => response.text())
  //       .then((text) => {
  //         this.setState({ terms: text });
  //       });
  //   }
  useEffect(() => {
    const post = require(`../BlogPosts/${props.match.params.id}.mdx`);
    fetch(post)
      .then((response) => response.text())
      .then((data) => {
        console.log('text:', data);
        setTerms(data);
      });
  });

  return (
    <>
      {/* <div style={{ color: 'white' }}>
              <ReactMarkdown source={input} escapeHtml={false} />
            </div> */}
      {/* <Markdown>{this.state.terms}</Markdown> */}
      {/* <Link to={'/'}>
        <div className="Back-Button">Back</div>
      </Link> */}
      <div className="blog-post">
        <ReactMarkdown source={terms} />
        {/* <Markdown>{this.state.terms}</Markdown> */}
      </div>
    </>
  );
};

export default Post;
