import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
import './main.css';
import Home from './Pages/Home'
import PostPage from './Pages/PostPage';
import LoginPage from './Pages/LoginPage';
import AdminMenu from './components/AdminMenu';

function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/'      element={<Home />}/>
        <Route path='/posts' element={<PostPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/admin' element={<AdminMenu />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
