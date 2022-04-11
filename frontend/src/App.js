import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ForumTabsDemo from './components/TabForums';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ForumTabsDemo />
      <Footer />
    </div>
  );
}

export default App;
