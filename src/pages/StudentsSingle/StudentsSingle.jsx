import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const StudentsSingle = () => {
  const { id } = useParams();
  const [students, setStudent] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    async function getStudent() {
      try {
        const res = await axios.get(
          `https://6921d8fe512fb4140be18e4b.mockapi.io/Students/${id}`
        );
        setStudent(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); 
      }
    }
    getStudent();
  }, [id]);


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
    <>
      <div className='flex items-center gap-3 pl-5 pt-5'>
        <img className='w-5' src="https://svgx.ru/svg/2423347.svg" alt="" />
        <Link to="/students" className="hover:underline cursor-pointer">
          <h1>Back To Students</h1>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-6 p-6 mt-10">
        <div className="bg-white rounded-xl shadow p-6 w-full md:w-1/3 flex flex-col items-center">
          <img
            className="w-28 h-28 rounded-full object-cover mb-4"
            src={students.avatar}
            alt={`${students.FirstName} ${students.LastName}`}
          />

          <h2 className="font-semibold text-lg">
            {students.FirstName} {students.LastName}
          </h2>

          <p className="text-gray-500 mt-1">{students.Profession}</p>

          <div className="w-full mt-2 text-gray-600 text-sm flex justify-between">
            <span>Age: {students.Age}</span>
            <span>Experience: {students.Experience}</span>
          </div>

          <div className="flex justify-between w-full mt-2 text-gray-600 text-sm">
            <span>Gender: {students.Gender}</span>
            <span className="flex items-center gap-1">
              <span className="text-yellow-400">★</span> {students.Rating || 0}
            </span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div
              className="h-2 bg-black rounded-full"
              style={{ width: `${students.Rating || 0}%` }}
            ></div>
          </div>

         <div className="flex justify-between items-end w-full mt-6">
          <span>Coins</span>
          <span>{students.Coins}</span>
        </div>

       <div className="mt-2 w-full space-y-2 text-gray-700">
        <div className="h-2 bg-gray-200 rounded-full">
         <div className="h-full bg-black rounded-full" style={{ width: `${students.Coins}%` }} ></div>
       </div>
     </div>


          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Edit Profile
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-6 w-full md:w-2/3 flex flex-col gap-4">
          <h3 className="font-semibold mb-2">Contact Info</h3>

          <div className="grid grid-cols-2 gap-4">

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-blue-600 text-xl">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">{students.Phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-blue-500 text-xl">📨</span>
                <div>
                  <p className="font-semibold">Telegram</p>
                  <p className="text-gray-600">@{students.Telegram}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-green-600 text-xl">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">{students.Email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-blue-700 text-xl">🔗</span>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <p className="text-gray-600">{students.Linkedin}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsSingle;
