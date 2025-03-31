import React from 'react'
import { Link } from 'react-router-dom'
function PotsCard() {
  return (
    <div className='bg-white rounded-md p-[2%]'>
      <div className='flex justify-between '>
        <h1 className='font-h2'>Pots</h1>
        <Link className='font-p text-sm'>See Details </Link>
      </div>
      <div className='flex mt-2 justify-between'>
        <div className='flex items-center bg-main p-[2%] rounded-md flex-[2]'>
            <p>Icon</p>
            <div className="ml-4">
                <p className='font-p text-sm'>Total Saved</p>
                <p className='font-logo text-2xl mt-2'>$850</p>
            </div>
        </div>
        <div className=' flex-[1] ml-4'>
            <div className=' flex'>
                <div className='rounded-2xl border-2 border-[#277c78] '></div>
                <div className='ml-4'>
                    <p className='font-p text-sm'>Savings</p>
                    <p className='font-h2'>$150</p>
                </div>
            </div>
            <div className=' flex mt-2'>
                <div className='rounded-2xl border-2 border-[#291f24] '></div>
                <div className='ml-4'>
                    <p className='font-p text-sm'>Concert Ticket</p>
                    <p className='font-h2'>$50</p>
                </div>
            </div>
        </div>
        <div className='flex-[1] ml-4'>
            <div className=' flex'>
                <div className='rounded-2xl border-2 border-[#82c9d7] '></div>
                <div className='ml-4'>
                    <p className='font-p text-sm'>Gift</p>
                    <p className='font-h2'>$40</p>
                </div>
            </div>
            <div className=' flex mt-2'>
                <div className='rounded-2xl border-2 border-[#f2cdac] '></div>
                <div className='ml-4'>
                    <p className='font-p text-sm'>New Laptop</p>
                    <p className='font-h2'>$10</p>
                </div>
            </div>
        </div>        
      </div>     
    </div>
  )
}

export default PotsCard