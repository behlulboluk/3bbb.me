import React from 'react';
import {
  MediumCircleFilled,
  TwitterCircleFilled,
  LinkedinFilled,
  GithubFilled
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Row, Col } from 'antd';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="App-header">
          <div className="headerAndIntro">
            <Link to={'/'}>
              <p className="header">Behlul Bahadir Boluk</p>
              <p className="intro">
                I'm a <code>Full-Stack Software Engineer.</code>
              </p>
            </Link>
          </div>

          <div className="App-links">
            <a href="https://medium.com/@behlulboluk">
              <MediumCircleFilled />
            </a>
            <a href="https://www.linkedin.com/in/behlulboluk/">
              <LinkedinFilled />
            </a>
            <a href="https://github.com/behlulboluk">
              <GithubFilled />
            </a>
            <a href="https://twitter.com/behlulboluk">
              <TwitterCircleFilled />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
