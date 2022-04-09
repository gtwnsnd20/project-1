import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ForumTabsDemo from './components/TabForums';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ForumTabsDemo />
      <Footer />
    </div>
  );
}

export default App;
