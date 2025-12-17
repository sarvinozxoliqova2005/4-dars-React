import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main
        className={`flex-1 duration-500 pt-5 ${
          sidebarOpen ? "pl-[350px]" : "pl-[100px]"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
