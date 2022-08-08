import React from 'react';
import brain from './brain.png';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <Tilt className="pl3" style={{width :'100px',height:'100px'}}>
    <div className='logo white ba bw1' style={{ height: '100px', width : '100px' }}>
        <img className='center pa3' src={brain}></img>
    </div>
  </Tilt>


  )
}

export default Logo