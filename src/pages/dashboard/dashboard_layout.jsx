import React from 'react'
import { SideNav } from '../../components'
function Dashboard_layout({title,children}) {
  return (
    <div className='w-[100vw] h-[100vh] flex '>
      <div className='w-[15%] h-[100%] bg-[#201f24] rounded-br-2xl rounded-tr-2xl'>
        <SideNav />           
      </div>
      <div className='w-[85%] p-[2%] border-2 border-red-800'>
        <div className='border-2 border-yellow-500 w-full h-full'>
          <div>
            <h1 className='font-h2 text-2xl'>{ title }</h1>
          </div>
          <div className='mt-[2%] h-full border-2 border-green-900'>
            {children}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Dashboard_layout