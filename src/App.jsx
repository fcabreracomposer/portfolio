import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './pages/Projects';

const App = () => {
  return (
    <div className="App" id="home">
      <header>
        <Header />
      </header>
      <main id="index">
        <Hero />
        <Projects id="projects" />
        <About  />
      </main>
    </div>
  );
};

export default App;
