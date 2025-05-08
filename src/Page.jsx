import Header from './sections/Header'
import BackToTopButton from './components/BackToTopButton'
import bgImage from "./assets/bg 2.jpg";



export default function Page() {
    return (
        <div className="relative w-full min-h-screen bg-gradient-to-tr from-black to-gray-900 text-white">
        {/* Content */}
            <div className="relative z-10">
                <Header />
                <div className="max-w-7xl mx-auto p-6">
                <h1 className="text-3xl font-bold">Welcome</h1>
                <p className="mt-4">Your content goes here...</p>
                </div>
                <BackToTopButton />
            </div>
        </div>
    );
  }