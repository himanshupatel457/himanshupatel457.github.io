
import './App.scss';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import LandingPage from './Components/LandingPage/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import Preview from './Components/Preview/Preview';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';


function App() {
  return (
    <>
      <section id='Home'>
        <Navbar />
        <LandingPage />
      </section>
      <section id='Projects'><Preview /></section>
      <Projects />
      <section id='Skills'><Skills /></section>
      <section id='About'><About /></section>
      <section id='Contact'><Contact /></section>
    </>
  );
}

export default App;
