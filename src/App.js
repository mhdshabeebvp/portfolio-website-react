import "./App.css";
import Experience from "./Component/Experience/Experience";
import Intro from "./Component/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
import Services from "./Component/Services/Services";
import Testmonial from "./Component/Testmonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Testmonial />
    </div>
  );
}
export default App;
