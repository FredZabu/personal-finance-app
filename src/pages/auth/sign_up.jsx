import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthImage } from '../../components/index.js'
import { Eye, EyeOff } from 'lucide-react'

function Sign_up() {
  const [isVisible, setIsVisible] = useState(false)
  const navigate = useNavigate();
  // handles password visibility
  const handleVisibility = () => {
    setIsVisible(!isVisible)
  }
  // handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login')
  }  
  return (
<div className='lg:flex  w-[100vw] h-[100vh]'>
      <AuthImage />
      <div className='w-[100%] h-[100%] lg:w-[65%] grid place-items-center'>
              <div className='bg-white w-[70%] md:w-[50%] rounded-lg'>
                <div className='p-[4%]'>
                  <h1 className='font-h2 capitalize text-xl text-gray-900'>Sign up</h1>
            <form action="" onSubmit={handleSubmit} className='mt-[2%]'>
                    <div>
                      <p className='text-[12px] text-gray-500'>Name</p>
                      <input className='invalid:border-1 invalid:border-red-800  border border-[#98908B] w-full p-1 rounded-md  focus:border-transparent focus:outline-1 focus:outline-sky-600 focus:invalid:outline-red-800 transition-all duration-200 ease-in-out focus:transition-all focus:duration-200 focus:ease-in-out' type="text" name="name" id="name" />
                    </div>              
                    <div className='mt-2.5'>
                      <p className='text-[12px] text-gray-500'>Email</p>
                      <input className='invalid:border-1 invalid:border-red-800  border border-[#98908B] w-full p-1 rounded-md  focus:border-transparent focus:outline-1 focus:outline-sky-600 focus:invalid:outline-red-800 transition-all duration-200 ease-in-out focus:transition-all focus:duration-200 focus:ease-in-out' type="email" name="email" id="email" />
                    </div>
                    <div className='mt-2.5'>
                      <p className='text-[12px] text-gray-500'>Password</p>
                      <div className="relative">
                        <input className={` border border-[#98908B] w-full p-1 rounded-md  focus:border-transparent focus:outline-1 focus:outline-sky-600 transition-all duration-200 ease-in-out focus:transition-all focus:duration-200 focus:ease-in-out`} type={isVisible ? "text":"password"} name="password" id="password" /> 
                        {isVisible ? <EyeOff size={18} className='icon-position cursor-pointer' onClick={handleVisibility} /> : <Eye size={18} className='icon-position cursor-pointer' onClick={handleVisibility} />}
                                               
                      </div>
                      <p className=' text-[12px] text-gray-500 text-right'>Password must be at least 8 characters</p>
                    </div>
      
                    <button type="submit" className='mt-5 text-white bg-gray-900 w-full p-2 rounded-md cursor-pointer'>Create Account</button>
                  </form>
                  <div className="mt-2.5 text-center">
                    <span className='text-[12px] text-gray-500'>Already have an account ?</span> <Link to="/login" className='ml-2 capitalize text-sm underline text-gray-900 cursor-pointer'>Login</Link>
                  </div>
                </div>
                  
              </div>
            </div>
    </div>
  )
}

export default Sign_up