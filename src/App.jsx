import { useRef, useEffect } from 'react'
import './App.css'

const NAV_LINKS = ['Case Studies', 'Process', 'Testimonials', 'About']

function App() {
  const heroRef = useRef(null)
  const figureRef = useRef(null)
  const cardRefs = useRef([])
  const rafRef = useRef(null)

  // base rotations matching CSS (degrees)
  const BASE_ROTATIONS = [-8, -4, 6, 8]

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const multipliers = [0.025, 0.02, 0.03, 0.018]

    const handleMouseMove = (e) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dx = e.clientX - cx
        const dy = e.clientY - cy

        if (figureRef.current) {
          figureRef.current.style.transform =
            `translateX(calc(-50% + ${dx * 0.015}px)) translateY(${dy * 0.01}px)`
        }

        cardRefs.current.forEach((card, i) => {
          if (!card) return
          const m = multipliers[i] ?? 0.02
          const baseRot = BASE_ROTATIONS[i] ?? 0
          card.style.transform =
            `rotate(${baseRot}deg) translateX(${dx * m}px) translateY(${dy * m}px)`
        })
      })
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <main className="hero-stage" ref={heroRef}>
      <section className="hero-card" aria-label="Wikala — Turn ads into paying customers">

        {/* ── Nav ── */}
        <header className="hero-nav">
          <a className="brand" href="#top">
            <svg className="brand-emblem" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <polygon points="11,2 20,7 20,15 11,20 2,15 2,7" fill="#FFC928" opacity="0.9" />
              <polygon points="11,6 16,9 16,14 11,17 6,14 6,9" fill="#171519" />
              <polygon points="11,9 13.5,10.5 13.5,13 11,14.5 8.5,13 8.5,10.5" fill="#FFC928" />
            </svg>
            Wikala<sup>®</sup>
          </a>

          <nav className="hero-links" aria-label="Primary">
            {NAV_LINKS.map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(' ', '-')}`}>
                {label}
              </a>
            ))}
          </nav>

          <a className="pill--nav" href="#contact">
            Book a call →
          </a>
        </header>

        {/* ── Body ── */}
        <div className="hero-body">

          {/* Left: copy */}
          <div className="hero-copy">
            <p className="eyebrow">Creative Advertising Studio</p>

            <h1 className="hero-title">
              <span className="hero-line"><span>Turn ads</span></span>
              <span className="hero-line"><span>into paying</span></span>
              <span className="hero-line hero-line--italic"><span>customers.</span></span>
            </h1>
          </div>

          {/* Right: art */}
          <div className="hero-art" aria-hidden="true">

            {/* Stamp badge */}
            <div className="stamp-badge">
              <svg className="badge-ring-svg" viewBox="0 0 88 88">
                <defs>
                  <path id="badgePath" d="M44,44 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <circle cx="44" cy="44" r="42" fill="none" stroke="#171519" strokeWidth="1" strokeDasharray="3 4" opacity="0.45" />
                <text fontSize="7" fontFamily="Inter, sans-serif" fontWeight="400" letterSpacing="1.8" fill="#171519" opacity="0.55">
                  <textPath href="#badgePath">ADVERTISING STUDIO · SINCE 2024 ·</textPath>
                </text>
              </svg>
              <span className="badge-arrow">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 2v10M2 7l5 5 5-5" stroke="#171519" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>

            {/* Central CSS figure */}
            <div className="figure-wrap" ref={figureRef}>
              <div className="figure-head" />
              <div className="figure-neck" />
              <div className="figure-torso">
                <div className="tape-strip ts1" />
                <div className="tape-strip ts2" />
                <div className="tape-strip ts3" />
                <div className="tape-strip ts4" />
                <div className="tape-strip ts5" />
                <div className="tape-strip ts6" />
                <div className="tape-strip ts7" />
                <div className="tape-strip tape-strip--hazard ts8" />
              </div>
            </div>

            {/* Ad cards */}
            <div
              className="ad-card ad-card--a"
              ref={(el) => { cardRefs.current[0] = el }}
            >
              <div className="card-face">
                <div className="card-eye-container" />
                <span className="card-label">Creative Studio</span>
              </div>
            </div>

            <div
              className="ad-card ad-card--b"
              ref={(el) => { cardRefs.current[1] = el }}
            >
              <div className="card-face">
                <span className="card-big-text">AD</span>
              </div>
            </div>

            <div
              className="ad-card ad-card--c"
              ref={(el) => { cardRefs.current[2] = el }}
            >
              <div className="card-face">
                <span className="card-top-text">Campaign</span>
                <span className="card-main-text">TOP AD</span>
              </div>
            </div>

            <div
              className="ad-card ad-card--d"
              ref={(el) => { cardRefs.current[3] = el }}
            >
              <div className="card-face">
                <div className="card-circle" />
                <div className="card-geo">
                  <div className="card-geo-sq" />
                  <div className="card-geo-ln" />
                  <div className="card-geo-sq" />
                </div>
              </div>
            </div>

          </div>{/* end art */}
        </div>{/* end body */}

        {/* ── Footer ── */}
        <div className="hero-foot">
          <a className="pill--primary" href="#contact">
            <span className="cta-icon" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8 8 2M4 2h4v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Book a call
          </a>
          <p className="hero-note">
            Google and Meta Ads<br />
            managed by the founder,<br />
            not an account manager.
          </p>
        </div>

      </section>
    </main>
  )
}

export default App
