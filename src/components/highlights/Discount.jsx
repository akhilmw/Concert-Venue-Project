import React from 'react'
import { useState, useEffect } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton';

const Discount = () => {
  const end = 30;

  const[start, updateStart] = useState(0);


  const percentage = () => {
    if (start < end) {
      updateStart(prevCount => prevCount + 1)
    }
  }

  useEffect(() => {
    if(start > 0 && start < 30) {
      setTimeout(() => {
        updateStart(prevCount => prevCount + 1)
      }, 30)
    }
  }, [start])

  return (
    <div className='center_wrapper'>
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if(inView) {
              percentage()
            }
          }}
        
        >
          <div className='discount_percentage'>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className='discount_description'>
            <h3>Purchase the tickets before 20th November</h3>
            <p>
              Catch Rishabh Dhawan live performing hits of KK and the famous band The Local Train at Hard Rock Cafe, Delhi.
              Prepare to party and enjoy the evening with excellent food, live music, and cool drinks.
            </p>

            <MyButton text = "Purchase Ticekts" link = "https://www.google.com/"/>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
