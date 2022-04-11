import React from 'react';
import loginImg from './Assets/Images/chicken.png';

// pass props props from functional component to class component
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  // 1. created card container with login header at the top
  // 2. created content container and declared image, form and footer classes
  // 3. created form container and called chicken image import
  // 4. created form API and declared input labels with placeholders
  // 5. create footer with simple button

  render() {
    return (
      <div className="card-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label className="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label className="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
