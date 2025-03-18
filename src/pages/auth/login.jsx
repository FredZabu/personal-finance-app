import React from 'react'
import { AuthImage } from '../../components/index.js'
function login() {
  return (
    <div className='lg:flex  w-[100vw] h-[100vh]'>
      <AuthImage />
      <div className='w-[100%] h-[100%] lg:w-[65%] grid place-items-center'>
        <div className='bg-white w-[50%] h-[50%]'>
          <div className='p-[4%]'>
            <h1 className='font-h2 capitalize text-xl'>Sign up</h1>
          </div>
            
        </div>
      </div>
    </div>
  )
}

export default login