import "./App.css";
import Experience from "./Component/Experience/Experience";
import Footer from "./Component/footer/Footer";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Testimonial from "./Component/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
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
