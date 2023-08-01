import './App.css';

// Component imports
import NavBar from './Components/NavBar';
import Main from "./Components/Main"
import About from './Components/About';
import Projects from './Components/Projects';

function App() {
  return (
    <main>
      <NavBar />
      <Main />
      <About />
      <Projects />
    </main>
  );
}

export default App;
