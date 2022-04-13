import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import PostPage from './Pages/PostPage';
import Home from './Pages/Home'

import './style.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from './Pages/LoginPage';


const rootElement = document.getElementById("root");
function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/' element={<Home />}/>
        <Route path='/posts' element={<PostPage />}/>
        <Route path='/login' element={<LoginPage />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
