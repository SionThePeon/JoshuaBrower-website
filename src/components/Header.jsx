import { useEffect, useState } from 'react'

export default function Header() {
  const base = import.meta.env.BASE_URL
  const [crtEnabled, setCrtEnabled] = useState(() => {
    try {
      return localStorage.getItem('crt-mode') !== 'off'
    } catch {
      return true
    }
  })

  useEffect(() => {
    document.documentElement.classList.toggle('crt-enabled', crtEnabled)
    try {
      localStorage.setItem('crt-mode', crtEnabled ? 'on' : 'off')
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }, [crtEnabled])

  return (
    <header className="site-header">
      <a className="brand" href={`${base}#main-content`}>Joshua Brower</a>
      <nav aria-label="Main navigation">
        <a href={`${base}#main-content`}>Home</a>
        <a href={`${base}#about`}>About</a>
        <a href={`${base}#experience`}>Experience & Skills</a>
        <a href={`${base}#games`}>Game Jams</a>
        <a href={`${base}#projects`}>Projects</a>
        <a href={`${base}#contact`}>Contact</a>
      </nav>
      <button
        className="crt-toggle"
        type="button"
        aria-pressed={crtEnabled}
        onClick={() => setCrtEnabled((enabled) => !enabled)}
      >
        <span className="crt-indicator" aria-hidden="true" />
        <span>CRT mode</span>
        <span className="crt-toggle-status" aria-hidden="true">{crtEnabled ? 'ON' : 'OFF'}</span>
      </button>
    </header>
  )
}
