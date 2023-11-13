import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>
      <div className='gpt3__possibilty-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>GPT-4 surpasses ChatGPT in its advanced reasoning capabilities.</h1>
        <p>The latest milestone in OpenAI’s effort in scaling up deep learning. GPT-4 is a large multimodal model (accepting image and text inputs, emitting text outputs) that, while less capable than humans in many real-world scenarios, exhibits human-level performance on various professional and academic benchmarks.</p>
        <h4>OpenAI’s most advanced system</h4>
      </div>
    </div>
  )
}

export default Possibility