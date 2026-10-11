import { useRef, useEffect } from 'react'
import './App.css'

const NAV_LINKS = ['Case Studies', 'Process', 'Testimonials', 'About']

// BASE_ROTATIONS matching the CSS card rotations
const BASE_ROTATIONS = [-10, -4, 6, 10]

/* ── Tape-wrapped sculptural bust (inline SVG) ── */
function TapeFigureSVG() {
  return (
    <svg
      viewBox="0 0 300 560"
      width="300"
      height="560"
      overflow="visible"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <defs>
        {/* Gradient for overall figure depth */}
        <radialGradient id="figBg" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#FFE070" />
          <stop offset="45%" stopColor="#FFC928" />
          <stop offset="100%" stopColor="#A06800" />
        </radialGradient>

        {/* Hazard stripe pattern */}
        <pattern id="hazardPat" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="14" height="14" fill="#FFC928" />
          <rect y="7" width="14" height="7" fill="#111111" />
        </pattern>

        {/* Tape ribbon gradient — lighter face */}
        <linearGradient id="tapeLight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE585" />
          <stop offset="50%" stopColor="#FFC928" />
          <stop offset="100%" stopColor="#D4920A" />
        </linearGradient>

        {/* Tape ribbon gradient — darker shadow side */}
        <linearGradient id="tapeDark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4920A" />
          <stop offset="50%" stopColor="#B87A00" />
          <stop offset="100%" stopColor="#8C5E00" />
        </linearGradient>

        {/* Subtle drop shadow filter */}
        <filter id="figShadow" x="-15%" y="-5%" width="130%" height="115%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#000" floodOpacity="0.22" />
        </filter>

        {/* Tape edge shadow */}
        <filter id="tapeShadow">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* === SHOULDERS / BODY BASE === */}
      {/* Wide trapezoid base — bleeds past viewBox bottom */}
      <path
        d="M 30 560 L 10 420 Q 20 380 60 370 L 100 360 L 150 345 L 200 360 L 240 370 Q 280 380 290 420 L 270 560 Z"
        fill="url(#figBg)"
        filter="url(#figShadow)"
      />

      {/* Neck */}
      <rect x="118" y="310" width="64" height="62" rx="6"
        fill="url(#tapeLight)" />

      {/* === HEAD === */}
      {/* Head base oval */}
      <ellipse cx="150" cy="200" rx="92" ry="115"
        fill="url(#figBg)"
        filter="url(#figShadow)"
      />

      {/* ── TAPE RIBBONS ON HEAD (14 bands, bezier curves) ── */}

      {/* Band 1 — very top of head, slight curve */}
      <path d="M 68 98 Q 150 78 232 98 L 232 112 Q 150 92 68 112 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />

      {/* Band 2 */}
      <path d="M 58 118 Q 150 100 242 120 L 240 133 Q 150 114 60 132 Z"
        fill="url(#tapeDark)" filter="url(#tapeShadow)" />

      {/* Band 3 — slight negative slope left to right */}
      <path d="M 62 140 Q 150 126 238 144 L 236 158 Q 150 140 64 154 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />

      {/* Band 4 — ADVERTISEMENT label band */}
      <path d="M 66 164 Q 150 152 234 168 L 232 182 Q 150 166 68 178 Z"
        fill="#FFC928" filter="url(#tapeShadow)" />
      <text x="150" y="177" textAnchor="middle"
        fontFamily="Inter, sans-serif" fontSize="7" fontWeight="600"
        letterSpacing="1.8" fill="#111111">ADVERTISEMENT</text>

      {/* Band 5 */}
      <path d="M 68 188 Q 150 176 232 190 L 230 204 Q 150 190 70 202 Z"
        fill="url(#tapeDark)" filter="url(#tapeShadow)" />

      {/* Band 6 — hazard stripe */}
      <path d="M 70 210 Q 150 200 230 212 L 228 224 Q 150 214 72 222 Z"
        fill="url(#hazardPat)" filter="url(#tapeShadow)" />

      {/* Band 7 */}
      <path d="M 72 230 Q 150 220 228 232 L 226 246 Q 150 234 74 244 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />

      {/* Band 8 */}
      <path d="M 74 252 Q 150 242 226 254 L 224 268 Q 150 256 76 266 Z"
        fill="url(#tapeDark)" filter="url(#tapeShadow)" />

      {/* Band 9 — lower face / chin area */}
      <path d="M 82 274 Q 150 264 218 276 L 216 290 Q 150 278 84 288 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />

      {/* Band 10 — chin */}
      <path d="M 96 295 Q 150 285 204 295 L 202 308 Q 150 298 98 308 Z"
        fill="url(#tapeDark)" filter="url(#tapeShadow)" />

      {/* ── TAPE RIBBONS ON NECK ── */}
      <path d="M 115 318 Q 150 310 185 318 L 184 330 Q 150 322 116 330 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />
      <path d="M 116 336 Q 150 328 184 336 L 183 348 Q 150 340 117 348 Z"
        fill="url(#tapeDark)" filter="url(#tapeShadow)" />

      {/* ── TAPE RIBBONS ON SHOULDERS / TORSO ── */}
      {/* Wide sweeping curves across shoulders */}
      <path d="M 20 390 Q 150 368 280 390 L 278 406 Q 150 382 22 406 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />
      <path d="M 15 412 Q 150 390 285 412 L 283 428 Q 150 404 17 428 Z"
        fill="url(#tapeDark)" filter="url(#tapeShadow)" />
      <path d="M 12 434 Q 150 412 288 434 L 286 450 Q 150 426 14 450 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />
      {/* Hazard stripe across shoulders */}
      <path d="M 10 456 Q 150 434 290 456 L 288 470 Q 150 448 12 470 Z"
        fill="url(#hazardPat)" filter="url(#tapeShadow)" />
      <path d="M 10 476 Q 150 454 290 476 L 288 492 Q 150 468 12 492 Z"
        fill="url(#tapeDark)" filter="url(#tapeShadow)" />
      <path d="M 10 498 Q 150 476 290 498 L 288 514 Q 150 488 12 514 Z"
        fill="url(#tapeLight)" filter="url(#tapeShadow)" />
    </svg>
  )
}

