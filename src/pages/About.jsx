import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, Panel, ChipGrid, Mark, PullQuote, SiteCTA,
} from '../pagekit.jsx'
import { TEAM } from '../data.js'
import { TeamCard, Starburst, Sparkle, Squiggle, Checker } from '../stickers.jsx'

const ACCENT = 'var(--brand-charcoal)'
const INK = 'var(--brand-ivory)'

const THINKING = [
  {
    k: '01', t: 'Technology without business understanding is useless',
    x: 'We start with what the business needs to be true, not with a stack we wanted an excuse to use.',
  },
  {
    k: '02', t: 'We don’t build things just because they’re technically possible',
    x: 'The most valuable sentence we say is usually “you don’t need this”. It is also the hardest one.',
  },
  {
    k: '03', t: 'We can enter at any stage',
    x: 'Before the idea, halfway through a build, or three years into something that has stopped working.',
  },
  {
    k: '04', t: 'We can stay after launch',
    x: 'Launch is the start of the useful part. Most of what we know about a product arrives after it ships.',
  },
]

const DONT_BUILD = [
  'Features nobody has asked for',
  'A second system where a rule would do',
  'AI bolted on for the pitch deck',
  'A rewrite of something that still works',
  'Dashboards nobody will open twice',
  'A prototype with no path to production',
]

const WITH_CLIENTS = [
  'You get the people doing the work, on the call.',
  'Scope and price are fixed before anything starts.',
  'You own everything we make — code, accounts, access.',
  'If the plan changes, we say what it costs first.',
  'If we are the wrong fit, we tell you early and name someone better.',
]

export default function About() {
  return (
    <Page accent={ACCENT} ink={INK} current="/about">

      <PageIntro
        eyebrow="About"
        title={<>Businesses don’t need another <Mark>vendor</Mark>.</>}
        lead="They need people who can understand the whole picture — the technology, the market,
          the money and the mess — and hold all four at once. That is the company we wanted to work
          for, so we built it."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Talk to us →</Link>
            <Link className="btn btn--ghost btn--lg" to="/work">See the work</Link>
          </>
        }
        sticker={
          <>
            <Starburst label={'Since\n2024'} size={142} color="#1A1A1A" ink="#F5F0E7" />
            <span className="st st--tr">
              <Sparkle size={36} color="#B5523C" rotate={-12} />
            </span>
            <span className="st st--bl">
              <Squiggle color="#0F3D3A" width={112} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── Why we exist ── */}
      <section className="panel">
        <div className="cols">
          <SectionHead
            eyebrow="Why we exist"
            title={<>The whole<br />picture</>}
            lead="Not a house of specialists who each solve one slice and hand you the coordination
              problem. One team that can follow an idea from the first sentence to the month after
              it launches — and is willing to say when the answer is to do nothing."
          />
          <PullQuote cite="How we describe ourselves to each other">
            A partner you can call before the next big decision — not a supplier you call once the
            decision has already been made badly.
          </PullQuote>
        </div>

        <ul className="principles">
          {THINKING.map((p) => (
            <li key={p.k}>
              <span className="pr-i">{p.k}</span>
              <h3 className="pr-t">{p.t}</h3>
              <p className="pr-x">{p.x}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── The team ── */}
      <Panel tone="dark">
        <SectionHead
          eyebrow="The people"
          title={<>Small, senior,<br />hands-on</>}
          dark
          lead="The people you meet on the call are the people doing the work. Nobody is handed off
            to a delivery team after the signature."
        />
        <div className="team-row">
          {TEAM.map((t) => <TeamCard key={t.name} {...t} />)}
        </div>
      </Panel>

      {/* ── What we don't build ── */}
      <Panel tone="white">
        <SectionHead
          eyebrow="What we believe we shouldn’t build"
          title={<>The list we<br />argue from</>}
          lead="Every one of these has been proposed to us by a client, and every one of them was
            cheaper to say no to than to build."
        />
        <ChipGrid items={DONT_BUILD} />
      </Panel>

      {/* ── How we work with clients ── */}
      <section className="panel">
        <div className="cols">
          <SectionHead
            eyebrow="How we work with clients"
            title={<>Five things you<br />can hold us to</>}
            lead="Not values on a wall. These are the terms that show up in the first email and stay
              in the contract."
          />
          <PullQuote cite="Our position on advice">
            We won’t always tell you what you want to hear. If an idea doesn’t make sense, you will
            hear that from us first.
          </PullQuote>
        </div>

        <ul className="iflist">
          {WITH_CLIENTS.map((w) => <li key={w}>{w}</li>)}
        </ul>
        <p className="note">If none of that sounds like your kind of relationship — good to know early.</p>
      </section>

      <SiteCTA />
    </Page>
  )
}
