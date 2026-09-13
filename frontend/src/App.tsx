import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar";
import Projects from "./portfolio/Projects";
import Footer from "./Components/Footer";
import WhatsAppFloat from "./Components/WhatsApp";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { AnimatePresence } from "framer-motion";
import Services from "./Services/Services";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <WhatsAppFloat />
      <Footer />
    </BrowserRouter>
  );
};

export default App;