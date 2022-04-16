import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import './main.css';
import Home from './components/Pages/Home'
import LoginPage from './components/Pages/LoginPage';
import PostsPage from './components/Pages/PostsPage';
import AdminMenu from './components/Pages/AdminMenu';
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/'       element={<Home />}/>
        <Route path='/posts'  element={<PostsPage />}/>
        <Route path='/login'  element={<LoginPage />}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/admin'  element={<AdminMenu />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
