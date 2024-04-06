import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import { FaUpload } from 'react-icons/fa';
import PersonPlaceholder from "../assets/users.png";

const Swap = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  const handleImageUpload = async (e, setImageFunc) => {
    const file = e.target.files[0];
    if (file) {
      setImageFunc(URL.createObjectURL(file));
    }
  };

  const handleFaceSwap = async () => {
    if (image1 && image2) {
      try {
        const formData = new FormData();
        formData.append('image1', image1);
        formData.append('image2', image2);

        // Send images to backend for face swapping
        const response = await axios.post('http://127.0.0.1:5000/swap', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Set the resultant image received from backend
        setResultImage(response.data.result_image);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className='h-screen bg-pp-200 flex flex-col items-center justify-center text-center'>
      <Typography variant="h3" color="blue-gray" className=" mb-4 text-pp-950">
        Face Swap Feature
      </Typography>
      <Typography className='text-lg font-medium text-pp-950'>
        This feature swaps faces between two images to create a new image.
      </Typography>
      <div >
        <div className="flex justify-evenly my-4 border-2 border-pp-900 w-11/12 rounded-3xl mx-auto p-8 flex-col items-center sm:flex-row">
          <div className="w-4/12">
           
            {image1 ? (
              <img src={image1} alt="Uploaded" className='w-full border-2 rounded-xl border-pp-500 my-4' />
            ) : (
              <img src={PersonPlaceholder} alt="Placeholder" className='w-full border-2 rounded-xl border-pp-500 my-4' />
            )}
             <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setImage1)}
              
            />
          </div>
          <div className="w-4/12">
            
            {image2 ? (
              <img src={image2} alt="Uploaded" className='w-full border-2 rounded-xl border-pp-500 my-4' />
            ) : (
              <img src={PersonPlaceholder} alt="Placeholder" className='w-full border-2 rounded-xl border-pp-500 my-4' />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, setImage2)}
            />
          </div>
        </div>
        <button
          onClick={handleFaceSwap}
          className='bg-pp-500 p-4 rounded-3xl text-pp-100 hover:bg-pp-200 border hover:text-pp-500 hover:border-pp-500'
        >
          Swap Faces
        </button>
      </div>
      {resultImage && (
        <div>
          <Typography variant="h5" className="mt-8 mb-4 text-pp-950">
            Resultant Image
          </Typography>
          <img src={resultImage} alt="Result" className='w-1/2 border-2 rounded-xl border-pp-500 mx-auto' />
        </div>
      )}
    </div>
  );
};

export default Swap;
