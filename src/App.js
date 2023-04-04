import "./App.css";
import Experience from "./Component/Experience/Experience";

import Intro from "./Component/Intro/Intro";
// import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
// import Testimonial from "./Component/Testimonial/Testimonial";
import { themeContext } from "./Context";
import { useContext } from "react";
import { Skills } from "./Component/Skills/Skills";
import { Projects } from "./Component/Project/Projects";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header/Header";
// import Blog from "./Component/Blog/Blog";
import Footer from "./Component/Footer/Footer";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      // style section when it turn ON DarkMode
      style={{
        background: darkMode ? "#121212" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Header />
      <Intro />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      {/* <Blog /> */}
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
