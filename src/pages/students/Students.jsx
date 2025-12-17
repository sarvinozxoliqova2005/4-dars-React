import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const [avatar, setAvatar] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Profession, setProfession] = useState("");
  const [Age, setAge] = useState("");
  const [Rating, setRating] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Telegram, setTelegram] = useState("");
  const [Linkedin, setLinkedin] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [selected, setSelected] = useState(null);



  useEffect(() => {
    async function getTeachers() {
      try {
        const res = await axios.get("https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers");
        setTeachers(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTeachers();
  }, []);

  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://6921d8fe512fb4140be18e4b.mockapi.io/Students");
      setStudents(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSelected(null);
    setAvatar("");
    setFirstName("");
    setLastName("");
    setProfession("");
    setAge("");
    setRating("");
    setPhone("");
    setEmail("");
    setTelegram("");
    setLinkedin("");
    setTeacherId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const studentData = {
      avatar,
      FirstName,
      LastName,
      Profession,
      Age,
      Rating,
      Phone,
      Email,
      Telegram,
      Linkedin,
      teacherId
    };

    try {
      if (selected) {
        await axios.put(`https://6921d8fe512fb4140be18e4b.mockapi.io/Students/${selected.id}`, studentData);
        toast.success("Student updated successfully!");
      } else {
        await axios.post("https://6921d8fe512fb4140be18e4b.mockapi.io/Students", studentData);
        toast.success("Student added successfully!");
      }
      resetForm();
      setOpenModal(false);
      getAllStudents();
    } catch (error) {
      console.log(error);
    }
  };

  const edit = async (id) => {
    try {
      const res = await axios.get(`https://6921d8fe512fb4140be18e4b.mockapi.io/Students/${id}`);
      setSelected(res.data);
      setAvatar(res.data.avatar);
      setFirstName(res.data.FirstName);
      setLastName(res.data.LastName);
      setProfession(res.data.Profession);
      setAge(res.data.Age);
      setRating(res.data.Rating);
      setPhone(res.data.Phone);
      setEmail(res.data.Email);
      setTelegram(res.data.Telegram);
      setLinkedin(res.data.Linkedin);
      setTeacherId(res.data.teacherId);
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

students.filter(s => s.Age <= 18);

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
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between px-4">
        <form className="w-full sm:max-w-lg">
          <label htmlFor="search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input type="search" id="search" className="block w-full p-3 ps-9 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" placeholder="Search Students..." required />
          </div>
        </form>

        <button  onClick={() => { resetForm(); setOpenModal(true); }} className="bg-blue-500 text-white text-lg w-full sm:max-w-[200px] h-[50px] px-3 rounded-xl font-bold">
          + Add Students
      </button>

      </div>

      {openModal && (
        <div onClick={() => { setOpenModal(false); resetForm(); }} className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/80">
          <div className="bg-white rounded-xl w-full max-w-[600px] p-6 relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl text-[blue] font-bold text-center py-4">{selected ? "Edit Student" : "Add Students"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input value={avatar} onChange={(e) => setAvatar(e.target.value)} required type="url" placeholder="Avatar" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
              <div className='flex items-center gap-3'>
                <input value={FirstName} onChange={(e) => setFirstName(e.target.value)} required type="text" placeholder="First Name" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
                <input value={LastName} onChange={(e) => setLastName(e.target.value)} required type="text" placeholder="Last Name" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
              </div>
              <input value={Profession} onChange={(e) => setProfession(e.target.value)} required type="text" placeholder="Profession" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
              <input value={Age} onChange={(e) => setAge(e.target.value)} required type="number" placeholder="Age" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
              <input value={Rating} onChange={(e) => setRating(e.target.value)} required type="number" placeholder="Rating" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
              <div className='flex items-center gap-3'>
                <input value={Phone} onChange={(e) => setPhone(e.target.value)} required type="text" placeholder="Phone number" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
                <input value={Email} onChange={(e) => setEmail(e.target.value)} required type="email" placeholder="Email" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
              </div>
              <div className='flex items-center gap-3'>
                <input value={Telegram} onChange={(e) => setTelegram(e.target.value)} required type="text" placeholder="Telegram" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
                <input value={Linkedin} onChange={(e) => setLinkedin(e.target.value)} required type="text" placeholder="Linkedin" className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl" />
              </div>
              <select value={teacherId} onChange={(e) => setTeacherId(e.target.value)} className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl">
                <option value="">All Teachers</option>
                {teachers.map((el) => <option key={el.id} value={el.id}>{el.FirstName}</option>)}
              </select>

              <div className="flex justify-end gap-3 pt-3">
                <button onClick={() => { setOpenModal(false); resetForm(); }} type="button" className="px-4 py-2 border-2 font-bold text-[red] rounded-xl cursor-pointer">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold max-w-[100px] w-full cursor-pointer">{selected ? "Edit" : "+ Add"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-5  p-4 ">
        {students.map((el) => (
          <div key={el.id} className="w-full rounded-lg border-2 border-white
           shadow-xl p-5 hover:scale-105 duration-300">
            <Link to={`/students/${el.id}`}>
              <img className="w-28 h-28 mx-auto object-cover rounded-full" src={el.avatar} alt="" />
              <h1 className="text-center mt-3 font-semibold text-lg">{el.FirstName} {el.LastName}</h1>
              <p className="text-center text-sm text-gray-500 mt-1">{el.Profession}</p>
              <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600"><span><strong>{el.Age} Age</strong></span></div>
              <div className="flex items-center gap-1 mt-2"><span className="text-yellow-500">⭐</span><span className="font-semibold">{el.Rating || 0}</span></div>
              <div className="w-full bg-gray-300 rounded-full h-2 mt-2"><div className="h-2 bg-black rounded-full" style={{ width: `${el.Rating}%` }}></div></div>
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
                 {el.Linkedin}
                </span>
              </div>
            </Link>

           <div className="flex justify-center gap-4 mt-4 transition-all duration-300">
  <button
    onClick={() => edit(el.id)}
    className="text-blue-600 border border-blue-500 cursor-pointer rounded-md px-3"
  >
    Edit
  </button>
  <button
    className="text-red-600 border border-red-500 cursor-pointer rounded-md px-3"
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

