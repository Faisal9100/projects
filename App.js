import "./App.css";
import About from "./About/About";
import Navbar from "./navbar/Navbar";
import Testimonial from "./Testimonial/Testimonial";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Service from "./Service/Service";
function App() {
  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <About></About>
    <Service></Service>
    <Experience></Experience>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>
    </>
  );
}

export default App;
