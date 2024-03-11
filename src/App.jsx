import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Contact from "./Routes/Contact";
import LoginRoute from "./Routes/LoginRoute";
import Home from "./Routes/Home";
import AddSeminarRoute from "./Routes/AddSeminarRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRoute />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-seminar" element={<AddSeminarRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
