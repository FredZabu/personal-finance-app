import React from 'react'
import { SideNav } from '../../components'
function Dashboard_layout({children}) {
  return (
    <div className='w-[100vw] h-[100vh] flex '>
          <div className='w-[15%] h-[100%] bg-[#201f24] rounded-br-2xl rounded-tr-2xl'>
          <SideNav />           
          </div>
          <div className='w-[85%] '>
            {children}
          </div>
    </div>
  )
}

export default Dashboard_layout