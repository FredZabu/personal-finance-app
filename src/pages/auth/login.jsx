import React from 'react'
import authImage from "../../assets/images/illustration-authentication.svg"
function login() {
  return (
    <div className='lg:flex  w-[100vw] h-[100vh]'>
      <div className='grid place-items-center bg-black w-full h-[10%] rounded-b-xl lg:rounded-b-none lg:bg-transparent lg:block  lg:w-[35%] lg:h-[100%] lg:p-[3%]'>
        <h1 className="font-logo text-white text-center lg:hidden ">finance</h1>
        <div className='hidden lg:block relative rounded-xl  w-full h-[100%] overflow-hidden'>
          <img className='absolute  w-full h-full object-cover' src={authImage} alt="" srcset="" />
          <div className='absolute top-[2%] left-[5%] text-white text-xl'>
            <h1 className="font-logo">finance</h1>
          </div>
          <div className='w-[90%] absolute bottom-[2%] left-[5%] text-white'>
            <p className='font-h2'>Keep track of your money<br />and save for your future</p>
            <p className='text-[12px] mt-2.5'>Personal finance app puts you in control of your spending. Track transactions, set budgets, and add to savings pots easily.</p>
          </div>
        </div>

      </div>
     
        <div className='w-[100%] h-[100%] lg:w-[65%] grid place-items-center'>
            <div className='bg-white w-[50%] h-[50%]'>
                <h1>login</h1>
            </div>
        </div>
    </div>
  )
}

export default login