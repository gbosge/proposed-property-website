import React from 'react'
import './Navigation.css'
import { Tilt } from 'react-tilt'
import house from '../assets/house.png'


const NavigationBar = () => {
  return (
    <div className='nav-bar'>
      <div className='logo-wrapper'>
        <a href='' className='' >
          <img className='logo-image' style={{paddingTop: '5px'}} alt='logo' src={house}/>
            <h1 className='logo-text'>G. O. <span>Properties</span></h1>
        </a>
        </div>              
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <ul>
          <li> <a href=''>Home </a></li>
          <li> <a href=''>Sales</a></li>
          <li> <a href=''>Letting</a></li>
          <li> <a href=''>Short Lets</a></li>
          <li> <a href=''>Our Services</a></li>
          <li> <a href=''>About Us</a></li>
          <li> <a href=''>Contact Us</a></li>
        </ul>
      </nav>
    
      
    </div>
  )
}

export default NavigationBar