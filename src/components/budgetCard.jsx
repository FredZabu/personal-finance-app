import React from 'react'
import { Link } from 'react-router-dom'
function BudgetCard() {
  return (
    <div className='bg-white rounded-md p-[2%] '>
      <div className='flex justify-between '>
        <h1 className='font-h2'>Budget</h1>
        <Link className='font-p text-sm'>View All</Link>
      </div>  
      <div className='w-full h-[200px] mt-2'></div>        
    </div>
  )
}

export default BudgetCard