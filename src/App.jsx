import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const base = import.meta.env.BASE_URL

const games = [
  { title: "Biggie's Math Adventure", type: 'Play in browser', href: `${base}games/biggies-math-adventure/` },
  { title: 'Toaster 3', type: 'Play in browser', href: `${base}games/toaster-3/` },
  { title: 'Frost-Bite Delivery', type: 'Download for Windows', href: `${base}downloads/Frost-Bite_DeliveryBigMode2026.zip`, download: true },
  { title: 'The Shell Company', type: 'Download for Windows', href: `${base}downloads/TheShellCompanyZip.zip`, download: true },
]

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Personal website</p>
          <h1 id="hero-title">Hi, I'm Joshua Brower.</h1>
          <p className="intro">
            Welcome to my corner of the web. I'm building this space to share my work,
            projects, and a little about myself.
          </p>
          <a className="button" href="#projects">Explore projects</a>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <h2 id="about-title">About</h2>
          <p>Add a short introduction here: what you do, what interests you, and what you want visitors to know.</p>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Games</h2>
          <div className="game-grid">
            {games.map((game) => (
              <article className="card" key={game.title}>
                <h3>{game.title}</h3>
                <p>{game.download ? 'Download the ZIP, extract it, then run the game on Windows.' : 'Play directly in your browser.'}</p>
                <a className="button" href={game.href} download={game.download || undefined}>
                  {game.type}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>Add the best way for people to reach you, such as an email address or profile link.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
