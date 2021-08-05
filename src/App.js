import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
// import Footer from "./components/footer/Footer";
import Skills from "./components/skills/Skills";

function App() {
  // to make our menu dynamic action  we use hook useState.
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Topbar 
    menuOpen={menuOpen}
    setMenuOpen={setMenuOpen}  
    />
    <Menu 
      menuOpen={menuOpen}
    setMenuOpen={setMenuOpen}
    />
    <div className="sections">
      <Intro />
      <Portfolio/>
      <Work/>
      {/* <Testimonials/> */}
      <Skills/>
      <Contact/>
      {/* <Footer/> */}
    </div>
    </div>
  );
}

export default App;
