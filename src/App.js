import './App.css';
import React from 'react';
import Navbar from './Navbar'; 
import Foooter from './Foooter';
import { ReactComponent as ImageBanner } from './ImageBanner.svg';
import { ReactComponent as Profile } from './profile.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile div className='profile'/>
      <ImageBanner />
      <Foooter />
    </div>
  );
}

export default App;