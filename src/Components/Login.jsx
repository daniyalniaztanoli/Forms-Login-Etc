import React from 'react';
import Img_Welcome from '../../public/images/3.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='flex'>
      <div className='w-1/2 sm:block hidden'>
        <img className='w-full h-screen object-cover' src={Img_Welcome} alt="" />
        <h1 className='absolute top-10 ms-10 font-bold text-4xl text-black bg-white rounded-xl p-2'>Tech Heaven</h1>
      </div>
      <div className='bg-yellow-500 md:bg-white md:w-1/2 h-screen w-full flex justify-center items-center'>
      <div className='space-y-7 md:w-[60%] w-[90%]'>
  <h1 className='font-bold text-4xl'>Welcome👋</h1>
  <span className='text-gray-500'>Please login here</span>
  <div className='flex flex-col space-y-5'>
    <label className='text-base space-y-3'>Email Address <span className='text-red-700'>*</span><br />
      <input className='focus:bg-gray-300 w-full outline outline-1 rounded-xl p-2' type="text" />
    </label>
    <label className='text-base space-y-3'>Password <span className='text-red-700'>*</span><br />
      <input className='focus:bg-gray-300 w-full outline outline-1 rounded-xl p-2' type="password" />
    </label>
    <button className='hover:bg-neutral-800 bg-black text-white text-center rounded-xl p-3'>Login</button>
  </div>
  <div className=''>
  <ul className='flex justify-between'>
  <Link to='SignUp'>
  <li className='hover:text-blue-600 cursor-pointer text-xs'>Create an account?</li>
  </Link>
      <Link to='/Forgot'>
      <li className='hover:text-blue-600 cursor-pointer text-xs'>Forgot password?</li>
      </Link>
  </ul>
</div>
</div>
</div>
      </div>
  );
}

export default Login;
