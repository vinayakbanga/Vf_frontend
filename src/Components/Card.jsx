import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from 'react-router-dom';
  // import detection  from '../assets/detection.png'

const CardSample = (props) => {
  // const redirectToLink = () => {
  //   window.location.href = props.link; // Redirect to the link received from props
  // };

 
  return (
    <>
    
        <Card className="mt-6 sm:w-2/5 lg:w-1/4 p-4  bg-pp-200 flex flex-col items-center justify-center ">
     
     <img src={props.image} className='w-3/4 lg:w-1/2 '/>
       
     
     <CardBody className='text-center'>
       <Typography variant="h5" color="blue-gray" className="mb-2 font-rob" >
         {props.title}
       </Typography>
       <Typography className='font-rob'>
       {props.desp}
       </Typography>
     </CardBody>
     <CardFooter className="pt-0">
       {/* <Button className='bg-pp-600 px-4 py-2 border-2 text-pp-200 rounded-lg mt-2 hover:border-pp-600 hover:text-pp-600 hover:bg-pp-200'onClick={redirectToLink}  >Try</Button> */}
       <Link to={props.link} >
            <Button className='bg-pp-600 px-4 py-2 border-2 text-pp-200 rounded-lg mt-2 hover:border-pp-600 hover:text-pp-600 hover:bg-pp-200'>
              Try
            </Button>
          </Link>
     </CardFooter>
   </Card>
   </>
  )
}

export default CardSample