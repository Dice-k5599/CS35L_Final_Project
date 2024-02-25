import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/Pages/About.js";
import LoginForm from './Components/Pages/login.js';
import Temp from './Components/Pages/Temp.js';

function App() {


  return (
    <div className = "App">
      <Router>
          <Routes>
            {/* rount for each page */}
            <Route path="/" element={<LoginForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/temp" element={<Temp />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
