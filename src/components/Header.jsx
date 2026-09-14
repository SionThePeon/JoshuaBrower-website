export default function Header() {
  const base = import.meta.env.BASE_URL
  return (
    <header className="site-header">
      <a className="brand" href={base}>Joshua Brower</a>
      <nav aria-label="Main navigation">
        <a href={`${base}#about`}>About</a>
        <a href={`${base}#projects`}>Games</a>
        <a href={`${base}#contact`}>Contact</a>
      </nav>
    </header>
  )
}
