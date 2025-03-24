import React from 'react'
import { useLocation } from 'react-router-dom'
import { House,ArrowDownUp,ClipboardList,Receipt,CircleDollarSign } from 'lucide-react'
function SideBar() {
    const location = useLocation();
    const sideMenu = [{
        name: "Overview",
        icon: <House size={16} />,
        path: "/"
    },
    {
        name: "Transactions",
        icon: <ArrowDownUp size={16}/>,
        path: "/transactions"
    },
    {
        name: "Budgets",
        icon: <ClipboardList size={16} />,
        path: "/budgets"
    },
    {
        name: "Pots",
        icon: <Receipt size={16}/>,
        path: "/pots"
    },
    {
        name: "Recurring  bills",
        icon: <CircleDollarSign size={16} />,
        path: "/recurring-bills"
    }]
  return (
    <div className=' h-full'>
        <div className='border-2 p-[10%]'>
            <h1 className="font-logo  text-white text-xl    opacity-70">finance</h1>
        </div>
        <div className=' h-full'>
            <div className='w-[80%]  '>
                {
                sideMenu.map(({name, icon , path})=>{
                    return (<div key={name} className={`flex items-center mt-2.5 pl-[10%] pt-[5%] pb-[5%]  ${location.pathname == path ? "bg-white rounded-r-lg border-l-4 border-l-[#277c78]":"text-white "}`}>
                        <span>{icon}</span>
                        <p className='text-[12px] ml-[5%]'>{name}</p>
                    </div>)
                })
            }                
            </div>

        </div> 
    </div>
  )
}

export default SideBar