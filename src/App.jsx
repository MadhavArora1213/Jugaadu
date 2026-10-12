import { Link } from 'react-router-dom'
import {
  Seal, Starburst, ScallopTag, Sparkle, OutlineStar, Squiggle,
  ScriptArrow, Checker, Laurel, Polaroid, Doodle, Mascot, StampCard,
  Avatar, ChipPhoto, GalleryTile, SmileyStar, Clover, BigAsterisk, TeamCard,
  Marquee, WorkScene,
} from './stickers.jsx'
import { PILLARS, TEAM } from './data.js'
import './App.css'

const VOICES = [
  { quote: 'They didn’t try to sell us technology. They sat with us until the next step was obvious.', who: 'Ravi Menon', role: 'Founder, D2C brand', card: 'var(--brand-brass)', ink: 'var(--brand-teal)', a: 'var(--brand-terracotta)', b: 'var(--brand-brass)' },
  { quote: 'Our old system still runs. They modernized around it instead of making us start over.', who: 'Anita Sharma', role: 'Operations Director', card: 'var(--brand-sage)', ink: 'var(--brand-teal)', a: 'var(--brand-teal)', b: 'var(--brand-sage)' },
  { quote: 'We came in with ten ideas. We left with one, and it shipped in eleven weeks.', who: 'Karan Patel', role: 'Co-founder', card: 'var(--brand-indigo)', ink: 'var(--brand-ivory)', a: 'var(--brand-indigo)', b: 'var(--brand-teal)' },
  { quote: 'Honest about what we didn’t need. That’s rarer than it should be.', who: 'Meera Joshi', role: 'CEO, services firm', card: 'var(--brand-brass)', ink: 'var(--brand-teal)', a: 'var(--brand-terracotta)', b: 'var(--brand-sage)' },
]

const SITUATIONS = [
  '“I have an idea, but I don’t know if it’s good.”',
  '“Should we build this or buy it?”',
  '“Our systems don’t talk to each other.”',
  '“Our business outgrew its technology.”',
  '“Where should we actually use AI?”',
  '“I don’t know the right next step.”',
]

/* the thin ticker that runs under the photo strip */
const TICKER = ['Affordable', 'Conversion focused', 'Data driven', 'Built to last', 'No jargon']

const WORK = [
  {
    tag: 'E-commerce', title: 'Website development',
    desc: 'A D2C brand was selling well and losing cart. We rebuilt the storefront around the checkout.',
    color: 'var(--brand-terracotta)', ink: 'var(--brand-white)', accent: 'var(--brand-brass)', scene: 0,
  },
  {
    tag: 'Corporate', title: 'Website redesign',
    desc: 'Twenty-two pages of legacy copy, one clear story. Rewritten, restructured, relaunched in six weeks.',
    color: 'var(--brand-sage)', ink: 'var(--brand-charcoal)', accent: 'var(--brand-terracotta)', scene: 1,
  },
  {
    tag: 'Social media', title: 'Marketing campaign',
    desc: 'A launch that ran for eleven days across four channels, measured end to end.',
    color: 'var(--brand-brass)', ink: 'var(--brand-charcoal)', accent: 'var(--brand-indigo)', scene: 2,
  },
  {
    tag: 'SEO', title: 'Optimization campaign',
    desc: 'Technical cleanup plus a content engine. Organic traffic doubled in a quarter.',
    color: 'var(--brand-indigo)', ink: 'var(--brand-ivory)', accent: 'var(--brand-sage)', scene: 3,
  },
]

const LOGOS = ['Nirvana', 'Goodday', 'Banyan', 'Laff', 'Trident', 'Chai Point']

const PLANS = [
  {
    name: 'Starter', price: '₹1.9L', per: '/mo', best: false,
    desc: 'For a first serious build, or a rescue of something already live.',
    includes: ['Discovery and scope', 'Design system', 'Up to 8 pages or screens', 'Build and QA', 'Analytics wired up'],
  },
  {
    name: 'Growth', price: '₹4.5L', per: '/mo', best: true,
    desc: 'An embedded team for companies shipping continuously.',
    includes: ['Everything in Starter', 'Dedicated pod', 'Conversion experiments', 'SEO and content engine', 'Monthly strategy review', 'Priority support'],
  },
]

const FAQS = [
  { q: 'How quickly can we start?', a: 'Usually within a week. The first call is free and there is no proposal theatre — we tell you what we would do and what it costs.' },
  { q: 'Do you work with non-technical founders?', a: 'Most of our clients are. We translate, we do not lecture, and we never make you feel behind.' },
  { q: 'What if we already have a developer?', a: 'Great. We work alongside in-house teams all the time, and we are happy to hand over cleanly.' },
  { q: 'Can you modernize a system we depend on?', a: 'Yes. Most of our work is evolution, not replacement. We keep what earns its keep.' },
]

