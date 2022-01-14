import NavegationBar from './components/navegacion/NavegationBar';
import Hero from './components/paginas/Hero.js';
import About from './components/paginas/About.js';
import Diseños from './components/paginas/Diseños.js';
import Contact from './components/paginas/Contact.js';
import NavBarInferior from './components/paginas/NavBarInferior.js';

function App() {
  return (
  <>
    <NavegationBar/>
    <Hero/>
    <About/>
    <Diseños/>
    <Contact/>
    <NavBarInferior/>
  </>
    
  );
}

export default App;
