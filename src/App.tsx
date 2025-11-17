import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesHighlight from './components/ServicesHighlight';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ServicesHighlight />
      <Testimonials />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
