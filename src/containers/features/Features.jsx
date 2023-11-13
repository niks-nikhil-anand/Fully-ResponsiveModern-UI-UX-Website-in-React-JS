import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title : 'Improving end distrusts instantly ',
    text : 'Following the research path from GPT, GPT-2, and GPT-3, our deep learning approach leverages more data and more computation to create increasingly sophisticated and capable language models.'
  },
  {
    title : 'Aptitude on standardized tests',
    text : 'GPT-4 demonstrates aptitude on several standardized tests. OpenAI claims that in their own testing the model received a score of 1410 on the SAT , 163 on the LSAT (88th percentile), and 298 on the Uniform Bar Exam (90th percentile).In contrast, OpenAI claims that GPT-3.5 received scores for the same exams in the 82nd,[20] 40th, and 10th percentiles, respectively.[3] GPT-4 also passed an oncology exam,[22] an engineering exam[23] and a plastic surgery exam'
  },

  {
    title : 'Risks & mitigations',
    text : 'GPT-4 poses similar risks as previous models, such as generating harmful advice, buggy code, or inaccurate information. However, the additional capabilities of GPT-4 lead to new risk surfaces. To understand the extent of these risks, we engaged over 50 experts from domains such as AI alignment risks, cybersecurity, biorisk, trust and safety, and international security to adversarially test the model.'
  },

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index) => (
            <Feature title={item.title} text = {item.text} key = {item.title+index}/>
        ))}
      </div>
    </div>
  )
}

export default Features