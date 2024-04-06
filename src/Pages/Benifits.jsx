import React from 'react';
import FeatureCard from '../Components/FeatureCrad';

const Benifits = () => {
  return (
    <div className='bg-pp-200 p-12 flex flex-col justify-center items-center'>
      <h2 className=' text-4xl font-medium text-pp-600 mb-6 font-pop'>Key Features</h2>
      <span className='font-rob'> Discover the powerful features that make our image authenticity detection tool stand out</span>
      <div className=' pt-12 flex flex-wrap  justify-center'>
       
          <FeatureCard heading="Deep Learning Technology" subHeading="Utilizing cutting-edge deep learning my els for accurate detection results" />
          <FeatureCard heading="Image Analysis" subHeading="Our advanced algorithms analyze input images to determine authenticity" />
              <FeatureCard heading="User-Friendly Interface" subHeading="Intuitive interface for easy image upload and quick detection results" />
              <FeatureCard heading="Real-Time Detection" subHeading="Instantly assess whether an image is real or fake with our real-time detection feature" />
            
        
      </div>
    </div>
  );
};

export default Benifits;
