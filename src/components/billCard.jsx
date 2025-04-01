import React from 'react'
import { Link } from 'react-router-dom'
function BillCard({data}) {
  return (
    <div className='bg-white rounded-md p-[2%] mt-5'>
      <div className='flex justify-between '>
        <h1 className='font-h2'>Recurring Bills</h1>
        <Link className='font-p text-sm'>See Details</Link>
      </div>
      <div>
        {
            data.map(({name, totalTransaction},index)=>{
                return (
                    <div key={index} className='flex justify-between rounded-md overflow-hidden mt-2 bg-main'>

                        <div className='rounded-2xl border-2 border-[#277c78] '></div>
                        <div className='ml-4 flex justify-between  items-center flex-[1] pt-4 pb-4'>
                            <p className='font-p text-[13px]'>{name}</p>
                            <p className='font-h2 text-sm'>{totalTransaction}</p>
                        </div>

                    </div>
                )
            })
        }
      </div>
          
    </div>
  )
}

export default BillCard