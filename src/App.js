import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Helmet } from 'react-helmet';

// Component imports
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Main from "./Components/Main"
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

// Project Component imports
import GrapevineDetails from './Components/GrapevineDetails';
import NobleOakDetails from './Components/NobleOakDetails';
import AlternativeEndingsDetails from "./Components/AlternativeEndingsDetails";
import DeepThoughtsDetails from "./Components/DeepThoughtsDetails";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Grapevine" element={<Grapevine />} />
          <Route path="/NobleOak" element={<NobleOak />} />
          <Route path="/AlternativeEndings" element={<AlternativeEndings />} />
          <Route path="/DeepThoughts" element={<DeepThoughts />} />
        </Routes>
      </Router>
    </main>
  );
}

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Mitchell Armstrong | Portfolio</title>
        <meta name="description" content="Mitchell Armstrong's Portfolio" />
      </Helmet>
      <NavBar />
      <Home />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function Grapevine() {
  return (
    <>
      <NavBar />
      <GrapevineDetails />
    </>
  )
}

function NobleOak() {
  return (
    <>
      <NavBar />
      <NobleOakDetails />
    </>
  )
}

function AlternativeEndings() {
  return (
    <>
      <NavBar />
      <AlternativeEndingsDetails />
    </>
  )
}

function DeepThoughts() {
  return (
    <>
      <NavBar />
      <DeepThoughtsDetails />
    </>
  )
}

export default App;
