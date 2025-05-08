import { useEffect } from 'react';

const sections = [
  { id: 'hero', title: 'Services' },
  { id: 'work', title: 'Work' },
  { id: 'results', title: 'Results' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'faq', title: 'FAQ' },
  { id: 'call', title: 'Book a call' }
];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section').forEach((el) => {
      el.classList.remove('slide-in');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow z-50 flex justify-between px-6 py-4 text-sm items-center">
        <div className="font-bold text-xl tracking-tight">wg</div>
        <ul className="hidden md:flex space-x-6 font-medium">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:underline">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Page Sections */}
      <main className="pt-24 space-y-28 md:space-y-36 max-w-7xl mx-auto">
        <section id="hero" className="section opacity-0 transition-opacity duration-1000 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            More leads from your <br className="hidden md:inline" /> website, guaranteed.
          </h1>
          <p className="text-gray-600 mb-6 text-lg">custom web design and development for your business</p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">Book a free call</button>
        </section>

        <section id="importance" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">You know a website is important...</h2>
          <p className="text-gray-600 text-lg max-w-2xl">But it’s easy to push aside until you miss out on clients because of it.</p>
        </section>

        <section id="choose" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">So why should I choose you?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🏠 No BS</h3>
              <p>No fluff, no templates. Just effective, proven website strategies tailored to your business.</p>
            </div>
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">📈 Result driven</h3>
              <p>We design for your audience and optimize for real conversions. It's all about ROI.</p>
            </div>
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-2">🖊 3 revisions</h3>
              <p>You get 3 rounds of revisions to make sure the website works for you.</p>
            </div>
          </div>
        </section>

        <section id="services" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="font-bold text-lg mb-2">Custom web-design</h3>
              <p>A tailored site that’s custom designed to specifically suit your business needs.</p>
            </div>
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="font-bold text-lg mb-2">3D-design</h3>
              <p>We use 3D skills and assets to add flair to your site.</p>
            </div>
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="font-bold text-lg mb-2">Reservation systems & automation</h3>
              <p>We add features like calendars, services to reduce admin workload.</p>
            </div>
            <div className="p-6 border rounded-2xl bg-white shadow-sm">
              <h3 className="font-bold text-lg mb-2">SEO Optimization</h3>
              <p>Making sure people searching can find your business online through better Google visibility.</p>
            </div>
          </div>
        </section>

        <section id="work" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Recent work</h2>
          <p className="text-gray-600 text-center">[Add portfolio thumbnails or mockups here]</p>
        </section>

        <section id="results" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Results</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Made 3500+ new reservations for client from his website in the first day of running it. Already paying off his fees for the next few months.
          </p>
        </section>

        <section id="faq" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">FAQ</h2>
          <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
            <li>• How fast will my new website be?</li>
            <li>• Will my website work on mobile and other devices?</li>
            <li>• How long will it take to build my website?</li>
            <li>• How much will a new website cost?</li>
            <li>• Can you help me with SEO?</li>
            <li>• What if I don’t have all the content ready?</li>
          </ul>
        </section>

        <section id="testimonials" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">What our clients say</h2>
          <p className="text-gray-600 text-center">[Client testimonials here – you can format using cards]</p>
        </section>

        <section id="call" className="section opacity-0 transition-opacity duration-1000 px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Book a free call!</h2>
          <form className="grid gap-4 max-w-xl mx-auto">
            <input className="border px-4 py-3 rounded" placeholder="Full name" />
            <input className="border px-4 py-3 rounded" placeholder="Email address" />
            <input className="border px-4 py-3 rounded" placeholder="Business website (optional)" />
            <textarea className="border px-4 py-3 rounded" placeholder="Anything you want me to know?"></textarea>
            <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Submit</button>
          </form>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white px-6 py-6 text-sm mt-32">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>wg © 2024. All Rights Reserved.</div>
            <ul className="flex flex-wrap gap-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </main>

      {/* CSS for animation */}
      <style jsx>{`
        .section.slide-in {
          opacity: 1 !important;
          transform: translateY(0);
        }
        .section {
          transform: translateY(50px);
        }
      `}</style>
    </div>
  );
}
