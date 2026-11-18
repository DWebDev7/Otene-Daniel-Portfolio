import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import BackToTopButton from './components/BackToTopButton'

export default function Page() {
  return (
    <>
      <BackToTopButton />
      <div className="min-h-screen bg-white font-sans text-neutral-800 selection:bg-purple-200">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}