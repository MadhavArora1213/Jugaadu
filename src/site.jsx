import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV } from './data.js'
import { Tag } from './stickers.jsx'

const TITLES = {
  '/': 'Jugaadu — Think. Build. Modernize. Grow.',
  '/build': 'Build — Jugaadu',
  '/modernize': 'Modernize — Jugaadu',
  '/grow': 'Grow — Jugaadu',
  '/venture-build': 'Venture Build — Jugaadu',
  '/think-with-you': 'Think With You — Jugaadu',
  '/work': 'Work — Jugaadu',
  '/about': 'About — Jugaadu',
  '/insights': 'Insights — Jugaadu',
  '/contact': 'Start a conversation — Jugaadu',
}

/* On every route change: settle the window, honour a hash so `/#pillars`
   still lands on the right band, and give the document its own title. */
export function RouteEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    document.title = TITLES[pathname] || 'Page not found — Jugaadu'

    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

function Emblem() {
  return (
    <svg className="brand-emblem" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill="#B5523C" />
      <path d="M12 5.5 V18.5" stroke="#F5F0E7" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M7 12 H17" stroke="#F5F0E7" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  )
}

export function SiteNav() {
  const [open, setOpen] = useState(false)

  /* Escape closes the panel — a subscription, so it lives in an effect.
     Navigation closes it at the source: every link in the panel calls
     close(), rather than the effect reaching back and setting state. */
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <Link className="brand" to="/" onClick={close}>
        <Emblem />
        <span className="brand-lock">
          <span className="brand-name">Jugaadu<sup>®</sup></span>
          <span className="brand-tag">ideas to impact</span>
        </span>
      </Link>

      <div className="nav-group">
        <nav aria-label="Primary">
          <ul className="nav-links">
            {NAV.map((item, i) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  <span className="nav-i" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="nav-t">{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <NavLink className="btn btn--dark" to="/contact" end onClick={close}>
          Let’s talk →
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <div className={`nav-panel${open ? ' is-open' : ''}`} id="nav-panel">
        <ul>
          <li>
            <NavLink to="/" end onClick={close}>
              <span className="nav-i" aria-hidden="true">00</span>
              <span className="nav-t">Home</span>
            </NavLink>
          </li>
          {NAV.map((item, i) => (
            <li key={item.to}>
              <NavLink to={item.to} onClick={close}>
                <span className="nav-i" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="nav-t">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink className="btn btn--accent nav-panel-cta" to="/contact" end onClick={close}>
          Start a conversation →
        </NavLink>
      </div>

      {/* the panel is pinned to the nav, but clicking away should also
          dismiss it */}
      {open && (
        <button type="button" className="nav-scrim" aria-label="Close menu" onClick={close} />
      )}
    </header>
  )
}

export function SiteFoot() {
  return (
    <footer className="foot">
      <div className="foot-brand">
        <Emblem />
        <span>Jugaadu<sup>®</sup></span>
      </div>

      <nav aria-label="Footer">
        <ul className="foot-links">
          {NAV.map((item) => (
            <li key={item.to}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <Tag color="#d4a373" ink="#0F3D3A" rotate={0}>Ideas to impact</Tag>
      <p className="foot-copy">© 2026 Jugaadu · Think. Build. Modernize. Grow.</p>
    </footer>
  )
}
