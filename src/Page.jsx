import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import MobileMenu from './components/MobileMenu'



export default function Page() {
    return (
    <>
        <div className="font-sans text-gray-800 bg-white min-h-screen">
            {/* Header */}
            <Header />

            <MobileMenu />

            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Skills Section */}
            <Skills />

            {/* Projects Section */}
            <Projects />


            {/* Contact Section */}
            <Contact />

            {/* Footer */}
            <Footer />
        </div>
    </>
    );
  }