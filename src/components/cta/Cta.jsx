import React from 'react'
import './cta.css'

const Cta = () => {
  return (
    <div className='gpt3__cta '>
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className="gpt3__cta-btn">
        <a href='https://openai.com/gpt-4'><button type='button'  > Get Started</button></a>
      </div>
    </div>
  )
}

export default Cta