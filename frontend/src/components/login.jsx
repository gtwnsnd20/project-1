import React, {useState} from 'react';
import loginImg from './Assets/Images/chicken.png';
import axios from 'axios';

// pass props props from functional component to class component
// class Login extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  // 1. created card container with login header at the top
  // 2. created content container and declared image, form and footer classes
  // 3. created form container and called chicken image import
  // 4. created form API and declared input labels with placeholders
  // 5. create footer with simple button

//   render() {
//     return (
//       <div className="card-container" ref={this.props.containerRef}>
//         <div className="header">Login</div>
//         <div className="content">
//           <div className="image">
//             <img src={loginImg} />
//           </div>
//           <div className="form">
//             <div className="form-group">
//               <label className="username">Username</label>
//               <input type="text" name="username" placeholder="username" />
//             </div>
//             <div className="form-group">
//               <label className="password">Password</label>
//               <input type="password" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

function Login(props) {

  const [errorMessage,setErrorMessage] = useState({});

  const errors = {
    login_info: "Invalid username/password",
    server: "Server error"
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let {username, password} = document.forms[0];
    
    axios.post(`http://localhost:3001/login`, {username,password}).then((response) => {
      if(response.status == 403) {
        setErrorMessage({ name: 'login_info', message: errors.login_info });
      } else if(response.status == 200) {
        console.log("You've logged in!");
      } else {
        setErrorMessage({ name: 'server', message: errors.server });
      }
    });
  }

  const renderErrorMessage = (name) => name === errorMessage.name && (<div className='error'>{errorMessage.message}</div>);

  return(
    <div className="card-container" ref={props.containerRef} onSubmit={handleSubmit}>
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
        {renderErrorMessage('login_info')}
        {renderErrorMessage('server')}
      </div>
    </div>
  );
}

export default Login;
