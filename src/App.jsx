import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teachers from "./pages/teachers/Teachers";
import Students from "./pages/students/Students";
import Layout from "./components/Layout";
import TeachersSingle from "./pages/Single/TeachersSingle";
import StudentsSingle from "./pages/StudentsSingle/StudentsSingle";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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
