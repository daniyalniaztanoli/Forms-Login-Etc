import React from 'react';
import Img_sign from '../../public/images/1.jpg';
import '../App.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 sm:block hidden'>
        <img className='w-full h-screen object-cover' src={Img_sign} alt="" />
        <h1 className='absolute top-10 ms-10 font-bold text-4xl text-black rounded-xl p-2'>Tech Heaven</h1>
      </div>
      <div className='bg-yellow-500 md:bg-white md:w-1/2 h-screen w-full flex justify-center items-center'>
      <div className=' space-y-5 md:w-[60%] w-[90%] md:p-0 p-5'>
  <h1 className='font-bold md:text-4xl text-3xl'>Create Acount👋</h1>
  <span className='text-gray-500 text-xs'>Please enter details</span>
  <div className='flex flex-col space-y-3'>
    <label className='text-base space-y-2'>Full Name <span className='text-red-700'>*</span><br />
      <input className='focus:bg-gray-300 w-full outline outline-1 rounded-xl p-2' type="text" />
    </label>
    <label className='text-base space-y-3'>Email Address <span className='text-red-700'>*</span><br />
      <input className='focus:bg-gray-300 w-full outline outline-1 rounded-xl p-2' type="text" />
    </label>
    <label className='text-base space-y-3'>Password <span className='text-red-700'>*</span><br />
      <input className='focus:bg-gray-300 w-full outline outline-1 rounded-xl p-2' type="password" />
    </label>
    <label className='text-base space-y-3'>Confirm Password <span className='text-red-700'>*</span><br />
      <input className='focus:bg-gray-300 w-full outline outline-1 rounded-xl p-2' type="password" />
    </label>
    <button className='hover:bg-neutral-800 bg-black text-white text-center rounded-xl p-3'>SignUp</button>
  </div>
  <div className=''>
  <ul className='flex space-x-4'>
      <li className='text-xs md:text-base'>Already have an account?</li>
      <Link to='/'>
      <li className='hover:text-blue-600 cursor-pointer text-xs md:text-base'>Login</li>
      </Link>
  </ul>
</div>
</div>
</div>
      </div>
  );
}

export default SignUp;

