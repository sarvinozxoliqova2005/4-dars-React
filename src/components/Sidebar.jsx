
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();
  function logout () {
    localStorage.removeItem("auth");
    navigate("/")
  }
  return (

   <>
       <div>
         <ul className='flex flex-col gap-5 h-screen shadow-xl max-w-[350px] w-full fixed top-0 left-0 p-5 z-10 pt-10'>
        <li className='flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-[15px] cursor-pointer font-bold'>
            <img className='w-7 rounded-full' src="https://p7.hiclipart.com/preview/265/858/472/computer-icons-teacher-professor-education-lecturer-teacher.jpg" alt="" />
            <NavLink className={"w-full h-full inline-block cursor-pointer"} to="/teachers">Teachers</NavLink>
        </li>
        <li className='flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-[15px] cursor-pointer font-bold'>
            <img className='w-7' src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/education-24.png" alt="" />
            <NavLink className={"w-full h-full inline-block cursor-pointer"} to="/students">Students</NavLink>
        </li>

    <li className='flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-[15px] cursor-pointer font-bold'>
     <img className='w-7' src="https://www.svgrepo.com/show/506720/logout.svg" alt="Logout" />
     <button 
     onClick={logout} 
     className="w-full h-full inline-block cursor-pointer text-left" >
     Logout
   </button>
</li>

    </ul>
       </div>
    </>
  )
}

export default Sidebar
