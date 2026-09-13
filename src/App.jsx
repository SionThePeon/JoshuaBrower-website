import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

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
          <h2 id="projects-title">Projects</h2>
          <div className="card">
            <h3>Your first project</h3>
            <p>Replace this placeholder with a project description and a link when you're ready.</p>
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
