import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-pp-600  flex items-center p-5 justify-around bottom-0 '>
        <div>
          <Link to="/">
          <h4 className='text-pp-200 font-normal text-xl font-pop'>Visage Forge</h4>
          </Link>
        </div>
        <div className='flex gap-2 font-medium font-rob text-pp-200'>
            <Link to="/detect">Detect</Link>
            <Link to="/swap">Swap</Link>
            {/* <Link to="">Research paper</Link> */}

        </div>
    </div>
  )
}

export default Footer