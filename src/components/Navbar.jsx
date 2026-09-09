import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { ActiveLink } from './Layout.jsx'

export default function Navbar() {
  const { t, theme, toggleTheme, lang, setLang } = useApp()
  const [open, setOpen] = useState(false)

  const links = [
    ['/', t.nav.home, '🏠'],
    ['/facilities', t.nav.facilities, '🏫'],
    ['/toppers', t.nav.toppers, '🏆'],
    ['/teachers', t.nav.teachers, '👩‍🏫'],
    ['/activities', t.nav.activities, '🎉'],
    ['/contact', t.nav.contact, '📞'],
  ]

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="crest" aria-hidden="true">
            GS
          </div>
          <div>
            <strong>{t.school}</strong>
            <span>{t.tagline}</span>
          </div>
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map(([to, label, icon]) => (
            <ActiveLink key={to} to={to}>
              <span className="nav-icon" aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </ActiveLink>
          ))}
        </nav>

        <div className="header-actions">
          <select
            className="chip"
            value={lang}
            aria-label="Language"
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="en">EN</option>
            <option value="hi">हिं</option>
          </select>
          <button className="chip" type="button" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button
            className="chip menu-btn"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      <nav className={`container mobile-nav ${open ? 'open' : ''}`} aria-label="Mobile">
        {links.map(([to, label, icon]) => (
          <ActiveLink key={to} to={to} onClick={() => setOpen(false)}>
            <span className="nav-icon" aria-hidden="true">{icon}</span>
            <span>{label}</span>
          </ActiveLink>
        ))}
      </nav>
    </header>
  )
}
