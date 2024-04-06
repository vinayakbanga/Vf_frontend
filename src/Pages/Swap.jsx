import React, { useState } from 'react';
import { Typography } from '@material-tailwind/react';
import axios from 'axios';
import PersonPlaceholder from "../assets/swapPlaceholder.png";

const Swap = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [resultImage, setResultImage] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state
  const [resultLoading, setResultLoading] = useState(false); // Add result loading state

  const handleImageUpload = async (e) => {
    e.preventDefault();

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
    <div className='h-full bg-pp-200 font-rob flex flex-col items-center justify-center text-center'>
      <Typography variant="h2" color="blue-gray" className="mb-4 font-pop text-pp-900">
        Face Swap Feature
      </Typography>
      <Typography className='text-lg font-medium text-pp-950'>
        This feature swaps faces between two images to create a new image.
      </Typography>
      {/* Conditional rendering of loading spinner */}
      {loading && <div className="spinner-border text-pp-500" role="status"><span className="sr-only">Loading...</span></div>}
      <div>
        <div className="flex justify-evenly my-4 w-11/12 rounded-3xl mx-auto p-8 flex-col items-center sm:flex-row">
          <div className="w-4/12 ">
            {image1 ? (
              <img src={URL.createObjectURL(image1)} alt="Uploaded" className='w-96 border-2 rounded-xl border-pp-500 my-4' />
            ) : (
              <div className=' border-pp-700 flex justify-center mb-5'>
                <img src={PersonPlaceholder} alt="Placeholder" className='p-2 rounded-xl border-pp-500 my-4' />
              </div>
            )}
            <Typography variant="h4" color="blue-gray" className="mb-4 text-pp-950 text-lg">
              Original Image
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage1Upload}
            />
          </div>
          <div className="w-4/12 ">
            {image2 ? (
              <img src={URL.createObjectURL(image2)} alt="Uploaded" className='w-96 border-2 rounded-xl border-pp-500 my-4' />
            ) : (
              <div className=' border-pp-700 flex justify-center mb-5'>
                <img src={PersonPlaceholder} alt="Placeholder" className='p-2 rounded-xl border-pp-500 my-4' />
              </div>
            )}
            {/* <div className='border flex flex-col justify-center '> */}
            <Typography variant="h4" color="blue-gray" className="mb-4 text-pp-950 text-lg">
              Image to be swapped
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleImage2Upload}
            />
            {/* </div> */}
          </div>
        </div>
        <button
          onClick={handleImageUpload}
          className='bg-pp-500 p-4 rounded-3xl text-pp-100 hover:bg-pp-200 border hover:text-pp-500 hover:border-pp-500'
        >
           {loading ? 'Swapping...' : 'Swap Images'}
        </button>
      </div>
      {resultLoading ? ( // Show loading spinner while result is loading
        <div className="spinner-border text-pp-500" role="status"><span className="sr-only">Loading...</span></div>
      ) : (
        resultImage && (
          <div className='mb-28 md:mb-0 '>
            <Typography variant="h5" className="mt-8 mb-4 text-pp-950">
              Resultant Image
            </Typography>
            <img src={resultImage} alt="Result" className='w-64 md:w-full mb-10 border-2 rounded-xl border-pp-500 mx-auto' />
          </div>
        )
      )}
    </div>
  );
};

export default Swap;
