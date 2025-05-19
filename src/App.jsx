import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Intro  from './components/Intro';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import ResourceSection from './components/ResourceSection';
import BookDemo from './components/BookDemo';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen min-h-svh max-w-[100vw] bg-black text-gray-100 font-sans antialiased">
      <Navbar />
      <Hero />
      <Logos />
      <section className='container relative mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]'> 
     <Intro />
     <Features />
      </section>
      <CallToAction />
      <ResourceSection />
      <BookDemo />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
