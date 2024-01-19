import React from 'react';
import Img_forgot from '../../public/images/2.jpg';
import { Link } from 'react-router-dom';

const Forgot = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 sm:block hidden'>
        <img className='w-full h-screen object-cover' src={Img_forgot} alt="" />
        <h1 className='absolute top-10 ms-10 font-bold text-4xl text-black rounded-xl p-2'>Tech Heaven</h1>
      </div>
      <div className='bg-yellow-500 md:bg-white md:w-1/2 h-screen w-full flex justify-center items-center'>
      <div className='space-y-7 md:w-[60%] w-[90%]'>
        <Link to='/SignUp'><span className='cursor-pointer hover:text-blue-700'><i class="fa-solid fa-chevron-left"></i>  Back</span></Link>
  <h1 className='font-bold md:text-3xl text-2xl'>Forgot Passwod</h1>
  <span className='text-gray-500 md:text-sm text-xs'>Enter Your registerd email address. we'll send you a code to reset your password.</span>
  <div className='flex flex-col space-y-5'>
    <label className='text-base space-y-3'>Email Address <span className='text-red-700'>*</span><br />
      <input className='focus:bg-gray-300 w-full outline outline-1 rounded-xl p-2' type="text" />
    </label>
    <button className='hover:bg-neutral-800 bg-black text-white text-center rounded-xl p-3'>Recover Password</button>
  </div>
</div>
</div>
      </div>
  );
}

export default Forgot;
