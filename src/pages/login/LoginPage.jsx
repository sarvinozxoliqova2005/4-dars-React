import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; 

const LoginPage = ({ setIsAuth }) => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
  e.preventDefault();

  if (phone === "+998931011105" && password === "sarvinoz_05") {
    localStorage.setItem("auth", true);
    setIsAuth(true);
    toast.success("You have successfully logged in!");
    setTimeout(() => navigate("/teachers")); 
  } else {
    toast.error("Incorrect phone number or password");
  }
};


  return (
    <div className="relative h-screen">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-stunning-red-and-blue-smoke-images-for-download-image_16191211.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex items-center justify-center h-full">
        <form onSubmit={login} className="max-w-[600px] w-full p-8 rounded-xl shadow-xl bg-white/30 backdrop-blur-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign In</h2>

          <label htmlFor="phone-input" className="block mb-2 text-xl text-white font-bold">
            Phone number
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            id="phone-input"
            className="w-full border-2 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg font-bold"
            placeholder="123-456-7890"
            required
          />

          <label htmlFor="password" className="block mt-4 mb-2 text-xl text-white font-bold">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="w-full border-2 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-lg font-bold"
            required
          />

          <div className="flex items-center mt-4 text-white">
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms" className="ml-2 text-sm font-bold">
              I accept terms
            </label>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-black text-white py-2 rounded-lg font-bold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
