import './App.css'
import Page from './Page'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

function App() {

  return (
    // <Page />


        <div className="font-sans text-gray-800 bg-white min-h-screen">
          {/* Header */}
          <Header />
    
          {/* Hero Section */}
          <Hero />
    
          {/* About Section */}
          <About />
    
          {/* Skills Section */}
          <Skills />
    
          {/* Projects Section */}
          <section id="projects" className="max-w-6xl mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6">📂 Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">🍕 Food Delivery App</h3>
                <p className="mb-2">Built with React, Tailwind CSS, and Firebase. Includes cart functionality, authentication, and live order tracking.</p>
                <a href="#" className="text-blue-500 underline">View Project</a>
              </div>
              <div className="border p-4 rounded-xl shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">🏠 Real Estate Website</h3>
                <p className="mb-2">Next.js and Tailwind-powered platform showcasing property listings with filters, search, and contact forms.</p>
                <a href="#" className="text-blue-500 underline">View Project</a>
              </div>
            </div>
          </section>
    
          {/* Contact Section */}
          <section id="contact" className="bg-blue-100 py-16 px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">📬 Contact Me</h2>
            <p className="text-lg mb-4">Feel free to reach out via email or check out my socials!</p>
            <p className="text-lg">📧 john.doe@example.com</p>
            <p className="text-lg">🔗 <a href="https://github.com/johndoe" className="underline text-blue-600">GitHub</a> | <a href="https://linkedin.com/in/johndoe" className="underline text-blue-600">LinkedIn</a></p>
          </section>
    
          {/* Footer */}
          <footer className="text-center py-6 text-sm bg-gray-200">
            © 2025 John Doe. Made with ❤️ using React & Tailwind CSS.
          </footer>
        </div>
  )
}

export default App
