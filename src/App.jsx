import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills"
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <Home />
      <About/>
      <Skills/>
      <Project />
      <Education/>
      <Contact/>
      <Footer/>
      <ToastContainer/>
    </>
  )
}
export default App;