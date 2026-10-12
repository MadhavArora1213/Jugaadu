import { Link, useLocation } from 'react-router-dom'
import { PILLARS, PILLAR_ORDER } from './data.js'
import { Squiggle, OutlineStar } from './stickers.jsx'

/* ═══ Page shell — sets the accent once for everything inside ═══ */
export function Page({ accent, ink, current, children }) {
  return (
    <div className="pg" style={{ '--pa': accent, '--pn': ink, '--ch': accent }}>
      <PillarRail current={current} />
      {children}
    </div>
  )
}

/* ═══ The five doors — so you always know which part of the
       company you are standing in ═══ */
export function PillarRail({ current }) {
  return (
    <nav className="rail" aria-label="The five pillars">
      <span className="rail-title">One partner.<br />Five ways in.</span>
      <ul className="rail-list">
        {PILLARS.map((p) => {
          const on = p.to === current
          return (
            <li key={p.to}>
              <Link
                to={p.to}
                className={`rail-link${on ? ' is-on' : ''}`}
                style={{ '--rc': p.color, '--ri': p.ink }}
                aria-current={on ? 'page' : undefined}
              >
                <span className="rail-num">{p.num}</span>
                <span className="rail-name">{p.name}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

/* ═══ Page opener ═══ */
export function PageIntro({ eyebrow, title, lead, actions, sticker }) {
  return (
    <section className={`pintro${sticker ? '' : ' pintro--solo'}`}>
      <div className="pintro-copy">
        <span className="eyebrow"><i className="eyebrow-dot" />{eyebrow}</span>
        <h1 className="pintro-title">{title}</h1>
        {lead && <p className="pintro-lead">{lead}</p>}
        {actions && <div className="pintro-actions">{actions}</div>}
      </div>
      {sticker && <div className="pintro-art" aria-hidden="true">{sticker}</div>}
    </section>
  )
}

/* A word carrying the page accent — the ground always flips with it,
   so the pair is legible rather than the colour floating on the sheet. */
export function Mark({ children }) {
  return <mark className="hl">{children}</mark>
}

/* ═══ Section heading ═══ */
export function SectionHead({ eyebrow, title, lead, dark }) {
  return (
    <div className={`shead${dark ? ' shead--dark' : ''}`}>
      {eyebrow && (
        <span className={`eyebrow${dark ? ' eyebrow--on-dark' : ''}`}>
          <i className="eyebrow-dot" />{eyebrow}
        </span>
      )}
      <h2 className={`h2${dark ? ' h2--dark' : ''}`}>{title}</h2>
      {lead && <p className="shead-lead">{lead}</p>}
    </div>
  )
}

/* ═══ The process chain — Idea → Strategy → UX → … ═══ */
export function Chain({ items, caption }) {
  return (
    <div className="chain-wrap">
      {caption && <p className="chain-caption">{caption}</p>}
      <ol className="chain">
        {items.map((item, i) => (
          <li key={item}>
            <span className="chain-i">{String(i + 1).padStart(2, '0')}</span>
            <span className="chain-t">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

/* ═══ Capabilities — hard-edged numbered boxes ═══ */
export function ChipGrid({ items, className = '' }) {
  return (
    <ul className={`chips ${className}`.trim()}>
      {items.map((item, i) => (
        <li key={item}>
          <span className="chip-i">{String(i + 1).padStart(2, '0')}</span>
          <span className="chip-t">{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ═══ Coloured band ═══ */
export function Panel({ tone = 'sand', children, className = '' }) {
  return <section className={`panel panel--${tone} ${className}`.trim()}>{children}</section>
}

/* ═══ Big editorial statement ═══ */
export function PullQuote({ children, cite }) {
  return (
    <figure className="pull">
      <blockquote>{children}</blockquote>
      {cite && <figcaption>{cite}</figcaption>}
    </figure>
  )
}

/* ═══ Closing invitation, identical on every page ═══ */
export function SiteCTA() {
  return (
    <section className="cta">
      <span className="cta-deco cta-deco--a" aria-hidden="true">
        <OutlineStar size={30} color="#D4A373" rotate={-8} />
      </span>
      <span className="cta-deco cta-deco--b" aria-hidden="true">
        <Squiggle color="#466B8A" width={104} />
      </span>

      <h2 className="cta-title">
        You don’t need to have<br />it figured out
      </h2>
      <p className="cta-sub">
        Bring us the idea, the problem, the opportunity —<br />
        or simply the question. We’ll figure out what comes next.
      </p>
      <Link className="btn btn--accent btn--lg" to="/contact">
        Start a conversation →
      </Link>
      <p className="cta-fine">Free 30-minute call · Fixed scope · Reply within a day</p>
    </section>
  )
}

/* ═══ Walk to the neighbouring pillar ═══ */
export function NextDoor() {
  const { pathname } = useLocation()
  const i = PILLAR_ORDER.indexOf(pathname)
  if (i === -1) return null

  const prev = PILLARS[(i - 1 + PILLARS.length) % PILLARS.length]
  const next = PILLARS[(i + 1) % PILLARS.length]

  return (
    <nav className="nextdoor" aria-label="The other pillars">
      <Link className="nd nd--prev" to={prev.to}>
        <span className="nd-k">← {prev.num}</span>
        <span className="nd-n">{prev.name}</span>
      </Link>
      <Link className="nd nd--home" to="/">All five</Link>
      <Link className="nd nd--next" to={next.to}>
        <span className="nd-k">{next.num} →</span>
        <span className="nd-n">{next.name}</span>
      </Link>
    </nav>
  )
}
