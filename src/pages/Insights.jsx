import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, Panel, Mark, PullQuote, SiteCTA,
} from '../pagekit.jsx'
import { Starburst, Sparkle, OutlineStar, Checker } from '../stickers.jsx'

const ACCENT = 'var(--brand-indigo)'
const INK = 'var(--brand-white)'

const TOPICS = [
  'AI', 'Technology modernization', 'Startups', 'Product strategy',
  'Business technology', 'Automation', 'Digital growth', 'Founder lessons',
]

const POSTS = [
  {
    t: 'AI', x: 'Your data, not the demo', read: '6 min',
    s: 'Most “AI pilots” fail on retrieval, not on the model. What has to be true before anything clever is worth building.',
  },
  {
    t: 'Modernization', x: 'The strangler fig, in plain language', read: '8 min',
    s: 'How to replace a system a business depends on without ever taking it down — and when that advice is wrong.',
  },
  {
    t: 'Product strategy', x: 'Ten ideas, one market', read: '5 min',
    s: 'A three-week process for killing nine of your ideas cheaply, before they become three months of code.',
  },
  {
    t: 'Founder lessons', x: 'Build or buy is the wrong question', read: '7 min',
    s: 'The decision underneath that one is usually about control, cost of change, and how fast you expect to be wrong.',
  },
  {
    t: 'Automation', x: 'Automate last', read: '4 min',
    s: 'Why the process almost always needs fixing before the tool does, and how to tell which one you actually have.',
  },
  {
    t: 'Digital growth', x: 'One definition of a conversion', read: '6 min',
    s: 'Three channels, three numbers, one argument nobody can win. Agreeing the number before spend is the cheapest fix.',
  },
  {
    t: 'Startups', x: 'The concierge version first', read: '5 min',
    s: 'Do the thing by hand for eleven customers before you write the thing that does it for eleven thousand.',
  },
  {
    t: 'Business technology', x: 'What you should own outright', read: '6 min',
    s: 'Accounts, repositories, domains, data. A short list of things that should never belong to your vendor.',
  },
]

export default function Insights() {
  return (
    <Page accent={ACCENT} ink={INK} current="/insights">

      <PageIntro
        eyebrow="Insights"
        title={<>Writing down what we <Mark>actually think</Mark>.</>}
        lead="Think With You and Venture Build both run on credibility, and credibility does not come
          from a services page. This is where we put the arguments — including the ones that tell you
          not to hire us."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Argue with us →</Link>
            <Link className="btn btn--ghost btn--lg" to="/think-with-you">How we think</Link>
          </>
        }
        sticker={
          <>
            <Starburst label={'Notes'} size={140} color="#466B8A" ink="#FFFFFF" />
            <span className="st st--tr">
              <OutlineStar size={42} color="#D4A373" rotate={12} />
            </span>
            <span className="st st--bl">
              <Sparkle size={34} color="#B5523C" rotate={-10} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── Topics ── */}
      <section className="panel">
        <SectionHead
          eyebrow="What we write about"
          title={<>Eight things we<br />have opinions on</>}
          lead="Written by the people doing the work, not by a content calendar. New pieces when we
            have something worth saying."
        />
        <ul className="filters filters--static" aria-label="Topics we write about">
          {TOPICS.map((t) => <li className="filter" key={t}>{t}</li>)}
        </ul>
      </section>

      {/* ── The pieces ── */}
      <section className="panel" style={{ paddingTop: 0 }}>
        <div className="posts">
          {POSTS.map((p) => (
            <article className="post" key={p.x}>
              <div className="post-k">
                <b>{p.t}</b>
                <span>{p.read}</span>
              </div>
              <h3 className="post-t">{p.x}</h3>
              <p className="post-x">{p.s}</p>
              <p className="post-f">Jugaadu field notes</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Why we publish ── */}
      <Panel tone="indigo">
        <SectionHead
          eyebrow="Why bother"
          title={<>If we can’t explain<br />it, we don’t get it</>}
          dark
          lead="Writing is the cheapest test of whether we understand something. Half these pieces
            started as an argument in the room that nobody could settle until it was written out."
        />
        <PullQuote cite="What a good piece does">
          It should change one decision you were about to make — or convince you the decision can
          wait.
        </PullQuote>
      </Panel>

      <SiteCTA />
    </Page>
  )
}
