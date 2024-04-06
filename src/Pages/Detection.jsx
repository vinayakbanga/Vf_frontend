import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import PersonPlaceholder from "../assets/Placeholder.jpeg";
import axios from 'axios';
import Loader from '../Components/Loader';

const Detection = () => {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Display the uploaded image
      setImage(URL.createObjectURL(file));
      setLoading(true); // Set loading state to true

      try {
        const formData = new FormData();
        formData.append('image', file);

        // Send image data to backend for processing
        const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Set prediction result received from backend
        setPrediction(response.data.result);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Set loading state to false when response is received
      }
    }
  };

  const handleButtonClick = () => {
    // Trigger file input click
    document.getElementById('fileInput').click();
  };

  const handleRefreshClick = () => {
    // Reset image and prediction state
    setImage(null);
    setPrediction(null);
  };

  return (
    <div className=' min-h-screen flex flex-col justify-center bg-pp-200  text-center' >
      <Typography variant="h2" color="blue-gray" className=" font-pop text-pp-900">
        Detection Feature
      </Typography>
      <Typography className='text-lg font-rob font-medium text-pp-950 mt-8' >
        This feature aids in discerning the authenticity of images by detecting fakes versus genuine ones.
      </Typography>
      {/* <div className='m-auto border '>
      <Loader/>

      </div> */}
      {/* Placeholder for uploading image */}
      {loading ? ( // Conditionally render loader component while loading
        <div className="loader m-auto"><Loader/></div>
      ) : image ? (
        <div className=' mb-11'>
          <img src={image} alt="Uploaded" className='rounded-3xl border-pp-500 w-1/4 mx-auto my-14'
          style={{ boxShadow: '1px 4px 24px rgba(0,  0 ,0 ,0.9)'}} />
          <button onClick={handleRefreshClick} className='bg-pp-500 p-4 rounded-3xl text-pp-100 hover:bg-pp-200 border hover:text-pp-500 hover:border-pp-500'>Refresh</button>
        </div>
      ) : (
        <div>
          <img src={PersonPlaceholder} alt="Placeholder" className='rounded-3xl border-pp-500 w-1/2 lg:w-1/4 mx-auto my-14'
          style={{ boxShadow: '1px 4px 24px rgba(0,  0 ,0 ,0.9)' }}  />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageUpload}
          />
          <button onClick={handleButtonClick} className='bg-pp-500 p-4 font-rob rounded-3xl text-pp-100 hover:bg-pp-200 border hover:text-pp-500 hover:border-pp-500'>Upload Image</button>
        </div>
      )}
      {prediction && <p className=' text-pp-950 font-bold text-2xl'>Prediction: {prediction}</p>}
    </div>
  );
};

export default Detection;
