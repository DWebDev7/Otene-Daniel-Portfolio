import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'



export default function Page() {
    return (
    <>
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
            <Projects />


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
    </>
    );
  }