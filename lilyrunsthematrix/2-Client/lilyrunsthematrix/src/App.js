import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Memes from './pages/Memes'
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lilyrunsthematrix currently under construction :)
        </p>
      </header>
      <div className='route-container'>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/about" element={ <About />} />
            <Route path="/contact" element={ <Contact />} />
            <Route path="/error" element={ <Error />} />
            <Route path="/memes" element={ <Memes />} />
            <Route path="/notfound" element={ <NotFound />} />
            <Route path="/projects" element={ <Projects />} />
          </Routes>
        </Router>

      </div>
    </div>
    
  );
}

export default App;
