import Hero from './components/Hero';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main>
        <Hero />
        <Projects />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
