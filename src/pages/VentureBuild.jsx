import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, Panel, ChipGrid, Chain, Mark, PullQuote, NextDoor, SiteCTA,
} from '../pagekit.jsx'
import { Starburst, ScallopTag, Sparkle, Checker } from '../stickers.jsx'

const ACCENT = 'var(--pillar-venture)'
const INK = 'var(--brand-charcoal)'

const PATH = [
  'Ambition', 'Opportunity', 'Idea', 'Validation', 'Business Model',
  'Product', 'Team', 'Launch',
]

const SERVICES = [
  'Market Research',
  'Opportunity Discovery',
  'Idea Validation',
  'Business Model',
  'Product Strategy',
  'MVP',
  'Technology',
  'Launch',
  'Growth',
  'Founding Team Support',
]

const OPENINGS = [
  '“I want to build something.”',
  '“I see a problem.”',
  '“I have an idea.”',
  '“I don’t know which market to enter.”',
  '“I have ten ideas and don’t know which one matters.”',
]

export default function VentureBuild() {
  return (
    <Page accent={ACCENT} ink={INK} current="/venture-build">

      <PageIntro
        eyebrow="04 — Venture Build"
        title={<>You want to build a company. You don’t need the whole idea <Mark>figured out</Mark>.</>}
        lead="You bring the ambition. We help build the company — research the opportunity, challenge
          the assumptions, validate the market, and build the product beside you. For selected
          ventures we work alongside the founder as a long-term technology and execution partner."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Bring the rough version →</Link>
            <Link className="btn btn--ghost btn--lg" to="/think-with-you">Think it through first</Link>
          </>
        }
        sticker={
          <>
            <Starburst label={'Day\nzero'} size={142} color="#D4A373" ink="#1A1A1A" />
            <span className="st st--tr">
              <ScallopTag color="#B5523C" ink="#FFFFFF" rotate={8}>No deck needed</ScallopTag>
            </span>
            <span className="st st--bl">
              <Sparkle size={34} color="#0F3D3A" rotate={-10} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── The path ── */}
      <Panel tone="sand">
        <SectionHead
          eyebrow="We help you go from"
          title={<>Ambition<br />to launch</>}
          lead="Eight stages, and you do not need to arrive at the first one with anything but the
            will to start."
        />
        <Chain items={PATH} caption="The whole way from wanting to building" />
      </Panel>

      {/* ── What we do ── */}
      <section className="panel">
        <SectionHead
          eyebrow="What we do"
          title={<>Everything between<br />an idea and a company</>}
          lead="Ten things that usually get split across a consultant, a designer, a developer, an
            agency and a lawyer who all meet each other for the first time at your expense."
        />
        <ChipGrid items={SERVICES} />
      </section>

      {/* ── You don't bring us a finished startup ── */}
      <Panel tone="dark">
        <div className="cols">
          <SectionHead
            eyebrow="How it actually starts"
            title={<>You don’t bring us a<br />finished startup</>}
            dark
            lead="Bring whichever one of these you have. All of them are a legitimate place to begin,
              and none of them is too early."
          />
          <ul className="ladder" style={{ '--pa': 'var(--brand-brass)' }}>
            {OPENINGS.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>

        <PullQuote cite="And then">
          That’s enough to start.
        </PullQuote>
      </Panel>

      <NextDoor />
      <SiteCTA />
    </Page>
  )
}
