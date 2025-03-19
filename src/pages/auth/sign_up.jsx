import React from 'react'
import { Link } from 'react-router-dom'
import { AuthImage } from '../../components/index.js'

function sign_up() {
  return (
<div className='lg:flex  w-[100vw] h-[100vh]'>
      <AuthImage />
      <div className='w-[100%] h-[100%] lg:w-[65%] grid place-items-center'>
        <div className='bg-white w-[50%] rounded-lg'>
          <div className='p-[4%]'>
            <h1 className='font-h2 capitalize text-xl'>Sign Up</h1>
            <form action="" className='mt-[2%]'>
              <div>
                <p className='text-[12px]'>Email</p>
                <input className='border w-full p-1 rounded-lg' type="email" name="email" id="email" />
              </div>
              <div className='mt-2.5'>
                <p className='text-[12px]'>Password</p>
                <input className="border w-full p-1 rounded-lg " type="password" name="password" id="password" />
              </div>

              <button type="submit" className='mt-5 text-white bg-black w-full p-2 rounded-lg'>Login</button>
            </form>
            <div className="mt-2.5 text-center">
              <span className='text-[12px]'>Need to create an account ?</span> <Link to="/sign-up">Sign up</Link>
            </div>
          </div>
            
        </div>
      </div>
      
    </div>
  )
}

export default sign_up