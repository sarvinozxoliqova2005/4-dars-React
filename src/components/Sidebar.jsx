import { AiOutlineMenuUnfold } from "react-icons/ai";
import { RiMenuFold3Fill } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => { const navigate = useNavigate();

  const Logout = () => {localStorage.removeItem("auth");  navigate("/");};

  return (
    <>
      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-20 lg:hidden" /> )}
      <aside className={`fixed top-0 left-0 z-30 h-screen bg-white shadow-xl flex flex-col duration-300 ${sidebarOpen ? "w-[350px]" : "w-[80px]"}`}  >
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="absolute top-4 right-3 bg-white p-2 rounded-full shadow z-40">
          {sidebarOpen ? ( <RiMenuFold3Fill size={22} />) : ( <AiOutlineMenuUnfold size={22} /> )}
        </button>

        <ul className="flex flex-col gap-4 mt-20 px-3">
          <NavLink to="/teachers"   className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <li className={` flex items-center p-3 rounded-xl border-2 border-[black]  font-bold ${sidebarOpen ? "gap-3 justify-start" : "justify-center"} `} >
              <img className="w-7 min-w-[28px] rounded-full" src="https://p7.hiclipart.com/preview/265/858/472/computer-icons-teacher-professor-education-lecturer-teacher.jpg" alt="" />

              <span className={`${sidebarOpen ? "block" : "hidden"} whitespace-nowrap`}> Teachers </span>
            </li>
          </NavLink>

          <NavLink to="/students"   className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
            <li className={` flex items-center p-3 rounded-xl border-2 border-[black] font-bold ${sidebarOpen ? "gap-3 justify-start" : "justify-center"}  `} >
              <img className="w-7 min-w-[28px]" src="https://icons.veryicon.com/png/o/miscellaneous/general-icon-library/education-24.png" alt=""/>

              <span className={`${sidebarOpen ? "block" : "hidden"} whitespace-nowrap`}> Students </span>
            </li>
          </NavLink>

          <li onClick={Logout} className={` flex items-center p-3 rounded-xl border font-bold cursor-pointer ${sidebarOpen ? "gap-3 justify-start" : "justify-center"} hover:bg-red-500 hover:text-white `} >
            <img className="w-7 min-w-[28px]" src="https://www.svgrepo.com/show/506720/logout.svg" alt="" />

            <span className={`${sidebarOpen ? "block" : "hidden"} whitespace-nowrap`}> Logout  </span>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
