import "./App.css";
import Experience from "./Component/Experience/Experience";
import Footer from "./Component/footer/Footer";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Testimonial from "./Component/Testimonial/Testimonial";
import { themeContext } from "./Context";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      // style section when it turn ON DarkMode
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Testimonial />
      <Footer />
    </div>
  );
}
export default App;
