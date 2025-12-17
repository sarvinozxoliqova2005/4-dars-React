import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const StudentsSingle = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStudent() {
      try {
        const res = await axios.get(
          `https://6921d8fe512fb4140be18e4b.mockapi.io/Students/${id}`
        );
        setStudent(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getStudent();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <img
          src="https://cdn.dribbble.com/userupload/42153336/file/original-47d79aeef2b6c2f3d94914d2ecfda559.gif"
          alt="loading"
          className="w-40 sm:w-60"
        />
      </div>
    );
  }

  return (
    <>
      {/* BACK */}
      <div className="flex items-center gap-2 px-4 pt-4">
        <img className="w-5" src="https://svgx.ru/svg/2423347.svg" alt="" />
        <Link to="/students" className="hover:underline text-sm sm:text-base">
          Back To Students
        </Link>
      </div>

      {/* MAIN */}
      <div className="flex flex-col lg:flex-row gap-6 p-4 sm:p-6 mt-6">

        {/* LEFT CARD */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 w-full lg:w-1/3 flex flex-col items-center">
          <img
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mb-4"
            src={student.avatar}
            alt={`${student.FirstName} ${student.LastName}`}
          />

          <h2 className="font-semibold text-base sm:text-lg text-center">
            {student.FirstName} {student.LastName}
          </h2>

          <p className="text-gray-500 text-sm sm:text-base mt-1">
            {student.Profession}
          </p>

          {/* INFO */}
          <div className="w-full mt-4 space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span className="font-semibold">Age:</span>
              <span className="font-semibold">{student.Age}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Rating:</span>
              <span className="font-semibold">{student.Rating}</span>
            </div>
          </div>

          {/* RATING BAR */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
            <div
              className="h-2 bg-black rounded-full transition-all"
              style={{ width: `${student.Rating}%` }}
            />
          </div>

          {/* COINS */}
          <div className="w-full mt-4">
            <div className="flex justify-between font-semibold text-sm sm:text-base">
              <span>Coins</span>
              <span>{student.Coins}</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="h-2 bg-black rounded-full transition-all"
                style={{ width: `${student.Coins}%` }}
              />
            </div>
          </div>

          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition text-sm sm:text-base">
            Edit Profile
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-xl shadow p-4 sm:p-6 w-full lg:w-2/3">
          <h3 className="font-semibold text-base sm:text-lg mb-4">
            Contact Info
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* PHONE */}
            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">📞</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">Phone</p>
                <p className="text-gray-600 text-sm">{student.Phone}</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">📧</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">Email</p>
                <p className="text-gray-600 text-sm">{student.Email}</p>
              </div>
            </div>

            {/* TELEGRAM */}
            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">📨</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">Telegram</p>
                <p className="text-gray-600 text-sm">
                  @{student.Telegram}
                </p>
              </div>
            </div>

            {/* LINKEDIN */}
            <div className="flex items-start gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl">
              <span className="text-xl">🔗</span>
              <div>
                <p className="font-semibold text-sm sm:text-base">LinkedIn</p>
                <p className="text-gray-600 text-sm">
                  {student.Linkedin}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsSingle;
