import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-4' text='GPT-4 are both AI-powered generative AI language models developed by OpenAI. They have been trained on a massive amount of text data from the internet to be able to generate human-like text responses to a given prompt.' />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>GPT-4 is OpenAI’s most advanced system</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title="Creativity" text="GPT-4 is more creative and collaborative than ever before. It can generate, edit, and iterate with users on creative and technical writing tasks, such as composing songs, writing screenplays, or learning a user’s writing style. " />
        <Feature title="Visual input" text="GPT-4 can accept images as inputs and generate captions, classifications, and analyses." />
        <Feature title="Longer context" text="GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis." />
      </div>
    </div>

  )
}

export default WhatGPT3