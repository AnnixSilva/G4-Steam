import './App.css';
import React from 'react';
import Navbar from './Navbar'; 
import { ReactComponent as ImageBanner } from './ImageBanner.svg';
import { ReactComponent as Profile } from './profile.svg';
import { ReactComponent as Ecolife } from './Ecolife.svg';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile div className='profile'/>
      <ImageBanner />
      <Ecolife div className='eco'/>
    </div>
  );
}

export default App;