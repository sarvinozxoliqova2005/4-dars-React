import React from 'react'
import { Link } from 'react-router-dom';

const TeacherCard = ({id , avatar , FirstName , LastName , Profession , Age , Rating , Phone , Email , Telegram , Linkedin , deleteTeachers , setOpenModal , setSelected , edit}) => {
  return (
     <div key={id} className='max-w-[400px] w-full rounded-lg border-3 border-[white] shadow p-5 group hover:scale-105 duration-500'>
            <Link to={`/teachers/${id}`}>
              <img className='w-28 h-28 mx-auto object-cover rounded-full' src={avatar} alt="" />
              <h1 className='text-center mt-3 font-semibold text-lg'>{FirstName} {LastName}</h1>
              <p className='text-center text-sm text-gray-500 mt-1'>{Profession}</p>
    
              <div className='flex justify-center gap-4 mt-2 text-sm text-gray-600'>
                <span><strong>{Age} Age</strong></span>
              </div>
    
              <div className='flex justify-center items-center mt-2'>
                <span className='text-yellow-400 mr-1'>★</span>
                <span className='text-gray-700'>{Rating}</span>
              </div>
    
              <div className='flex flex-col gap-1 mt-8 text-sm text-gray-600'>
                <span className='hover:text-blue-500 flex items-center gap-2 cursor-pointer'>
                  <img className='w-5' src="https://www.iconpacks.net/icons/1/free-phone-icon-519-thumb.png" alt="" />
                  {Phone}
                </span>
                <span className='hover:text-blue-500 flex items-center gap-2 mt-2 pr-5 break-all cursor-pointer'>
                  <img className='w-5' src="https://www.iconpacks.net/icons/2/free-mail-icon-2552-thumb.png" alt="" />
                  {Email}
                </span>
                <span className='hover:text-blue-500 flex items-center gap-2 mt-2 cursor-pointer'>
                  <img className='w-7' src="https://images.icon-icons.com/2201/PNG/512/telegram_logo_circle_icon_134012.png" alt="" />
                  @{Telegram}
                </span>
                <span className='hover:text-blue-500 flex items-center cursor-pointer'>
                  <img className='w-10' src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151299455.jpg" alt="" />
                 {Linkedin}
                </span>
              </div>
            </Link>
    
            {/* <div className="flex justify-center gap-4 mt-4 opacity-0 translate-y-4
                             group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
               <Link to={`/teachers/${id}`} className='text-blue-600 cursor-pointer border border-blue-500 rounded-md px-3'>
                <button onClick={() => setOpenModal(true)}> Edit</button>
               </Link>
               <button
                 onClick={() => {
                   deleteTeachers(id);
                 }}
                 className="text-red-600 border border-red-500 cursor-pointer rounded-md px-3"
               >
                 Delete
               </button>
             </div> */}
       <div className="flex justify-center gap-4 mt-4 ">
         <button
             onClick={() => {setOpenModal(true) , setSelected (id) , edit(id)}} className="text-blue-600 border border-blue-500 cursor-pointer rounded-md px-3">
             Edit
         </button>

        <button onClick={() => deleteTeachers(id)} className="text-red-600 border border-red-500 cursor-pointer rounded-md px-3">
          Delete
       </button>
     </div>
    </div>
  )
}

export default TeacherCard