function App() {
  return (
    <>

      {/* ── Hero ── */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <h1 className="hero-title">
            <span className="line">
              <span className="spark-slot"><Sparkle size={30} color="#B5523C" rotate={-12} /></span>
              <span>Transform</span>
            </span>
            <span className="line line--seal">
              <span className="seal-slot">
                <Seal id="hero" text="WE BUILD · MODERNIZE · GROW" size={132} />
              </span>
              <span>Your idea</span>
              <span className="burst-slot">
                <Starburst label={'Since\n2024'} size={86} color="#B5523C" ink="#FFFFFF" />
              </span>
            </span>
            <span className="line line--last">
              <span>Into impact</span>
              <span className="tag-slot">
                <ScallopTag color="#8aae78" ink="#0F3D3A" rotate={-5}>Jugaadu</ScallopTag>
              </span>
            </span>
          </h1>

          <p className="hero-sub">
            A modern Indian technology partner helping founders and businesses go
            from a rough idea to something that actually works — through strategy,
            build and growth.
          </p>

          <Link className="btn btn--accent btn--lg" to="/contact">Book a free call →</Link>
        </div>

        <div className="hero-art">
          <Doodle />
          <span className="float-note">
            <svg width="58" height="42" viewBox="0 0 58 42" aria-hidden="true">
              <path d="M4 36 C10 12 32 4 52 9" fill="none" stroke="#0F3D3A" strokeWidth="2" strokeLinecap="round" />
              <path d="M43 5 l10 4 -6 8" fill="none" stroke="#0F3D3A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            chai, obviously
          </span>
        </div>
      </section>

      <Checker />

      {/* ── Statement band ── */}
      <section className="statement" id="about">
        {/* polaroids floating at the sides */}
        <div className="float-left" aria-hidden="true">
          <Polaroid caption="2026" from="#8aae78" to="#0f3d3a" rotate={-11} size={124} motif="chat" />
        </div>
        <div className="float-right" aria-hidden="true">
          <Polaroid caption="Work Space" from="#B5523C" to="#d4a373" rotate={9} size={124} motif="gear" />
        </div>

        <span className="since"><em>Since 2024</em></span>

        <h2 className="statement-title">
          Our experienced
          <ChipPhoto size={54} from="#D4A373" to="#d4a373" rotate={-3} />
          team combine
          <SmileyStar size={40} color="#466B8A" rotate={10} />
          clarity technology
          <Clover size={36} color="#B5523C" rotate={0} />
          honest execution that
          <BigAsterisk size={34} color="#98402B" rotate={8} />
          increases real impact
        </h2>

        <div className="laurels">
          <Laurel top="Ultra" mid="Modern" bottom="Winner" />
          <Laurel top="Award" mid="Winning" bottom="Partner" />
          <Laurel top="Hyper" mid="Best" bottom="Agency" stars />
        </div>

        {/* full-bleed photo strip */}
        <div className="gal-strip" aria-hidden="true">
          <GalleryTile bg="#D8CCBB" flex={1.1}>
            {/* sneaker on sand */}
            <rect width="200" height="130" fill="#D8CCBB" />
            <path d="M52 96 q4 -22 12 -30 l16 -2 q6 12 20 18 q22 8 44 10 q10 1 10 8 l0 8 q0 6 -8 6 l-86 0 q-8 0 -8 -8 Z" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="3" strokeLinejoin="round" />
            <path d="M74 68 l14 -2" stroke="#0F3D3A" strokeWidth="3" strokeLinecap="round" />
            <path d="M52 100 l100 0" stroke="#B5523C" strokeWidth="5" strokeLinecap="round" />
          </GalleryTile>

          <GalleryTile bg="#C7D6C0" flex={2.2}>
            {/* mint van */}
            <rect width="200" height="130" fill="#C7D6C0" />
            <rect y="96" width="200" height="34" fill="#D8CCBB" />
            <path d="M24 92 l0 -28 q0 -12 12 -12 l72 0 q10 0 14 8 l16 24 q24 2 38 8 q-4 8 -18 8 l-134 0 q-12 0 -12 -8 Z" fill="#C7D6C0" stroke="#0F3D3A" strokeWidth="3" strokeLinejoin="round" />
            <path d="M40 62 l38 0 0 16 -50 0 q0 -10 12 -16 Z" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="2.4" />
            <path d="M86 62 l22 0 12 16 -34 0 Z" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="2.4" />
            <circle cx="62" cy="100" r="13" fill="#0F3D3A" />
            <circle cx="62" cy="100" r="5" fill="#F5F0E7" />
            <circle cx="146" cy="100" r="13" fill="#0F3D3A" />
            <circle cx="146" cy="100" r="5" fill="#F5F0E7" />
          </GalleryTile>

          <GalleryTile bg="#B5523C" flex={1.7}>
            {/* sunflower on terracotta */}
            <rect width="200" height="130" fill="#B5523C" />
            {Array.from({ length: 12 }).map((_, i) => (
              <ellipse key={i} cx="100" cy="66" rx="13" ry="34"
                transform={`rotate(${i * 30} 100 66)`} fill="#D4A373" opacity="0.95" />
            ))}
            <circle cx="100" cy="66" r="21" fill="#0f3d3a" />
            <circle cx="100" cy="66" r="21" fill="none" stroke="#D4A373" strokeWidth="2" opacity="0.4" />
          </GalleryTile>

          <GalleryTile bg="#B5523C" flex={1.5}>
            {/* a book full of hope */}
            <rect width="200" height="130" fill="#B5523C" />
            <g transform="rotate(-7 100 66)">
              <rect x="52" y="20" width="96" height="94" rx="3" fill="#C7D6C0" stroke="#0F3D3A" strokeWidth="3" />
              <text x="100" y="48" textAnchor="middle" fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="800" fontSize="17" fill="#0F3D3A">A BOOK</text>
              <text x="100" y="70" textAnchor="middle" fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="800" fontSize="17" fill="#0F3D3A">FULL OF</text>
              <text x="100" y="92" textAnchor="middle" fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="800" fontSize="17" fill="#B5523C">HOPE</text>
            </g>
          </GalleryTile>

          <GalleryTile bg="#D8CCBB" flex={1.3}>
            {/* slide against blue sky */}
            <rect width="200" height="130" fill="#D8CCBB" />
            <path d="M0 118 L200 118 L200 130 L0 130 Z" fill="#8aae78" />
            <path d="M56 34 L150 106 L150 118 L56 46 Z" fill="#D4A373" stroke="#0F3D3A" strokeWidth="3" strokeLinejoin="round" />
            <rect x="48" y="26" width="12" height="92" fill="#B5523C" stroke="#0F3D3A" strokeWidth="3" />
            <path d="M48 44 h14 M48 60 h14 M48 76 h14" stroke="#0F3D3A" strokeWidth="2.6" />
            <circle cx="164" cy="30" r="14" fill="#F5F0E7" opacity="0.85" />
          </GalleryTile>
        </div>
      </section>

      {/* ── Ticker ── */}
      <Marquee className="ticker" items={TICKER} speed={40} />

      {/* ── Solutions ── */}
      <section className="solutions" id="services">
        <div className="solutions-head">
          <span className="eyebrow"><i className="eyebrow-dot" />Our solutions</span>
          <h2 className="h2">Everything an idea<br />needs to become real</h2>
        </div>

        <div className="solutions-collage" aria-hidden="true">
          <div className="sc-card sc-card--a">
            <WorkScene variant={0} />
            <span className="sc-tag">Storefronts</span>
          </div>
          <div className="sc-card sc-card--b">
            <WorkScene variant={3} />
            <span className="sc-tag">Dashboards</span>
          </div>
          <div className="sc-card sc-card--c">
            <WorkScene variant={2} />
            <span className="sc-tag">Campaigns</span>
          </div>
          <span className="sc-script sc-script--1">Think</span>
          <span className="sc-script sc-script--2">Build</span>
          <span className="sc-burst"><Starburst label="Grow" size={92} color="#B5523C" ink="#FFFFFF" /></span>
        </div>

        <div className="solutions-bar">
          <p>Strategy, design, engineering and growth — under one roof, on one bill.</p>
          <Link className="btn btn--accent" to="/#pillars">See the five pillars →</Link>
        </div>
      </section>

      {/* ── Selected work ── */}
      <section className="work" id="work">
        <div className="work-head">
          <h2 className="h2 h2--dark">Our work</h2>
          <p className="work-lead">
            Four situations, four answers. No case study ever reads like the
            problem actually arrived.
          </p>
        </div>

        <div className="work-list">
          {WORK.map((w, i) => (
            <article key={w.title} className="work-card" style={{ '--wc': w.color, '--wi': w.ink, '--wa': w.accent }}>
              <span className="work-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div className="work-copy">
                <span className="work-tag">{w.tag}</span>
                <h3 className="work-title">{w.title}</h3>
                <p className="work-desc">{w.desc}</p>
                <Link className="work-go" to="/work">View project →</Link>
              </div>
              <div className="work-shot">
                <WorkScene variant={w.scene} />
                <span className="work-sticker" aria-hidden="true">
                  <OutlineStar size={40} color={w.accent} rotate={-8} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── What we hear ── */}
      <section className="situations" id="situations">
        <div className="situations-head">
          <h2 className="h2">What people<br />bring us</h2>
          <div className="situations-deco" aria-hidden="true">
            <Squiggle color="#B5523C" width={104} />
            <OutlineStar size={30} color="#d4a373" rotate={-10} />
            <OutlineStar size={22} color="#B5523C" rotate={14} />
          </div>
        </div>

        <ul className="situations-grid">
          {SITUATIONS.map((s, i) => (
            <li key={s}>
              <span className="sit-num">{String(i + 1).padStart(2, '0')}</span>
              {s}
            </li>
          ))}
        </ul>
        <p className="situations-note">
          None of these arrive as a clean brief. That’s the point.
        </p>
      </section>

      {/* ── Reviews ── */}
      <section className="voices" id="voices">
        <div className="voices-head">
          <h2 className="h2">What clients<br />actually say</h2>
          <span className="voices-burst">
            <Starburst label="Real talk" size={94} color="#B5523C" ink="#FFFFFF" />
          </span>
          <div className="voices-side" aria-hidden="true">
            <Squiggle color="#B5523C" width={110} />
            <div className="star-row">
              <OutlineStar size={30} color="#B5523C" rotate={-8} />
              <OutlineStar size={26} color="#d4a373" rotate={10} />
              <OutlineStar size={22} color="#B5523C" rotate={-4} />
            </div>
          </div>
        </div>

        <div className="voices-say" aria-hidden="true">
          <span>Our clients say</span>
          <ScriptArrow color="#0F3D3A" width={96} />
        </div>

        <div className="voices-grid">
          {VOICES.map((v, i) => (
            <StampCard key={v.who} color={v.card} ink={v.ink} rotate={i % 2 ? 2.5 : -2.5}>
              <span className="q-mark" aria-hidden="true">”</span>
              <p className="q-text">{v.quote}</p>
              <footer className="q-who">
                <Avatar from={v.a} to={v.b} seed={i} />
                <span>
                  <strong>{v.who}</strong>
                  <em>{v.role}</em>
                </span>
              </footer>
            </StampCard>
          ))}
        </div>
      </section>

      {/* ── The team ── */}
      <section className="team" id="team">
        <div className="team-head">
          <h2 className="h2 h2--dark">The people<br />behind it.</h2>
          <p className="team-lead">
            Small, senior and hands-on. The people you meet on the call are the
            people doing the work.
          </p>
        </div>

        <div className="team-row">
          {TEAM.map((t) => (
            <TeamCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* ── Pillars on the dark band ── */}
      <section className="pillars" id="pillars">
        <div className="pillars-head">
          <h2 className="h2 h2--dark">Five pillars.<br />One team.</h2>
          <p className="pillars-lead">
            Each one is a different door into the same company. Enter wherever
            you actually are.
          </p>
        </div>

        <div className="pillars-grid">
          {PILLARS.map((p) => (
            <Link key={p.num} className="pillar" to={p.to} style={{ '--pc': p.color, '--pi': p.ink }}>
              <span className="pillar-burst" aria-hidden="true">
                <Starburst label="" size={54} color="#F5F0E7" ink="#0F3D3A" spikes={12} />
              </span>
              <span className="pillar-num">{p.num}</span>
              <h3 className="pillar-name">{p.name}</h3>
              <p className="pillar-desc">{p.desc}</p>
              <span className="pillar-go">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Dark CTA ── */}
      <section className="start" id="contact">
        {/* scattered stickers */}
        <span className="start-deco start-deco--sq" aria-hidden="true">
          <Squiggle color="#466B8A" width={118} />
        </span>
        <span className="start-deco start-deco--a1" aria-hidden="true">
          <BigAsterisk size={30} color="#D4A373" rotate={0} />
        </span>
        <span className="start-deco start-deco--s1" aria-hidden="true">
          <OutlineStar size={30} color="#466B8A" rotate={0} />
        </span>
        <span className="start-deco start-deco--a2" aria-hidden="true">
          <BigAsterisk size={26} color="#D4A373" rotate={15} />
        </span>
        <span className="start-deco start-deco--a3" aria-hidden="true">
          <BigAsterisk size={34} color="#B5523C" rotate={0} />
        </span>
        <span className="start-deco start-deco--smile" aria-hidden="true">
          <SmileyStar size={84} color="#8AAE78" ink="#F5F0E7" rotate={-6} />
        </span>

        <h2 className="start-title">
          <span className="sl">Stop waiting</span>
          <span className="sl">Start building</span>
          <span className="sl sl--gap">
            <span>Your idea</span>
            {/* the cast stands in the gap between the words */}
            <span className="mascot-gap" aria-hidden="true">
              <span className="mg mg--1"><Mascot color="#B5523C" kind={0} size={82} /></span>
              <span className="mg mg--2"><Mascot color="#8aae78" kind={1} size={98} /></span>
              <span className="mg mg--3"><Mascot color="#466B8A" kind={2} size={104} /></span>
              <span className="mg mg--4"><Mascot color="#D4A373" kind={0} size={92} /></span>
              <span className="mg mg--5"><Mascot color="#d4a373" kind={1} size={80} /></span>
            </span>
            <span>Today</span>
          </span>
        </h2>

        <p className="start-sub">
          Bring the idea, the problem,<br />
          or just the question —<br />
          we’ll figure out what comes next.
        </p>

        <Link className="start-cta" to="/contact">
          Book a free call <span aria-hidden="true">→</span>
        </Link>
      </section>

      {/* ── Client wordmarks ── */}
      <Marquee className="logos" items={LOGOS} speed={44} />

      {/* ── Pricing ── */}
      <section className="pricing" id="pricing">
        <div className="pricing-head">
          <span className="eyebrow eyebrow--dark"><i className="eyebrow-dot" />Pricing</span>
          <h2 className="h2 h2--dark">Simple,<br />transparent pricing</h2>
          <p className="pricing-lead">
            Two ways to work with us. Both start with a free call and a fixed
            scope — no hourly surprises, no change-order theatre.
          </p>
        </div>

        <div className="plans">
          {PLANS.map((p) => (
            <article key={p.name} className={`plan${p.best ? ' plan--best' : ''}`}>
              {p.best && <span className="plan-flag">Most teams pick this</span>}
              <h3 className="plan-name">{p.name}</h3>
              <p className="plan-desc">{p.desc}</p>
              <div className="plan-price">
                <span className="plan-num">{p.price}</span>
                <span className="plan-per">{p.per}</span>
              </div>
              <ul className="plan-list">
                {p.includes.map((f) => (
                  <li key={f}>
                    <span className="plan-tick" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link className="plan-cta" to="/contact">Start here →</Link>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          Need something smaller? Single-page builds and audits start at
          <strong> ₹45,000</strong>. <Link to="/contact">Ask.</Link>
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="faq" id="faq">
        <div className="faq-head">
          <span className="eyebrow"><i className="eyebrow-dot" />FAQ</span>
          <h2 className="h2">Quick answers?</h2>
          <Squiggle color="#B5523C" width={120} />
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => (
            <details className={`bubble bubble--${i % 4}`} key={f.q} open={i === 0}>
              <summary className="bubble-q">
                <span>{f.q}</span>
                <i className="bubble-toggle" aria-hidden="true" />
              </summary>
              <p className="bubble-a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="final" id="final">
        <div className="final-collage" aria-hidden="true">
          <div className="fc fc--1"><WorkScene variant={1} /></div>
          <div className="fc fc--2"><WorkScene variant={2} /></div>
          <div className="fc fc--3"><WorkScene variant={0} /></div>
          <span className="fc-badge fc-badge--1"><Seal id="finalseal" text="FREE · 30 MIN · NO PITCH" size={104} color="#0f3d3a" face="#F5F0E7" /></span>
          <span className="fc-badge fc-badge--2"><Starburst label="No brief needed" size={96} color="#d4a373" ink="#0f3d3a" /></span>
        </div>

        <div className="final-copy">
          <h2 className="final-title">Let’s build<br />together</h2>
          <p className="final-lead">
            Tell us the idea, the mess, or the deadline. We’ll tell you what
            we’d do — before you pay for anything.
          </p>
          <div className="final-actions">
            <Link className="btn btn--accent btn--lg" to="/contact">Book a free call →</Link>
            <Link className="btn btn--ghost btn--lg" to="/work">See the work</Link>
          </div>
          <ul className="final-points">
            <li><span aria-hidden="true">✓</span> Free 30-minute call</li>
            <li><span aria-hidden="true">✓</span> Fixed scope, fixed price</li>
            <li><span aria-hidden="true">✓</span> Reply within one day</li>
          </ul>
        </div>
      </section>

    </>
  )
}

export default App
