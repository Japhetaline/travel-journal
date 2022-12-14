import React from 'react';
import '../App.css'
import World from '../images/Fill 213.png';

function Navbar() {
  return (
    <div className='navbar'>
      <img src={World} alt="" />
      <p>My Travel Journal</p>
    </div>
  )
}

export default Navbar