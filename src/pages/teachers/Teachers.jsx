import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function getAllTeachers() {
      try {
        let res = await axios.get("https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers");
        setTeachers(res.data);
      } catch (err) {
        console.log(err);
      }finally {
        setLoading(false); 
      }
    }
    getAllTeachers();
  }, []);

  const filteredTeachers = teachers.filter(t => t.Age >= 18);

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
    <div className='grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 gap-5 p-5 container mx-auto'>
      {filteredTeachers.map((el) => (
        <Link to={`/teachers/${el.id}`} key={el.id}
          className='max-w-[400px] w-full rounded-lg border-3 border-[white] shadow p-5 hover:scale-105 duration-500 cursor-pointer group'
        >
          <img className='w-28 h-28 mx-auto object-cover rounded-full' src={el.avatar} alt="" />
          <h1 className='text-center mt-3 font-semibold text-lg'>{el.FirstName} {el.LastName}</h1>
          <p className='text-center text-sm text-gray-500 mt-1'>{el.Profession}</p>

          <div className='flex justify-center gap-4 mt-2 text-sm text-gray-600'>
            <span><strong>{el.Age} Age</strong></span>
          </div>

          <div className='flex justify-center items-center mt-2'>
            <span className='text-yellow-400 mr-1'>★</span>
            <span className='text-gray-700'>{el.Rating}</span>
          </div>

          <div className='flex flex-col gap-1 mt-8 text-sm text-gray-600'>
            <a href={el.Phone} className='hover:text-blue-500 flex items-center gap-2'>
              <img className='w-5' src="https://www.iconpacks.net/icons/1/free-phone-icon-519-thumb.png" alt="" />
              {el.Phone}
            </a>
            <a href={el.Email} className='hover:text-blue-500 flex items-center gap-2 mt-2 pr-5 break-all'>
              <img className='w-5' src="https://www.iconpacks.net/icons/2/free-mail-icon-2552-thumb.png" alt="" />
              {el.Email}
            </a>
            <a href={el.Telegram} className='hover:text-blue-500 flex items-center gap-2 mt-2'>
              <img className='w-7' src="https://images.icon-icons.com/2201/PNG/512/telegram_logo_circle_icon_134012.png" alt="" />
              @{el.Telegram}
            </a>
            <a href={el.Linkedin} className='hover:text-blue-500 flex items-center'>
              <img className='w-10' src="https://img.freepik.com/free-psd/social-media-logo-design_23-2151299455.jpg" alt="" />
              LinkedIn
            </a>
          </div>

          <div className='flex justify-center gap-4 mt-4 opacity-0 translate-y-4 
            group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300'
          >
            <button className='text-blue-600 cursor-pointer edit-btn'>Edit</button>
            <button className='text-red-600 cursor-pointer delete-btn'>Delete</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Teachers;
