import "./App.css";
import Intro from "./Component/Intro/Intro";
// import Services from "./Component/Services/Services";
// import { themeContext } from "./Context";
// import { useContext } from "react";
import { Skills } from "./Component/Skills/Skills";
import { Projects } from "./Component/Project/Projects";
import Contact from "./Component/Contact/Contact";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
// import ParallaxSections from "./Component/Blogs/Blogs";
import BlogSection from "./Component/article/Article";
import Certificates from "./Component/Certificates/Certificates";
// import { Router } from "react-bootstrap-icons";


function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      // style section when it turn ON DarkMode
      // style={{
      //   background: darkMode ? "black" : "",
      //   color: darkMode ? "white" : "",
      // }}
    >
      <Header />
      <Intro />
      {/* <Services /> */}
      <Skills />
      <Projects />
      {/* <ParallaxSections /> */}
      <Certificates />
      <BlogSection />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
