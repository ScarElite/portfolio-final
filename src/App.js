import './App.css';

// Component imports
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Main from "./Components/Main"
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
