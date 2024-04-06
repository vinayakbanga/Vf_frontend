import React from 'react'
import CardSample from '../Components/Card'
import detection from "../assets/detection.png"
import faceswap from "../assets/faceswap.png"



const Ourservice = () => {
  return (
    <div className=' bg-pp-600 p-12'>

<h2 className='text-center text-4xl font-medium text-pp-200 mb-6 font-pop'>Our services</h2>
      <div className='flex justify-around flex-col items-center md:flex-row'>
    <CardSample image={detection} title="DeepFake Detection" desp="Image authenticity verification feature to detect real or manipulated images accurately." link='/detect'/> 
    <CardSample image={faceswap} title="Face Swapping" desp="This feature enables merging of two faces into a single composite image seamlessly" link='/swap'/>
    </div>

    </div>
  )
}

export default Ourservice