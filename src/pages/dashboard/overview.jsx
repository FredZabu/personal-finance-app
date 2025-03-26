import React from 'react'
import Dashboard_layout from './dashboard_layout'
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
        <div className='border-2 h-[100%]'>
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
          <div className='border-2 h-[100%] mt-2.5'>
            <div >
              <h1>hell</h1>
            </div>
            <div>
              
            </div>
          </div>
        </div>
    </Dashboard_layout>
  )
}

export default Overview