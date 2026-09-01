import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Projects from "./portfolio/Projects";
const App = () => {
  return (
    <BrowserRouter>
     <Navbar/>
      <div className="w-full min-h-screen">
       
        <Routes>
      
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;