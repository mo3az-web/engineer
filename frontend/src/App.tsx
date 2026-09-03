import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Home/Navbar";
import Projects from "./portfolio/Projects";
import Footer from "./Components/Footer";
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
      <Footer/>
    </BrowserRouter>
  );
};

export default App;