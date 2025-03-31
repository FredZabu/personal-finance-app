import React from 'react'
import Dashboard_layout from './dashboard_layout'
import { PotsCard } from '../../components'

function Overview() {
  const ACCOUNT = [
    {
      name: "Current Balance",
      value: "$4,836.00"
    },
    {
      name: "Income",
      value: "$3,814.25"
    },
    {
      name: "Expenses",
      value: "$1,700.50"
    }    
  ]
  return (
    <Dashboard_layout title = "Overview">
        <div className=''>
          <div className='flex justify-between'>
          {ACCOUNT.map(({ name, value },index) => {
            return (
                <div key={name} className={`flex-[1] p-[1%] rounded-md ${index == 0 ? "bg-black text-white":" bg-white ml-[2%]"} `}>
                <p className='text-sm'>{name}</p>
                <p className={`mt-2  text-lg ${index == 0 ? "font-logo":" font-h2"}`}>{ value}</p>
                </div>
              )
            })}
          </div>
          <div className=' flex justify-between mt-5'>
            <div className=' w-[59%]'>
              <PotsCard />
            </div>
            <div className=' w-[39%]'>
              <h1>chart</h1>
              
            </div>
          </div>
        </div>
    </Dashboard_layout>
  )
}

export default Overview