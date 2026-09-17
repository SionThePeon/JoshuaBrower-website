export default function Header() {
  const base = import.meta.env.BASE_URL
  return (
    <header className="site-header">
      <a className="brand" href={`${base}#main-content`}>Joshua Brower</a>
      <nav aria-label="Main navigation">
        <a href={`${base}#main-content`}>Home</a>
        <a href={`${base}#about`}>About</a>
        <a href={`${base}#games`}>Game Jams</a>
        <a href={`${base}#projects`}>Projects</a>
        <a href={`${base}#contact`}>Contact</a>
      </nav>
    </header>
  )
}
