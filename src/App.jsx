import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Contact from "./Routes/Contact";
import LoginRoute from "./Routes/LoginRoute";
import Home from "./Routes/Home";
import AddSeminarRoute from "./Routes/AddSeminarRoute";
import AdminPage from "./Routes/AdminPage";
import TestRoute from "./Routes/TestRoute"
import SidebarUsers from "./components/admin/sidebar/SidebarUsers";
import SidebarSeminars from "./components/admin/sidebar/SidebarSeminars";
import SidebarHome from "./components/admin/sidebar/SidebarHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRoute />} />
        <Route path="home" element={<Home />} />
        <Route path="add-seminar" element={<AddSeminarRoute />} />
        <Route path="test" element={<TestRoute />} />
        <Route path="admin" element={<AdminPage />}>
          <Route path="home" element={<SidebarHome />} />
          <Route path="seminars" element={<SidebarSeminars />} />
          <Route path="users" element={<SidebarUsers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
