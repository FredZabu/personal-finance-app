import React from 'react'

function Dashboard_layout({children}) {
  return (
    <div className='w-[100vw] h-[100vh] flex '>
        <div className='w-[15%] bg-[#201f24] rounded-br-2xl rounded-tr-2xl'>
            <div className=' text-white text-xl opacity-70  p-[6%]'>
              <h1 className="font-logo">finance</h1>
            </div>            
        </div>
          <div className='w-[85%] '>
            {children}
        </div>
    </div>
  )
}

export default Dashboard_layout