import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useRef } from 'react'

const base = import.meta.env.BASE_URL

const games = [
  {
    slug: 'the-shell-company',
    title: 'The Shell Company',
    format: 'WebGL',
    play: `${base}games/the-shell-company/`,
    preview: { video: `${base}previews/the-shell-company.mp4`, image: `${base}previews/the-shell-company.jpg` },
    projectNotes: [
      'Created in 48 hours with Unity for the Club Club Game Jam.',
      'Developed solo, creating all code, art, and music.',
      'Built a gameplay loop around managing and restocking a store, with nighttime mini-games to earn extra money.',
      'Implemented NPC pathfinding for movement through the store.',
    ],
  },
  {
    slug: 'frost-bite-delivery',
    title: 'Frost-Bite Delivery',
    format: 'Windows',
    download: `${base}downloads/Frost-Bite_DeliveryBigMode2026.zip`,
    preview: { video: `${base}previews/frost-bite-delivery.mp4`, image: `${base}previews/frost-bite-delivery.jpg` },
    projectNotes: [
      'Created in Unity over one week for the Bigmode Game Jam 2026.',
      'Co-developed with Carl Gross, collaborating on game development and meeting nightly to review progress and plan next steps.',
      'Personally created the 3D models and 2D graphics used throughout the world.',
      'Designed a gameplay loop with incremental progression that rewards players for learning the world and optimizing delivery routes.',
    ],
  },
  {
    slug: 'toaster-3',
    title: "Toast's Adventure",
    format: 'WebGL',
    play: `${base}games/toaster-3/`,
    preview: { video: `${base}previews/toasts-adventure.mp4`, image: `${base}previews/toasts-adventure.jpg` },
    projectNotes: [
      'Created in Unity over 36 hours for Toaster @ the Toaster 2025, hosted by the University of Minnesota.',
      'Collaborated with two other students on brainstorming and art while handling all programming.',
      'Built a 2D platformer focused on precise movement and power-ups.',
      'The main challenge was implementing all game code within a five-hour window during the 36-hour event.',
    ],
  },
  {
    slug: 'biggies-math-adventure',
    title: "Biggie's Math Adventure",
    format: 'WebGL',
    play: `${base}games/biggies-math-adventure/`,
    preview: { video: `${base}previews/biggies-math-adventure.mp4`, image: `${base}previews/biggies-math-adventure.jpg` },
    projectNotes: [
      'My first game jam and first project using Unity.',
      'Created in five days for the Bigmode Game Jam 2025.',
      'Co-developed with Carl Gross, splitting responsibilities across the project.',
      'Added voice acting and a level system where players must defeat every enemy to advance.',
    ],
  },
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
        {game.projectNotes && (
          <section className="project-notes" aria-labelledby="project-notes-title">
            <h2 id="project-notes-title">Project notes</h2>
            <ul>{game.projectNotes.map((note) => <li key={note}>{note}</li>)}</ul>
          </section>
        )}
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
              <img className="about-headshot" src={`${base}images/headshot2.jpg`} alt="Portrait of Joshua" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <h2 id="experience-title">Experience & Technical Skills</h2>
          <div className="experience-list">
            <article className="experience-card" aria-labelledby="fyta-title">
              <div className="experience-heading">
                <h3 id="fyta-title">Software Engineer Intern</h3>
                <p className="experience-dates">May - July 2026</p>
              </div>
              <div className="experience-body">
                <p className="experience-company">FYTA · Berlin, Germany</p>
                <ul>
                  <li>Developed a B2B plant-health application with real-time IoT dashboards across multiple sites and zones.</li>
                  <li>Built UI components, data visualizations, and inventory tables, working across sensors, backend APIs, and web interfaces.</li>
                </ul>
              </div>
            </article>
            <article className="experience-card" aria-labelledby="elbo-title">
              <div className="experience-heading">
                <h3 id="elbo-title">Cybersecurity Intern</h3>
                <p className="experience-dates">March 2024 - April 2026</p>
              </div>
              <div className="experience-body">
                <p className="experience-company">Elbo Computing Resources · Sioux Falls, SD</p>
                <ul>
                  <li>Supported over 100 local and national clients, resolving hardware and software issues and tracking support tickets.</li>
                  <li>Performed backups, updates, security patching, and asset management.</li>
                </ul>
              </div>
            </article>
          </div>
          <div className="skills-panel">
            <h3>Technical Skills</h3>
            <dl className="skills-grid">
              <div><dt>Programming</dt><dd>Java, Python, C/C++</dd></div>
              <div><dt>Web Development</dt><dd>React, TypeScript, front-end development; exposure to backend API design</dd></div>
              <div><dt>Game Development & 3D</dt><dd>Unity, Godot, Blender</dd></div>
              <div><dt>Development Tools</dt><dd>GitHub, Claude Code</dd></div>
            </dl>
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
                  <ul>{(game.projectNotes ?? game.context).map((point, pointIndex) => <li key={pointIndex}>{point}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <article className="project-card" aria-labelledby="wow-forever-title">
            <div className="project-card-header">
              <span className="project-status">In Progress</span>
              <h3 id="wow-forever-title">WoW Forever Addon</h3>
              <span className="project-tech">World of Warcraft · Lua</span>
            </div>
            <div className="project-card-body">
              <p>
                Developing a World of Warcraft addon in Lua that helps players discover the lore
                of questlines and zones through the content they encounter, using available Journal APIs.
              </p>
            </div>
          </article>
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
