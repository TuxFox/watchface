import React from 'react'
import './Profile.css'
import elon from '../../img/elon.jpg'
import elonmini from '../../img/elon_mini.jpg'

function Profile() {
    return (
      <div className='Profile'>
        <div className='Me'>
          <img src={elon}></img>
          <p> Elon Musk </p>
        </div>
        <div className='Posts'>
          <input placeholder='Enter the post...'></input>
          <button> Add Post </button>
          <div className='Post'>
            <img src={elonmini}></img>
            <span> Elon Musk </span>
            <p> 
              With the lowest drag coefficient on Earth and unmatched efficiency, 
              Model S is built for speed and range. 
              Together with a wider body and chassis, 
              these elements help you go down the straight or around corners quicker than ever.
            </p>
          </div>
        </div>
      </div>
    );
  }

export default Profile