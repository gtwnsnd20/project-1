import React, {useState} from 'react';
import loginImg from './Assets/Images/chicken.png';
import axios from 'axios';

function Login(props) {

  // tracks state of error message
  const [errorMessage,setErrorMessage] = useState({});

  // set of potential error messages
  const errors = {
    login_info: "Invalid username/password",
    server: "Server error"
  }

  // takes form input and sends to backend through an axios call
  const handleSubmit = (event) => {
    event.preventDefault();

    let {username,password} = document.forms[0];
    
    axios.post(`http://localhost:3001/login`,
      {username:username.value, password:password.value}
    ).then((response) => { // logs in user, saves cookie(to be finished)
        console.log(response.status);
        console.log("You've logged in!");
        console.log(response.config.data);
    }).catch((error) => { // catches and sets error message from call
      if(error.response.status === 400) {
        console.log(error.response.status);
        setErrorMessage({ name: 'login_info', message: errors.login_info });
      } else {
        console.log(error.response.status);
        setErrorMessage({ name: 'server', message: errors.server });
      }
    });
  }

  // renders error message if axios call returns error
  const renderErrorMessage = (name) => name === errorMessage.name && (<div className='error'>{errorMessage.message}</div>);

  // 1. created card container with login header at the top
  // 2. created content container and declared image, form and footer classes
  // 3. created form container and called chicken image import
  // 4. created form API and declared input labels with placeholders

  return(
    <div className="card-container" ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt='loginImg'/>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="username">Username</label>
            <input type="text" name="username" placeholder="Username" required/>
          </div>
          <div className="form-group">
            <label className="password">Password</label>
            <input type="password" name="password" placeholder="Password" required/>
          </div>
          <button type='submit' className="btn">
            Log In
          </button>
        </form>
      </div>
      {renderErrorMessage('login_info')}
      {renderErrorMessage('server')}
    </div>
  );
}

export default Login;
