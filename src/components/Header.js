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
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={22} lg={22} xl={22}>
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
          </Col>
        </Row>
      </>
    );
  }
}

export default Header;
