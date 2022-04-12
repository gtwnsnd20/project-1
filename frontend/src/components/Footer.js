import React from 'react';
import logo from "./Assets/Images/chicken.png"; 

const Footer = () => {
  return (
    <footer className="text-center text-lg-start sitefooter text-white">
      <div className="text-center p-4">
        <img src={logo} alt='' />
        © 2022 Copyright
      </div>
    </footer>
  );
};

export default Footer;