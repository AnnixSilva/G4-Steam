import './App.css';
import React from 'react';
import Navbar from './Navbar'; 
import Foooter from './Foooter';
import Pesquisa from './Pesquisa';
import { ReactComponent as ImageBanner } from './ImageBanner.svg';
import { ReactComponent as Profile } from './profile.svg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile div className='profile'/>
      <ImageBanner />
      <Foooter />
      <Pesquisa />
    </div>
  );
}

export default App;