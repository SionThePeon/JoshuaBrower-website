import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useRef } from 'react'
import headshot from '../headshot.png'

const base = import.meta.env.BASE_URL

const games = [
  { slug: 'the-shell-company', title: 'The Shell Company', format: 'WebGL', play: `${base}games/the-shell-company/`, preview: { video: `${base}previews/the-shell-company.mp4`, image: `${base}previews/the-shell-company.jpg` }, context: ['test', 'test', 'test'] },
  { slug: 'frost-bite-delivery', title: 'Frost-Bite Delivery', format: 'Windows', download: `${base}downloads/Frost-Bite_DeliveryBigMode2026.zip`, context: ['test', 'test', 'test'] },
  { slug: 'toaster-3', title: "Toast's Adventure", format: 'WebGL', play: `${base}games/toaster-3/`, context: ['test', 'test', 'test'] },
  { slug: 'biggies-math-adventure', title: "Biggie's Math Adventure", format: 'WebGL', play: `${base}games/biggies-math-adventure/`, context: ['test', 'test', 'test'] },
]

function playPreview(event) {
  event.currentTarget.querySelector('video')?.play().catch(() => {})
}

function stopPreview(event) {
  const video = event.currentTarget.querySelector('video')
  if (!video) return
  video.pause()
  video.currentTime = 0
}

function GamePage({ game }) {
  const frameRef = useRef(null)

  function enterFullscreen() {
    frameRef.current?.requestFullscreen?.()
  }

  return (
    <>
      <Header />
      <main id="main-content" className="game-page">
        <a className="back-link" href={`${base}#games`}>← Back to Game Jams</a>
        <p className="eyebrow">{game.format} game</p>
        <h1>{game.title}</h1>
        {game.play ? (
          <>
            <p className="game-note">The game may take a moment to load. For the best view, use the fullscreen button below.</p>
            <button className="button fullscreen-button" type="button" onClick={enterFullscreen}>Play fullscreen</button>
            <div className="game-frame-wrap">
              <iframe ref={frameRef} src={game.play} title={`Play ${game.title}`} allowFullScreen />
            </div>
          </>
        ) : (
          <div className="download-panel">
            <p>This game runs on Windows. Download the ZIP, extract it, then open the game’s executable file.</p>
            <a className="button" href={game.download} download>Download for Windows</a>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const slug = new URLSearchParams(window.location.search).get('game')
  const selectedGame = games.find((game) => game.slug === slug)
  if (selectedGame) return <GamePage game={selectedGame} />

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Joshua Brower · Computer Science at UMN</p>
          <h1 id="hero-title">Exploring game development and graphics.</h1>
          <p className="intro">
            Learn a little about me and my projects.
          </p>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="about-layout">
            <div className="about-copy">
              <h2 id="about-title">About</h2>
              <p>
                Hi! I'm Joshua, a junior in college at University of Minnesota - Twin Cities studying computer science.
                I love game design and development, and have participated in multiple game jams in small groups doing multiple roles.
                I love learning more about both graphics and programming in games as I dive more into the game development industry.
                I have experience working in both Unity and Godot engines.
              </p>
            </div>
            <div className="about-photos">
              <img className="about-headshot" src={headshot} alt="Portrait of Joshua" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section" id="games" aria-labelledby="games-title">
          <h2 id="games-title">Game Jams</h2>
          <p className="games-intro">Pick a game from the shelf.</p>
          <div className="game-stack">
            {games.map((game, index) => (
              <div className="game-entry" key={game.slug}>
                <a
                  className={`game-spine game-spine-${index + 1}${game.preview ? ' game-spine-preview' : ''}`}
                  href={`${base}?game=${game.slug}`}
                  aria-describedby={`${game.slug}-context`}
                  onPointerEnter={(event) => { if (event.pointerType === 'mouse' || event.pointerType === 'pen') playPreview(event) }}
                  onPointerLeave={stopPreview}
                  onFocus={(event) => { if (event.currentTarget.matches(':focus-visible')) playPreview(event) }}
                  onBlur={stopPreview}
                >
                  {game.preview && (
                    <span className="game-preview-media" aria-hidden="true">
                      <img src={game.preview.image} alt="" loading="lazy" />
                      <video muted loop playsInline preload="none" poster={game.preview.image}>
                        <source src={game.preview.video} type="video/mp4" />
                      </video>
                    </span>
                  )}
                  <span className="spine-title">{game.title}</span>
                  <span className="spine-format">{game.format}</span>
                  <span className="spine-reveal" aria-hidden="true">
                    <span>{game.play ? 'Play on this site' : 'View download page'}</span>
                    <span>↗</span>
                  </span>
                </a>
                <div className="game-context" id={`${game.slug}-context`}>
                  <span className="game-context-label">Project notes ↓</span>
                  <ul>{game.context.map((point, pointIndex) => <li key={pointIndex}>{point}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <p>More projects coming soon.</p>
        </section>

        <section className="section" id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">Contact</h2>
          <p>Want to get in touch? Please email me at <a href="mailto:Jsbrower29@gmail.com">Jsbrower29@gmail.com</a>.</p>
          <p>
            Find me on <a href="https://www.linkedin.com/in/joshua-brower-712935326">LinkedIn</a> or{' '}
            <a href="https://github.com/SionThePeon">GitHub</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
