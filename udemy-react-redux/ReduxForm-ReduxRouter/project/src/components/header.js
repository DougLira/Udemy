import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const headerStyle = {
      textAlign: 'center',
      fontColor: 'green',
      fontSize: '50px'
    }
    
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to="/"
              className="center-block brand-logo"
            >
              <div style={headerStyle}>UdemyReact</div>
            </Link>
            <hr />
          </div>
        </nav>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">Home</Link>
          <Link className="navbar-brand text-success" to="/posts/new">New Post</Link>
        </nav>
      </div>
    );
  }
}

export default Header;