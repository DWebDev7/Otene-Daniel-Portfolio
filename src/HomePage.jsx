import { useEffect } from 'react';

const sections = [
  { id: 'hero', title: 'Services' },
  { id: 'work', title: 'Work' },
  { id: 'results', title: 'Results' },
  { id: 'testimonials', title: 'Testimonials' },
  { id: 'faq', title: 'FAQ' },
  { id: 'call', title: 'Book a call' }
];

const reveal =
  'section px-6 translate-y-12 opacity-0 transition-all duration-1000 [&.slide-in]:translate-y-0 [&.slide-in]:opacity-100';
const h2 = 'text-3xl font-bold text-[#16121f] md:text-4xl';
const card = 'rounded-2xl border border-[#e3deee] bg-white p-6 shadow-sm';
const field =
  'w-full rounded-lg border border-[#e0dbeb] bg-white px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20';
const button =
  'rounded-full bg-purple-600 px-7 py-3 font-semibold text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-700';

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
    <div className="font-sans text-neutral-800">
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between border-b border-[#e3deee] bg-white/80 px-6 py-4 text-sm backdrop-blur-xl">
        <div className="text-xl font-bold tracking-tight text-[#16121f]">DWebDev</div>
        <ul className="hidden space-x-8 font-medium text-neutral-600 md:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="transition hover:text-purple-600">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main className="mx-auto max-w-7xl space-y-28 pt-32 md:space-y-36">
        <section id="hero" className={`${reveal} text-center`}>
          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] text-[#16121f] md:text-7xl">
            More leads from your <br className="hidden md:inline" /> website, guaranteed.
          </h1>
          <p className="mb-8 text-lg text-neutral-600 md:text-xl">custom web design and development for your business</p>
          <button className={button}>Book a free call</button>
        </section>

        <section id="importance" className={reveal}>
          <h2 className={`${h2} mb-4`}>You know a website is important...</h2>
          <p className="max-w-2xl text-lg text-neutral-600">But it’s easy to push aside until you miss out on clients because of it.</p>
        </section>

        <section id="choose" className={reveal}>
          <h2 className={`${h2} mb-10 text-center`}>So why should I choose you?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className={card}>
              <h3 className="mb-2 text-xl font-semibold text-[#16121f]">🏠 No BS</h3>
              <p className="text-neutral-600">No fluff, no templates. Just effective, proven website strategies tailored to your business.</p>
            </div>
            <div className={card}>
              <h3 className="mb-2 text-xl font-semibold text-[#16121f]">📈 Result driven</h3>
              <p className="text-neutral-600">We design for your audience and optimize for real conversions. It's all about ROI.</p>
            </div>
            <div className={card}>
              <h3 className="mb-2 text-xl font-semibold text-[#16121f]">🖊 3 revisions</h3>
              <p className="text-neutral-600">You get 3 rounds of revisions to make sure the website works for you.</p>
            </div>
          </div>
        </section>

        <section id="services" className={reveal}>
          <h2 className={`${h2} mb-10 text-center`}>Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className={card}>
              <h3 className="mb-2 text-lg font-bold text-[#16121f]">Custom web-design</h3>
              <p className="text-neutral-600">A tailored site that’s custom designed to specifically suit your business needs.</p>
            </div>
            <div className={card}>
              <h3 className="mb-2 text-lg font-bold text-[#16121f]">3D-design</h3>
              <p className="text-neutral-600">We use 3D skills and assets to add flair to your site.</p>
            </div>
            <div className={card}>
              <h3 className="mb-2 text-lg font-bold text-[#16121f]">Reservation systems & automation</h3>
              <p className="text-neutral-600">We add features like calendars, services to reduce admin workload.</p>
            </div>
            <div className={card}>
              <h3 className="mb-2 text-lg font-bold text-[#16121f]">SEO Optimization</h3>
              <p className="text-neutral-600">Making sure people searching can find your business online through better Google visibility.</p>
            </div>
          </div>
        </section>

        <section id="work" className={reveal}>
          <h2 className={`${h2} mb-10 text-center`}>Recent work</h2>
          <p className="text-center text-neutral-600">[Add portfolio thumbnails or mockups here]</p>
        </section>

        <section id="results" className={reveal}>
          <h2 className={`${h2} mb-10 text-center`}>Results</h2>
          <p className="mx-auto max-w-2xl text-center text-lg text-neutral-700">
            Made 3500+ new reservations for client from his website in the first day of running it. Already paying off his fees for the next few months.
          </p>
        </section>

        <section id="faq" className={reveal}>
          <h2 className={`${h2} mb-10 text-center`}>FAQ</h2>
          <ul className="mx-auto max-w-2xl space-y-4 text-lg text-neutral-700">
            <li>• How fast will my new website be?</li>
            <li>• Will my website work on mobile and other devices?</li>
            <li>• How long will it take to build my website?</li>
            <li>• How much will a new website cost?</li>
            <li>• Can you help me with SEO?</li>
            <li>• What if I don’t have all the content ready?</li>
          </ul>
        </section>

        <section id="testimonials" className={reveal}>
          <h2 className={`${h2} mb-10 text-center`}>What our clients say</h2>
          <p className="text-center text-neutral-600">[Client testimonials here – you can format using cards]</p>
        </section>

        <section id="call" className={reveal}>
          <h2 className={`${h2} mb-8 text-center`}>Book a free call!</h2>
          <form className="mx-auto grid max-w-xl gap-4">
            <input className={field} placeholder="Full name" />
            <input className={field} placeholder="Email address" />
            <input className={field} placeholder="Business website (optional)" />
            <textarea className={field} rows="4" placeholder="Anything you want me to know?"></textarea>
            <button type="submit" className={`${button} rounded-lg`}>Submit</button>
          </form>
        </section>

        <footer className="mt-32 bg-[#16121f] px-6 py-6 text-sm text-[#a9a3ba]">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>DwebDev © 2024. All Rights Reserved.</div>
            <ul className="flex flex-wrap gap-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="transition hover:text-white">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </main>
    </div>
  );
}