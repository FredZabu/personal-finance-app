import React from 'react'
import Dashboard_layout from './dashboard_layout'
import { PotsCard, TransactionCard, BudgetCard, BillCard } from '../../components'
import profile from "../../assets/images/avatars/daniel-carter.jpg"

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
  const users = [
    {
      profile: profile,
      name: "Asiimwe Fred",
      totalTransaction: "$750",
      date: "12/02/2024"
    },
    {
      profile: profile,
      name: "Mumbere John",
      totalTransaction: "$750",
      date: "12/02/2024"
    },
    {
      profile: profile,
      name: "Kasolo emma",
      totalTransaction: "$750",
      date: "12/02/2024"
    },
    {
      profile: profile,
      name: "Aculera Ronnie",
      totalTransaction: "$750",
      date: "12/02/2024"
    },
    {
      profile: profile,
      name: "Basemera Sharon",
      totalTransaction: "$750",
      date: "12/02/2024"
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
              <div className='mt-2.5'>
                <TransactionCard data = {users}  />
              </div>
            </div>
            <div className=' w-[39%]'>
              <BudgetCard />
              <div className='mt-2.5'>
                <BillCard data = {users}  />
              </div>              
            </div>
          </div>
        </div>
    </Dashboard_layout>
  )
}

export default Overview