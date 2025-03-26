import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import { House,ArrowDownUp,ClipboardList,Receipt,CircleDollarSign } from 'lucide-react'
function SideBar() {
    const location = useLocation();
    const sideMenu = [{
        name: "Overview",
        icon: <House size={18}   color={`${location.pathname == "/"? "#277c78":"#ffffff"}`} />,
        path: "/"
    },
    {
        name: "Transactions",
        icon: <ArrowDownUp size={18} color={`${location.pathname == "/transactions"? "#277c78":"#ffffff"}`}/>,
        path: "/transactions"
    },
    {
        name: "Budgets",
        icon: <ClipboardList size={18} color={`${location.pathname == "/budgets"? "#277c78":"#ffffff"}`}/>,
        path: "/budgets"
    },
    {
        name: "Pots",
        icon: <Receipt size={18} color={`${location.pathname == "/pots"? "#277c78":"#ffffff"}`}/>,
        path: "/pots"
    },
    {
        name: "Recurring  bills",
        icon: <CircleDollarSign size={18} color={`${location.pathname == "/recurring-bills"? "#277c78":"#ffffff"}`}/>,
        path: "/recurring-bills"
    }]
  return (
    <div className=' h-full'>
        <div className=' p-[10%]'>
            <h1 className="font-logo  text-white text-xl    opacity-70">finance</h1>
        </div>
        <div className=' h-full'>
            <div className='w-[80%]  '>
                {
                sideMenu.map(({name, icon , path})=>{
                    return (<Link to={path} key={name} className={`flex items-center mt-2.5 pl-[10%] pt-[5%] pb-[5%] border-l-4   ${location.pathname == path ? "bg-white rounded-r-lg  border-l-[#277c78]":"text-white border-l-transparent"}`}>
                        <span>{icon}</span>
                        <p className='text-[13px] ml-[5%]'>{name}</p>
                    </Link>)
                })
            }                
            </div>

        </div> 
    </div>
  )
}

export default SideBar