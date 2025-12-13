import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Studentsni olish
  useEffect(() => {
    async function getAllStudents() {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://6921d8fe512fb4140be18e4b.mockapi.io/Students`
        );
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getAllStudents();
  }, []);

  // Yoshi kichiklar
  const filteredStudents = students.filter(s => s.Age < 18);

  
  // Loading ko'rsatish
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <img
          src="https://cdn.dribbble.com/userupload/42153336/file/original-47d79aeef2b6c2f3d94914d2ecfda559.gif"
          alt="loading"
          className="w-60 h-60 object-contain"
        />
      </div>
    );
  }

  return (
    <div>
      {/* Search */}
      <form className="max-w-md mb-5">
        <label htmlFor="search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-3 ps-9 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            placeholder="Search"
            required
          />
        </div>
      </form>

      {/* Students grid */}
      <div className="grid grid-cols-4 gap-5 p-5 container mx-auto">
        {filteredStudents.map((el) => (
          <div key={el.id} className="max-w-[400px] w-full rounded-lg border-2 border-white shadow p-5 hover:scale-105 duration-500 cursor-pointer group">
            {/* Link for student */}
            <Link to={`/students/${el.id}`}>
              <img className="w-28 h-28 mx-auto object-cover rounded-full" src={el.avatar} alt="" />
              <h1 className="text-center mt-3 font-semibold text-lg">{el.FirstName} {el.LastName}</h1>
              <p className="text-center text-sm text-gray-500 mt-1">{el.Profession}</p>
              <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600">
                <span><strong>{el.Age} Age</strong></span>
              </div>

              <div className="flex items-center gap-1 mt-2">
                <span className="text-yellow-500">⭐</span>
                <span className="font-semibold">{el.Rating || 0}</span>
              </div>

              <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                <div className="h-2 bg-black rounded-full" style={{ width: `${el.Rating}%` }}></div>
              </div>

              <div className="flex flex-col gap-1 mt-4 text-sm text-gray-600">
                <span className="hover:text-blue-500 flex items-center gap-2 cursor-pointer">
                  <img className="w-5" src="https://www.iconpacks.net/icons/1/free-phone-icon-519-thumb.png" alt="" />
                  {el.Phone}
                </span>
                <span className="hover:text-blue-500 flex items-center gap-2 mt-2 pr-5 break-all cursor-pointer">
                  <img className="w-5" src="https://www.iconpacks.net/icons/2/free-mail-icon-2552-thumb.png" alt="" />
                  {el.Email}
                </span>
                <span className="hover:text-blue-500 flex items-center gap-2 mt-2 cursor-pointer">
                  <img className="w-7" src="https://images.icon-icons.com/2201/PNG/512/telegram_logo_circle_icon_134012.png" alt="" />
                  @{el.Telegram}
                </span>
                <span className="hover:text-blue-500 flex items-center cursor-pointer">
                  <img className="w-10" src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151299455.jpg" alt="" />
                  LinkedIn
                </span>
              </div>
            </Link>

            
            <div className="flex justify-center gap-4 mt-4 opacity-0 translate-y-4
                                     group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                       <Link to={`/students/${el.id}`} className='text-blue-600 border border-blue-500 rounded-md px-3'>
                         Edit
                       </Link>
                       <button
                         onClick={(e) => {
                           e.stopPropagation();
                         }}
                         className="text-red-600 border border-red-500 rounded-md px-3"
                       >
                         Delete
                       </button>
                     </div>
                   </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
