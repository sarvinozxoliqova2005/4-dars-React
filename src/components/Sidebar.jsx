import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { RiMenuFold3Fill } from 'react-icons/ri';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

  return (
    <aside
      className={`h-screen shadow-xl fixed top-0 left-0 z-10 flex flex-col duration-500
        ${sidebarOpen ? "w-[350px] px-10" : "w-[100px] px-4"}`}
    >
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute top-3 right-2 z-50 p-2 bg-white rounded-full shadow cursor-pointer"
      >
        {sidebarOpen ? <RiMenuFold3Fill className="text-2xl" /> : <AiOutlineMenuUnfold className="text-2xl" />}
      </button>

      <ul className="flex flex-col gap-5 mt-15">
        <li
          className={`flex items-center ${
            sidebarOpen ? "justify-start gap-2" : "justify-center"
          } p-4 rounded-lg border border-black font-bold cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white hover:border-none`}
        >
          <img
            className="w-7 rounded-full"
            src="https://p7.hiclipart.com/preview/265/858/472/computer-icons-teacher-professor-education-lecturer-teacher.jpg"
            alt="Teachers"
          />
          <NavLink to="/teachers" className="flex-1">
            <span className={`${sidebarOpen ? "" : "hidden"} link-text`}>Teachers</span>
          </NavLink>
        </li>

        <li
          className={`flex items-center ${sidebarOpen ? "justify-start gap-2" : "justify-center"} p-4 rounded-lg border border-black font-bold cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white hover:border-none`}
        >
          <img
            className="w-7"
            src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/education-24.png"
            alt="Students"
          />
          <NavLink to="/students" className="flex-1">
            <span className={`${sidebarOpen ? "" : "hidden"} link-text`}>Students</span>
          </NavLink>
        </li>

        <li
          className={`flex items-center ${sidebarOpen ? "justify-start gap-2" : "justify-center"} p-4 rounded-lg border border-black font-bold cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-600 hover:text-white hover:border-none`}
        >
          <img
            className="w-7"
            src="https://www.svgrepo.com/show/506720/logout.svg"
            alt="Logout"
          />
          <button onClick={logout} className="flex-1 text-left">
            <span className={`${sidebarOpen ? "" : "hidden"} link-text`}>Logout</span>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
