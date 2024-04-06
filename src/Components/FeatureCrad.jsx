import React from 'react'

import PropTypes from 'prop-types'
import CubeIcon from "../assets/cube.svg"

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className='border flex rounded-lg font-rob w-full md:w-3/4 lg:w-2/5 lg:m-5  md:px-2 m-3  '>
    <div className='p-2'>
      <img src={CubeIcon} alt='cube' className='w-16 md:w-10 '/>
    </div>
    <div className='p-2'>
        <h2>{props.heading}</h2>
        <span className='text-sm font-normal'>{props.subHeading}</span>

    </div>
    </div>
  )
}



export default FeatureCard
