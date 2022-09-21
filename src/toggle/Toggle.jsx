import React from 'react'
import './toggle.css'
import { themeContext } from '../Context'
import { useContext } from 'react'

import {FiSun} from 'react-icons/fi'
import {BsFillMoonStarsFill} from 'react-icons/bs'

const Toggle = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  
  const handleClick = () => {
    theme.dispatch({type: 'toggle'}) 
  }
  return (
    <div className='toggle' onClick={handleClick}>
      <FiSun />
      <BsFillMoonStarsFill />
      <div className="t-button"
          style ={darkMode? {left: '2px'} : {right: '2px'}}
      >
      </div>
    </div>
  )
}

export default Toggle
