import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TeacherCard from '../../components/TeacherCard';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [search , setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [avatar , setAvatar] = useState ("");
  const [FirstName , setFirstName] = useState (" ");
  const [LastName , setLastName] = useState ("");
  const [Profession , setProfession] = useState ("");
  const [Age , setAge] = useState ("");
  const [Rating , setRating] = useState ("");
  const [Phone , setPhone] = useState ("");
  const [Email , setEmail] = useState ("");
  const [Telegram , setTelegram] = useState ("");
  const [Linkedin , setLinkedin] = useState ("");
  const [selected , setSelected] = useState (null);
 


  useEffect(() => {
    async function getAllTeachers() {
      try {
        let res = await axios.get(`https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers?FirstName=${search}`);
        setTeachers(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false); 
      }
    }
    getAllTeachers();
  }, [search]);

 
async function deleteTeachers(id) {
  try {
    await axios.delete(
      `https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers/${id}`
    );
    setTeachers(prev => prev.filter(t => t.id !== id));

    toast.success("Teacher deleted successfully!");
  } catch (error) {
    console.log(error);
  }
}

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
};

async function addTeacher(e) {
  e.preventDefault();

  const newTeacher = {
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
  };

  try {
    let res;

    if (selected) {
      res = await axios.put(
        `https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers/${selected.id}`,
        newTeacher
      );

      setTeachers(prev =>
        prev.map(t =>
          t.id === selected.id ? res.data : t
        )
      );

      toast.success("Teacher updated successfully");
    } else {
      res = await axios.post(
        "https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers",
        newTeacher
      );

      setTeachers(prev => [...prev, res.data]);

      toast.success("Teacher added successfully");
    }

    resetForm();    
    setOpenModal(false);  
  } catch (error) {
    console.log(error);
  }
}

async function edit(id) {
  try {
    let res = await axios.get(`https://6921d8fe512fb4140be18e4b.mockapi.io/Teachers/${id}`);
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

    setOpenModal(true);         
  } catch (error) {
    console.log(error);
  }
}


teachers.filter(s => s.Age > 18);

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
    <div>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between px-4">
  <form onChange={(e) => setSearch(e.target.value)} className="w-full sm:max-w-lg">
    <label htmlFor="search" className="sr-only">Search</label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>
      </div>
      <input 
        type="search" 
        id="search" 
        className="block w-full p-3 pl-9 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-sm focus:ring-brand focus:border-brand shadow-xs placeholder:text-body" 
        placeholder="Search Teachers..." 
      />
    </div>
  </form>

<button 
    onClick={() => {setOpenModal(true) , resetForm()}} 
  className="bg-blue-500 text-white text-lg w-full sm:max-w-[200px] h-[50px] px-3 rounded-xl font-bold"
  >
    + Add Teachers
  </button>

  {
    openModal ?    
    <div onClick={()=> {
    setOpenModal(false) , 
    resetForm(),
    setSelected(null) ,  
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
    }} className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/80">
      <div 
        className="bg-white rounded-xl w-full max-w-[600px] p-6 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-xl text-[blue] font-bold text-center py-4">{selected ? "Add Edit" : " Add Teachers"}</h2>

        <form onSubmit={addTeacher} className="space-y-4">
          <input
          value={avatar}
          onChange={(e) => setAvatar (e.target.value)}
            required
            type="url"
            placeholder="Avatar"
            className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
          />
          <div className='flex items-center gap-3'>
            <input
            value={FirstName}
              onChange={(e) => setFirstName (e.target.value)}
              required
              type="text"
              placeholder="First Name"
              className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
            />
            <input
            value={LastName}
              onChange={(e) => setLastName (e.target.value)}
              required
              type="text"
              placeholder="Last Name"
              className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
            />
          </div>
          <input
          value={Profession}
            onChange={(e) => setProfession(e.target.value)}
            required
            type="text"
            placeholder="Profession"
            className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
          />
          <input
          value={Age}
          onChange={(e) => setAge(e.target.value)}
            required
            type="number"
            placeholder="Age"
            className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
          />
          <input
          value={Rating}
          onChange={(e) => setRating (e.target.value)}
            required
            type="number"
            placeholder="Rating"
            className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
          />
          <div className='flex items-center gap-3'>
            <input
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
              required
              type="text"
              placeholder="Phone number"
              className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
            />
            <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email"
              className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
            />
          </div>
          <div className='flex items-center gap-3'>
            <input
            value={Telegram}
            onChange={(e) => setTelegram(e.target.value)}
              required
              type="telegram"
              placeholder="Telegram"
              className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
            />
            <input
            value={Linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
              required
              type="text"
              placeholder="Linkedin"
              className="block w-full p-3 rounded-lg bg-neutral-secondary-medium font-bold border-2 border-default-medium text-heading text-md focus:ring-brand focus:border-brand shadow-xl"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={() => {setOpenModal(false) , resetForm()}}
              className="px-4 py-2 border-2 font-bold text-[red] rounded-xl cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-xl font-bold max-w-[100px] w-full cursor-pointer"
            >
              {selected ? "Edit" : " + Add"}
            </button>
          </div>
        </form>
      </div>
</div> : ""
  }
    </div>

     <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  gap-5  p-4 ">  
    {teachers.map((el) => (
  <TeacherCard key={el.id} {...el} edit={edit} setSelected={setSelected} setOpenModal={setOpenModal} deleteTeachers={deleteTeachers} />
))}

</div>

    </div>
  );
};

export default Teachers;
