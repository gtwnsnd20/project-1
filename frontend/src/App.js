import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home'
import LoginPage from './components/Pages/LoginPage';
import PostsPage from './components/Pages/PostsPage';
import AdminMenu from './components/Pages/AdminMenu';
import SearchThreads from './components/Pages/SearchThreadsPage'
import Logout from './components/Logout';
import axios from 'axios';
import './main.scss';
axios.defaults.withCredentials = true; // We don't know what this does, but if we delete it the whole thing breaks


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/'       element={<Home />}/>
        <Route path='/posts'  element={<PostsPage />}/>
        <Route path='/login'  element={<LoginPage />}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/admin'  element={<AdminMenu />}/> 
        <Route path='/search-threads'  element={<SearchThreads />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
