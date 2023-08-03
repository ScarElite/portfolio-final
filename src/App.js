import './App.css';

// Component imports
import NavBar from './Components/NavBar';
import Main from "./Components/Main"
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <main>
      <NavBar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