function App() {
  const heroRef = useRef(null)
  const figureRef = useRef(null)
  const cardRefs = useRef([])
  const rafRef = useRef(null)

  const multipliers = [0.025, 0.02, 0.03, 0.018]

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

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

          <nav aria-label="Primary">
            <ul className="hero-links">
              {NAV_LINKS.map((label, i) => (
                <li key={label}>
                  {i > 0 && <span className="nav-dot" aria-hidden="true">·</span>}
                  <a href={`#${label.toLowerCase().replace(' ', '-')}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="pill--nav" href="#contact">
            Book a call 🗓
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

            {/* Central SVG figure — tape-wrapped sculptural bust */}
            <div className="figure-wrap" ref={figureRef}>
              <TapeFigureSVG />
            </div>

            {/* Card A: lower-left — golden with torn portrait SVG */}
            <div
              className="ad-card ad-card--a"
              ref={(el) => { cardRefs.current[0] = el }}
            >
              <div className="card-face">
                <svg width="80" height="82" viewBox="0 0 80 82" aria-hidden="true">
                  {/* Golden face-gradient base */}
                  <defs>
                    <radialGradient id="faceGrad" cx="50%" cy="45%" r="55%">
                      <stop offset="0%" stopColor="#FFE585" />
                      <stop offset="60%" stopColor="#D4920A" />
                      <stop offset="100%" stopColor="#8C5E00" />
                    </radialGradient>
                  </defs>
                  <ellipse cx="40" cy="50" rx="34" ry="30" fill="url(#faceGrad)" />
                  {/* Dark organic torn-paper blob overlaying top */}
                  <path
                    d="M 6 44 C 4 30, 8 14, 20 9 C 28 4, 38 2, 50 6 C 62 10, 74 18, 76 30 C 78 40, 72 50, 64 52 C 58 54, 52 48, 44 48 C 36 48, 30 54, 22 52 C 12 50, 8 52, 6 44 Z"
                    fill="#2a2a2a"
                    opacity="0.92"
                  />
                  {/* Slight highlight on dark blob */}
                  <ellipse cx="32" cy="20" rx="10" ry="6" fill="rgba(255,255,255,0.06)" />
                </svg>
                <span className="card-label">Creative Studio</span>
              </div>
            </div>

            {/* Card B: center-left — red with UNIF text */}
            <div
              className="ad-card ad-card--b"
              ref={(el) => { cardRefs.current[1] = el }}
            >
              <div className="card-face">
                <span className="card-big-text">UNIF</span>
                <span className="card-sub-text">Creative Agency</span>
              </div>
            </div>

            {/* Card C: lower-center-right — dark with stacked yellow text */}
            <div
              className="ad-card ad-card--c"
              ref={(el) => { cardRefs.current[2] = el }}
            >
              <div className="card-face">
                <span className="card-top-text">Campaign</span>
                <div className="card-stacked-text">
                  <span className="card-main-text">TOP</span>
                  <span className="card-main-text">WAIT</span>
                  <span className="card-main-text">ING</span>
                </div>
              </div>
            </div>

            {/* Card D: right side — black with yellow stick figure SVG */}
            <div
              className="ad-card ad-card--d"
              ref={(el) => { cardRefs.current[3] = el }}
            >
              <div className="card-face">
                <svg width="60" height="80" viewBox="0 0 60 80" aria-hidden="true">
                  {/* Head */}
                  <circle cx="30" cy="16" r="14" fill="#FFC928" />
                  {/* Torso */}
                  <ellipse cx="30" cy="44" rx="10" ry="18" fill="#FFC928" />
                  {/* Left arm */}
                  <line x1="20" y1="34" x2="6" y2="52" stroke="#FFC928" strokeWidth="3" strokeLinecap="round" />
                  {/* Right arm */}
                  <line x1="40" y1="34" x2="54" y2="52" stroke="#FFC928" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>

          </div>{/* end art */}
        </div>{/* end body */}

        {/* ── Footer ── */}
        <div className="hero-foot">
          <a className="pill--primary" href="#contact">
            <span className="cta-icon" aria-hidden="true">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M2 8 8 2M4 2h4v4" stroke="#FFC928" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Book a call
          </a>
          <p className="hero-note">
            Google and Meta Ads /<br />
            managed by the founder,<br />
            not an account manager.
          </p>
        </div>

      </section>
    </main>
  )
}

export default App
