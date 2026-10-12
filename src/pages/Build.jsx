import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, Panel, ChipGrid, Chain, Mark, NextDoor, SiteCTA,
} from '../pagekit.jsx'
import { Starburst, Sparkle, ScallopTag, Checker } from '../stickers.jsx'

const ACCENT = 'var(--pillar-build)'
const INK = 'var(--brand-ivory)'

const SERVICES = [
  'Websites & Digital Experiences',
  'Web Applications',
  'Custom Software',
  'Mobile Applications',
  'AI Products',
  'SaaS Platforms',
]

const CAN_BUILD = [
  'New product',
  'Internal business software',
  'Customer-facing platform',
  'AI-powered application',
  'MVP',
  'Digital experience',
]

const PROCESS = [
  'Idea', 'Strategy', 'UX', 'Design', 'Engineering', 'Launch', 'Scale',
]

export default function Build() {
  return (
    <Page accent={ACCENT} ink={INK} current="/build">

      <PageIntro
        eyebrow="01 — Build"
        title={<>We turn ideas into products people can <Mark>actually use</Mark>.</>}
        lead="From a first MVP to a production-ready platform, we take products from concept to
          reality — strategy, design, engineering and launch under one roof."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Start a build →</Link>
            <Link className="btn btn--ghost btn--lg" to="/work">See the work</Link>
          </>
        }
        sticker={
          <>
            <Starburst label={'Ship\nsomething'} size={142} color="#0F3D3A" ink="#F5F0E7" />
            <span className="st st--tr">
              <ScallopTag color="#8AAE78" ink="#0F3D3A" rotate={7}>MVP in weeks</ScallopTag>
            </span>
            <span className="st st--bl">
              <Sparkle size={36} color="#B5523C" rotate={-12} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── What we do ── */}
      <Panel tone="sand">
        <SectionHead
          eyebrow="What we do"
          title={<>Design and build,<br />end to end</>}
          lead="We design and build the technology businesses need to launch, operate and grow —
            one team from the first sketch to the first thousand users."
        />
        <ChipGrid items={SERVICES} />
      </Panel>

      {/* ── What we can build ── */}
      <section className="panel">
        <div className="cols">
          <SectionHead
            eyebrow="Scope"
            title={<>What we<br />can build</>}
            lead="The shape of the thing matters less than whether it earns its place. These are the
              six that come up most often."
          />
          <ul className="ladder">
            {CAN_BUILD.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
        <p className="note">Not sure which one you have? Good — bring it anyway.</p>
      </section>

      {/* ── How it runs ── */}
      <Panel tone="dark">
        <SectionHead
          eyebrow="How it runs"
          title={<>Idea to scale</>}
          dark
          lead="Seven stages, no mystery. You always know which one we are in and what leaves it."
        />
        <Chain items={PROCESS} caption="The whole path, in order" />
      </Panel>

      <NextDoor />
      <SiteCTA />
    </Page>
  )
}
