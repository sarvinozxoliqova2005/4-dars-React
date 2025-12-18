import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const TeachersSingle = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTeacher() {
      try {
        const res = await axios.get(
          `https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers/${id}`
        );
        setTeacher(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getTeacher();
  }, [id]);

   if (loading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <img 
          src="https://cdn.dribbble.com/userupload/21446739/file/original-9c053cb720609e39db687f476ed998a4.gif" 
          alt="loading" 
            style={{ width: '1400px', height: '1400px' }}
          className="w-200 h-200 object-contain"
        />
      </div>
    );
  }

  return (
    <>
     
      <div className="flex items-center gap-2 px-4 pt-4">
        <img className="w-5" src="https://svgx.ru/svg/2423347.svg" alt="" />
        <Link to="/teachers" className="hover:underline text-sm sm:text-base">
          Back To Teachers
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 mt-6">
        
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 w-full lg:w-1/3 flex flex-col items-center">
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4"
            src={teacher.avatar}
            alt={`${teacher.FirstName} ${teacher.LastName}`}
          />

          <h2 className="font-semibold text-base sm:text-lg text-center">
            {teacher.FirstName} {teacher.LastName}
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-1">
            {teacher.Profession}
          </p>

          <div className="w-full mt-4 space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span className="font-semibold">Age:</span>
              <span className="font-semibold">{teacher.Age}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Experience:</span>
              <span className="font-semibold">{teacher.Experience}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Rating:</span>
              <span className="font-semibold">{teacher.Rating}</span>
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className="h-2 bg-black rounded-full transition-all"
              style={{ width: `${teacher.Rating}%` }}
            />
          </div>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition text-sm sm:text-base">
            Edit Profile
          </button>
        </div>

        <div className="bg-white rounded-xl shadow p-4 sm:p-6 w-full lg:w-2/3">
          <h3 className="font-semibold text-base sm:text-lg mb-4">
            Contact Info
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">Phone</p>
                <p className="text-gray-600 text-sm">{teacher.Phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">📧</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">Email</p>
                <p className="text-gray-600 text-sm">{teacher.Email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">📨</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">Telegram</p>
                <p className="text-gray-600 text-sm">
                  @{teacher.Telegram}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">🔗</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">LinkedIn</p>
                <p className="text-gray-600 text-sm">
                  {teacher.Linkedin}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersSingle;
