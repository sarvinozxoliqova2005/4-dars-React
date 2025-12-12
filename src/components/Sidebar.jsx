
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (

   <>

       <div>
         <ul className='flex flex-col gap-5 h-screen shadow-xl max-w-[350px] w-full fixed top-0 left-0 p-5 z-10 pt-10'>
        <li className='flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-[15px] cursor-pointer font-bold'>
            <img className='w-7 rounded-full' src="https://p7.hiclipart.com/preview/265/858/472/computer-icons-teacher-professor-education-lecturer-teacher.jpg" alt="" />
            <NavLink className={"w-full h-full inline-block"} to="/teachers">Teachers</NavLink>
        </li>
        <li className='flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-[15px] cursor-pointer font-bold'>
            <img className='w-7' src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/education-24.png" alt="" />
            <NavLink className={"w-full h-full inline-block"} to="/students">Students</NavLink>
        </li>
    </ul>
       </div>
    </>
  )
}

export default Sidebar
