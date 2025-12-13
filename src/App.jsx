import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Layout from "./components/Layout";
import TeachersSingle from "./pages/Single/TeachersSingle";
import StudentsSingle from "./pages/StudentsSingle/StudentsSingle";
import LoginPage from "./pages/login/LoginPage";
import { useState } from "react";

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("auth"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuth={setIsAuth} />} />
        <Route element={(localStorage.getItem ("auth") || false) ? <Layout /> : <Navigate to="/" />}>
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/:id" element={<TeachersSingle />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<StudentsSingle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
