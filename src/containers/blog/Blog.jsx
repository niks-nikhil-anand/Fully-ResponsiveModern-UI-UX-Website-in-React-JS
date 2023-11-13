import React from 'react'
import './blog.css'
import {Article} from '../../components/';
import {blog01,blog02,blog03,blog04,blog05} from './import';



const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening,
          We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt__blog-container_groupA">
          <Article imageUrl ={blog01} date="25 Aug 2023" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className="gpt__blog-container_groupB">
        <Article imageUrl ={blog02} date="25 Aug 2023" title="Unveiling ChatGPT 4: Redefining Conversational AI"/>
        <Article imageUrl ={blog03} date="25 Aug 2023" title="The Power of ChatGPT 4: Exploring Next-Gen AI Conversations"/>
        <Article imageUrl ={blog04} date="25 Aug 2023" title="Inside ChatGPT 4: A Look at the Future of Conversational Technology"/>
        <Article imageUrl ={blog05} date="25 Aug 2023" title="ChatGPT 4: Your Ultimate Guide to the Latest in Conversational AI"/>
        </div>
      </div>
    </div>

  )
}

export default Blog