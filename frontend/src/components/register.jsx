import React, {useState} from 'react';
import loginImg from './Assets/Images/chicken.png';
import axios from 'axios';

// class Register extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  // 1. created card signin header
  // 2. created content container and declared image, form and footer classes
  // 3. created form container and called chicken image import
  // 4. created form API and declared input labels with placeholders
  // 5. create footer with simple button

//   render() {
//     return (
//       <div className="card-container" ref={this.props.containerRef}>
//         <div className="header">Register</div>
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
//               <label className="email">Email</label>
//               <input type="text" name="email" placeholder="email" />
//             </div>
//             <div className="form-group">
//               <label className="password">Password</label>
//               <input type="text" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Register
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

function Register(props) {
  
  // tracks state of error message
  const [errorMessage,setErrorMessage] = useState({});

  // set of potential error messages
  const errors = {
    name_taken: "Username already taken",
    server: "Server error"
  }

  // takes form input and sends to backend through an axios call
  const handleSubmit = (event) => {
    event.preventDefault();

    let {username,email,password} = document.forms[0];
    
    axios.post(`http://localhost:3001/register`,
      {username:username.value, password:password.value, email:email.value}
    ).then((response) => { // logs in user, saves cookie(to be finished)
        console.log(response.status);
        console.log("You've made a new account!");
    }).catch((error) => { // catches and sets error message from call
      if(error.response.status === 409) {
        console.log(error.response.status);
        setErrorMessage({ name: 'name_taken', message: errors.name_taken });
      } else {
        console.log(error.response.status);
        setErrorMessage({ name: 'server', message: errors.server });
      }
    });
  }

  // renders error message if axios call returns error
  const renderErrorMessage = (name) => name === errorMessage.name && (<div className='error'>{errorMessage.message}</div>);

  // 1. created card register header
  // 2. created content container and declared image, form and footer classes
  // 3. created form container and called chicken image import
  // 4. created form API and declared input labels with placeholders

  return (
    <div className="card-container" ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt='loginImg'/>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="username">Username</label>
            <input type="text" name="username" placeholder="Username" required/>
            {renderErrorMessage('name_taken')}
          </div>
          <div className="form-group">
            <label className="email">Email</label>
            <input type="text" name="email" placeholder="E-mail" required/>
          </div>
          <div className="form-group">
            <label className="password">Password</label>
            <input type="text" name="password" placeholder="Password" required/>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
      {renderErrorMessage('server')}
    </div>
  );
}

export default Register;
