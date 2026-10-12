import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, Panel, ChipGrid, Mark, PullQuote, NextDoor, SiteCTA,
} from '../pagekit.jsx'
import { Starburst, OutlineStar, Sparkle, Checker } from '../stickers.jsx'

const ACCENT = 'var(--pillar-modernize)'
const INK = 'var(--brand-white)'

const SERVICES = [
  'Legacy Modernization',
  'System Integrations',
  'Workflow Automation',
  'Data & Intelligence',
  'AI Enablement',
  'Technology Operations',
]

/* Keep. Replace. Connect. Automate. — how we read an existing environment.
   Each verb carries its own ink because sage and brass cannot carry text. */
const VERDICTS = [
  {
    k: 'K', t: 'Keep', kc: 'var(--brand-teal)', ki: 'var(--brand-ivory)',
    x: 'Parts that still earn their keep stay exactly where they are. Rewriting something that works is how projects die.',
  },
  {
    k: 'R', t: 'Replace', kc: 'var(--brand-terracotta)', ki: 'var(--brand-white)',
    x: 'The module nobody wants to open. The one thing the business has learned to work around for years.',
  },
  {
    k: 'C', t: 'Connect', kc: 'var(--brand-indigo)', ki: 'var(--brand-white)',
    x: 'What has become fragmented — systems that each hold a piece of the truth and never compare notes.',
  },
  {
    k: 'A', t: 'Automate', kc: 'var(--brand-sage)', ki: 'var(--brand-charcoal)',
    x: 'The work people do only because the tools will not. Usually the cheapest win in the whole exercise.',
  },
]

export default function Modernize() {
  return (
    <Page accent={ACCENT} ink={INK} current="/modernize">

      <PageIntro
        eyebrow="02 — Modernize"
        title={<>Your business doesn’t need to start over. It needs to <Mark>move forward</Mark>.</>}
        lead="Your business doesn’t always need a complete rebuild. We understand what already
          exists, find what is holding it back, and modernize it without unnecessary disruption —
          keeping what works, fixing what doesn’t, connecting what has become fragmented."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Review my stack →</Link>
            <Link className="btn btn--ghost btn--lg" to="/work">See a migration</Link>
          </>
        }
        sticker={
          <>
            <Starburst label={'No\nrip-out'} size={142} color="#466B8A" ink="#FFFFFF" />
            <span className="st st--tr">
              <OutlineStar size={46} color="#D4A373" rotate={12} />
            </span>
            <span className="st st--bl">
              <Sparkle size={34} color="#B5523C" rotate={-8} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── What we do ── */}
      <Panel tone="white">
        <SectionHead
          eyebrow="What we do"
          title={<>Make existing<br />technology work better</>}
          lead="Six ways into a system that is already carrying the business. None of them begin
            with the word “rewrite”."
        />
        <ChipGrid items={SERVICES} />
      </Panel>

      {/* ── Keep. Replace. Connect. Automate. ── */}
      <section className="panel">
        <div className="cols">
          <SectionHead
            eyebrow="The evaluation"
            title={<>Keep. Replace.<br />Connect. Automate.</>}
            lead="Before anything is proposed, we read the environment as it actually is. Every part
              gets one of four verdicts — and “keep” is usually the longest list."
          />
          <PullQuote cite="How we scope a modernization">
            We are not here to sell you more technology. We are here to make sure the technology
            you already pay for is doing its job.
          </PullQuote>
        </div>

        <div className="krc">
          {VERDICTS.map((v) => (
            <article className="krc-card" key={v.t} style={{ '--kc': v.kc, '--ki': v.ki }}>
              <span className="krc-badge" aria-hidden="true">{v.k}</span>
              <h3 className="krc-t">{v.t}</h3>
              <p className="krc-x">{v.x}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Where this is heading ── */}
      <Panel tone="indigo">
        <SectionHead
          eyebrow="Where this goes"
          title={<>Your own<br />digital DNA</>}
          dark
          lead="Modernization is not a project with an end date. It is the slow work of leaving a
            business with systems it understands, can change, and is not hostage to."
        />
        <ul className="principles">
          <li>
            <span className="pr-i">01</span>
            <h3 className="pr-t">Independence, not dependency</h3>
            <p className="pr-x">Documentation, handover and a team that can move without us are
              part of the scope, not a favour asked for at the end.</p>
          </li>
          <li>
            <span className="pr-i">02</span>
            <h3 className="pr-t">Change in slices</h3>
            <p className="pr-x">Every step ships, works and can be rolled back. The business never
              waits for one dramatic weekend.</p>
          </li>
          <li>
            <span className="pr-i">03</span>
            <h3 className="pr-t">Boring where it counts</h3>
            <p className="pr-x">We spend novelty where it differentiates you and choose dull,
              proven tooling everywhere else.</p>
          </li>
        </ul>
      </Panel>

      <NextDoor />
      <SiteCTA />
    </Page>
  )
}
