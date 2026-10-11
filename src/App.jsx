import './App.css'

const NAV_LINKS = ['Work', 'Pillars', 'Process', 'About']

const PILLAR_CARDS = [
  { id: 'think', name: 'Think With You', verb: 'Turn uncertainty into a clear next move.' },
  { id: 'build', name: 'Build', verb: "Create what doesn't exist." },
  { id: 'modernize', name: 'Modernize', verb: 'Improve what already exists.' },
  { id: 'grow', name: 'Grow', verb: 'Turn technology into business results.' },
  { id: 'venture', name: 'Venture Build', verb: 'Turn opportunities into companies.' },
]

const SLABS = [
  { offset: '-76px', size: '46%', pillar: 'think' },
  { offset: '-38px', size: '52%', pillar: 'venture' },
  { offset: '0px', size: '58%', pillar: 'build' },
  { offset: '38px', size: '64%', pillar: 'modernize' },
  { offset: '76px', size: '70%', pillar: 'grow' },
]

function Arrow() {
  return (
    <svg className="arrow" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M3 11 11 3M5 3h6v6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function App() {
  return (
    <main className="hero-stage">
      <section className="hero-card" aria-label="Jugaadu — Ideas to Impact">
        <header className="hero-nav">
          <a className="brand" href="#top">
            Jugaadu<sup>®</sup>
          </a>

          <nav className="hero-links" aria-label="Primary">
            {NAV_LINKS.map((label, i) => (
              <a key={label} href={`#${label.toLowerCase()}`} className={i === 0 ? 'is-active' : undefined}>
                {label}
              </a>
            ))}
          </nav>

          <a className="pill pill--nav" href="#contact">
            Start a Conversation
            <Arrow />
          </a>
        </header>

        <div className="hero-body">
          <div className="hero-copy">
            <p className="eyebrow">One partner · five ways</p>

            <h1 className="hero-title">
              <span className="hero-line">Turn ideas into</span>
              <span className="hero-line hero-line--script">impact.</span>
            </h1>

            <p className="hero-lede">
              We build, modernize, grow and launch businesses — and stay beside you when
              you don&apos;t know what comes next.
            </p>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="hero-badge">
              <svg className="badge-ring" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="badgeCircle"
                    d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                  />
                </defs>
                <text>
                  <textPath href="#badgeCircle">
                    ONE PARTNER · FIVE WAYS · IDEAS TO IMPACT ·&nbsp;
                  </textPath>
                </text>
              </svg>
              <span className="badge-star">✦</span>
            </div>

            <div className="stack">
              {SLABS.map((slab, i) => (
                <div
                  key={slab.pillar}
                  className={`slab slab--${slab.pillar}`}
                  style={{ '--y': slab.offset, '--s': slab.size, '--i': i }}
                >
                  <div className="slab-face" />
                </div>
              ))}
            </div>

            {PILLAR_CARDS.map((card, i) => (
              <div key={card.id} className={`pcard pcard--${card.id}`} style={{ '--i': i }}>
                <span className="pcard-name">{card.name}</span>
                <span className="pcard-verb">{card.verb}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-foot">
          <div className="hero-ctas">
            <a className="pill pill--primary" href="#contact">
              Start a Conversation
              <Arrow />
            </a>
            <a className="link-secondary" href="#pillars">
              See What We Do
              <Arrow />
            </a>
          </div>

          <p className="hero-note">
            We can enter at any stage — and stay after launch.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
