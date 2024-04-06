import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import PersonPlaceholder from "../assets/swapPlaceholder.png";
import ResultPlaceholder from "../assets/Resultant.png";
import uploadIcon from "../assets/uploadicon.svg";
import Loader from '../Components/Loader';

const Swap = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [resultLoading, setResultLoading] = useState(false); // Add result loading state

  const handleImageUpload = async () => {
    if (image1 && image2) {
      try {
        setLoading(true); // Set loading to true when starting the upload process

        const formData = new FormData();
        formData.append('file1', image1);
        formData.append('file2', image2);

        // Send images to backend for face swapping
        const response = await axios.post('http://127.0.0.1:5000/swap', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        // Set the resultant image received from backend
        setResultImage(response.data.swapped_image_url);
        console.log(response.data.swapped_image_url);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false); // Set loading to false when the upload process is completed
        setResultLoading(false); // Set result loading to false when the resultant image is received
      }
    }
  };

  const handleImage1Upload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage1(file);
      setResultImage(null); // Reset the result image when a new image is uploaded
    }
  };

  const handleImage2Upload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage2(file);
      setResultImage(null); // Reset the result image when a new image is uploaded
    }
  };

  return (
    <div className='min-h-screen bg-pp-200 font-rob flex flex-col items-center gap-6 justify-center text-center'>
      <Typography variant="h2" color="blue-gray" className="font-pop text-pp-900">
        Face Swap Feature
      </Typography>
      <Typography className='text-lg font-medium text-pp-950'>
        This feature swaps faces between two images to create a new image.
      </Typography>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div className=''>
          <div className='flex justify-evenly mb-4 '>
            <div className="w-4/12">
              {image1 ? (
                <img src={URL.createObjectURL(image1)} alt="Uploaded" className='w-96 border-2 rounded-xl border-pp-500 my-4' />
              ) : (
                <div className='border-pp-700 flex justify-center mb-1'>
                  <img src={PersonPlaceholder} alt="Placeholder" className='rounded-xl ml-3 border-pp-500' />
                </div>
              )}
              <Typography variant="h4" color="blue-gray" className="mb-4 text-pp-950 font-rob text-lg">
                Image 1
              </Typography>
              <div className=' flex items-center justify-center'>
              <label className="cursor-pointer bg-pp-500 hover:bg-pp-2   text-pp-100  hover:bg-pp-200 border hover:text-pp-500 hover:border-pp-500 lg:w-1/2 py-2 px-2 rounded-lg text-sm flex justify-center items-center "><img src={uploadIcon} alt="Upload Icon" className="mr-2 h-4 w-4" />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage1Upload}
                />
              </label>
              </div>
            </div>
            <div className="w-4/12">
              {image2 ? (
                <img src={URL.createObjectURL(image2)} alt="Uploaded" className='w-96 border-2 rounded-xl border-pp-500 my-4' />
              ) : (
                <div className='border-pp-700 flex justify-center mb-1'>
                  <img src={PersonPlaceholder} alt="Placeholder" className='rounded-xl ml-3 font-rob border-pp-500' />
                </div>
              )}
              <Typography variant="h4" color="blue-gray" className="mb-4 text-pp-950 text-lg">
                Image 2
              </Typography>
              <div className=' flex items-center justify-center'>
              <label className="cursor-pointer bg-pp-500 hover:bg-pp-2   text-pp-100  hover:bg-pp-200 border hover:text-pp-500 hover:border-pp-500 lg:w-1/2 py-2 px-2 rounded-lg text-sm flex justify-center items-center ">
                <img src={uploadIcon} alt="Upload Icon" className="mr-2 h-4 w-4" />
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImage2Upload}
                />
              </label>
              </div>
            </div>
          </div>
          <button
            onClick={handleImageUpload}
            className='bg-pp-500 p-4 mx-auto  rounded-3xl text-pp-100 hover:bg-pp-200 border hover:text-pp-500 hover:border-pp-500'
          >
            {loading ? 'Swapping...' : 'Get Swapped Image'}
          </button>
        </div>
        <div className='w-4/12 flex flex-col items-center justify-center'>
          {loading?<div className="loader m-auto"><Loader/></div> :resultImage ? (
            <img src={resultImage} alt="Result" className='w-64 md:w-96 rounded-xl border-pp-500 mx-auto' />
          ) : (
            <img src={ResultPlaceholder} alt="Result Placeholder" className='w-64 md:w-3/4 rounded-xl border-pp-500 mx-auto' />
          )}
          {/* {} */}
          <Typography variant="h5" className="mb-4 mt-5 text-pp-950">
            Resultant Image
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Swap;
