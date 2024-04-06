import React from 'react'
import HeroImg from "../assets/HeroImg.png"
import Ourservice from './Ourservice'
import Benifits from './Benifits'
// import OurTeam from './OurTeam'
// import Loader from '../Components/Loader'

const Home = () => {
  return (
    <div >
    <div className=' p-12  flex  flex-col-reverse sm:flex-row items-center '>
        <div className='  flex flex-col gap-4 items-start '>
        <h3 className='sm:font-bold text-3xl font-semibold sm:text-5xl text-pp-950 mb-2 font-pop'>Visage Forge </h3>
        <span className='lg:font-regular font-rob lg:w-full  lg:text-xl text-wrap sm:w-3/4'>Visage Forge is a cutting-edge web app that offers deepfake detection, image swapping, and media verification services, ensuring a secure and authentic entertainment experience </span>
        <button className='bg-pp-600 p-3 border-2 text-pp-200 rounded-lg mt-2 hover:border-pp-600 hover:text-pp-600 hover:bg-pp-200' > View Our Services </button>
        </div>
        <div className=' flex justify-center'>
            <img src={HeroImg} alt='HeroImg'
            className='lg:w-3/4 rounded-xl opacity-90'
            style={{ boxShadow: '0px 4px 6px rgba(9, 9, 9, 99)' }}/>

        </div>
        
    </div>

    <Ourservice/>
    <Benifits/>
    {/* <Loader/> */}
    {/* <OurTeam/> */}
    </div>
    
  )
}

export default Home