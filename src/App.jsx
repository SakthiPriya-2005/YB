import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import FormPage from "./pages/FormPage.jsx";

function App() {
  const [bio, setBio] = useState({ name: 'Sakthi Priya', age: 20, email: '2315062@nec.edu.in', education: 'Bachelor of Technology' });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home bio={bio} />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage bio={bio} setBio={setBio} />} />
      </Routes>
    </Router>
  );
}

export default App;
