
import AboutEng from "../portfolio/AboutEng";
import Projects from "../portfolio/Projects";
import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
   <div >
      <Navbar />
      <Hero/>
      <AboutEng/>
      <Projects/>
    </div>
  );
};

export default Home;