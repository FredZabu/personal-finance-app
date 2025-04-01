import React from 'react'
import { Link } from 'react-router-dom'
function TransactionCard({data}) {
  return (
    <div className='bg-white rounded-md p-[2%] mt-5'>
      <div className='flex justify-between '>
        <h1 className='font-h2'>Transactions</h1>
        <Link className='font-p text-sm'>View All</Link>
      </div>
      <div>
        {
            data.map(({profile, name, totalTransaction, date},index)=>{
                return (
                    <div key={index} className='flex justify-between border-b-1 border-[#f2f2f2] pt-2 pb-2 mt-2'>
                        <div className='flex items-center'>
                            <img className='w-[40px] rounded-full'  src={profile} alt={profile} srcset="" />
                            <p className='ml-2 font-h2 text-[13px]'>{ name}</p>
                        </div>
                        <div>
                            <p className={`font-h2 text-sm  ${index%2 == 0 ? "text-[#277c78]":""}`}>{ `${index%2 == 0 ? "+":"-"} ${totalTransaction}`}</p>
                            <p className='mt-[2px] font-p text-[12px]'>{date}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
          
    </div>
  )
}

export default TransactionCard