import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, Panel, ChipGrid, Chain, Mark, PullQuote, NextDoor, SiteCTA,
} from '../pagekit.jsx'
import { Starburst, Sparkle, Squiggle, Checker } from '../stickers.jsx'

const ACCENT = 'var(--pillar-grow)'
const INK = 'var(--brand-charcoal)'

const SERVICES = [
  'Digital Marketing',
  'Performance Marketing',
  'Content & Social',
  'Conversion Optimization',
  'Analytics',
  'Growth Strategy',
]

const CHAIN = [
  'Traffic', 'Experience', 'Conversion', 'Data', 'Retention', 'Growth',
]

const SIDES = [
  {
    k: '01', t: 'Product feeds the marketing',
    x: 'Speed, clarity and a checkout that works are worth more than any campaign. We fix the experience before we pour traffic into it.',
  },
  {
    k: '02', t: 'Marketing feeds the product',
    x: 'What people search for, abandon and ask support about is the most honest research you will ever get. It goes back into the roadmap.',
  },
  {
    k: '03', t: 'One number, agreed in advance',
    x: 'Before spend begins we decide what a conversion is, where it is counted and what would make us stop. No mid-flight arguments.',
  },
]

export default function Grow() {
  return (
    <Page accent={ACCENT} ink={INK} current="/grow">

      <PageIntro
        eyebrow="03 — Grow"
        title={<>Technology should do more than exist. It should <Mark>move the business</Mark> forward.</>}
        lead="A great product means little if nobody finds it, trusts it or buys from it. We build
          the systems and strategies that turn digital presence into measurable growth — and we tie
          them back to the product instead of running them as a separate world."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Find the leaks →</Link>
            <Link className="btn btn--ghost btn--lg" to="/work">See a campaign</Link>
          </>
        }
        sticker={
          <>
            <Starburst label={'Compounding'} size={148} color="#8AAE78" ink="#1A1A1A" />
            <span className="st st--tr">
              <Squiggle color="#B5523C" width={110} />
            </span>
            <span className="st st--bl">
              <Sparkle size={34} color="#466B8A" rotate={-10} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── What we do ── */}
      <Panel tone="sand">
        <SectionHead
          eyebrow="What we do"
          title={<>Turn technology into<br />business growth</>}
          lead="Six disciplines that usually sit in three different agencies. Here they share one
            dashboard and one definition of success."
        />
        <ChipGrid items={SERVICES} />
      </Panel>

      {/* ── The chain ── */}
      <section className="panel">
        <SectionHead
          eyebrow="The loop"
          title={<>Not marketing.<br />A circuit.</>}
          lead="Traffic alone is a cost. What makes it growth is everything that happens after the
            click — and whether the data comes back around to change what you do next."
        />
        <Chain items={CHAIN} caption="Traffic → Experience → Conversion → Data → Retention → Growth" />
        <p className="note">Run any one of these on its own and the others quietly stop working.</p>
      </section>

      {/* ── Product ↔ marketing ── */}
      <Panel tone="dark">
        <div className="cols">
          <SectionHead
            eyebrow="Why it fits here"
            title={<>One team,<br />two sides</>}
            dark
            lead="Most growth problems are product problems wearing a marketing costume. Because we
              sit on both sides of it, we can tell the difference before you spend anything."
          />
          <PullQuote cite="The argument for keeping them together">
            The landing page, the app behind it and the email that follows should be made by people
            who talk to each other every morning.
          </PullQuote>
        </div>

        <ul className="principles">
          {SIDES.map((s) => (
            <li key={s.k}>
              <span className="pr-i">{s.k}</span>
              <h3 className="pr-t">{s.t}</h3>
              <p className="pr-x">{s.x}</p>
            </li>
          ))}
        </ul>
      </Panel>

      <NextDoor />
      <SiteCTA />
    </Page>
  )
}
