import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Page, PageIntro, SectionHead, Panel, Mark, SiteCTA } from '../pagekit.jsx'
import { CASES, CASE_CATEGORIES } from '../data.js'
import { Starburst, OutlineStar, Checker, WorkScene } from '../stickers.jsx'

const ACCENT = 'var(--brand-teal)'
const INK = 'var(--brand-ivory)'

const FILTERS = ['All', ...CASE_CATEGORIES]

export default function Work() {
  const [active, setActive] = useState('All')
  const list = active === 'All' ? CASES : CASES.filter((c) => c.cat === active)

  return (
    <Page accent={ACCENT} ink={INK} current="/work">

      <PageIntro
        eyebrow="Selected work"
        title={<>Not screenshots. <Mark>Decisions</Mark> you can read.</>}
        lead="Every case below is told the same way: the problem, what we discovered, what we decided,
          what we built, and what changed. The middle three are the parts most agencies leave out."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Start yours →</Link>
            <a className="btn btn--ghost btn--lg" href="#cases">Read them</a>
          </>
        }
        sticker={
          <>
            <Starburst label={'8\ncases'} size={140} color="#0F3D3A" ink="#F5F0E7" />
            <span className="st st--tr">
              <OutlineStar size={44} color="#D4A373" rotate={12} />
            </span>
            <span className="st st--bl">
              <OutlineStar size={32} color="#B5523C" rotate={-8} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── The cases ── */}
      <section className="panel" id="cases">
        <SectionHead
          eyebrow="Case studies"
          title={<>Problem →<br />Result</>}
          lead="Filter by the kind of work. Every entry reads in five parts, in the order the work
            actually happened."
        />

        <div className="filters" role="group" aria-label="Filter case studies">
          {FILTERS.map((c) => (
            <button
              key={c}
              type="button"
              className="filter"
              aria-pressed={active === c}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <p className="chain-caption" aria-live="polite">
          Showing {list.length} of {CASES.length} cases
        </p>

        <div className="cases">
          {list.map((c) => (
            <article
              className="case"
              key={c.title}
              style={{ '--wc': c.color, '--wi': c.ink }}
            >
              <div className="case-head">
                <span className="case-tag">{c.tag}</span>
                <h3 className="case-title">{c.title}</h3>
                <div className="case-shot">
                  <WorkScene variant={c.scene} />
                </div>
              </div>

              <ol className="csteps">
                {c.steps.map(([k, v]) => (
                  <li key={k}>
                    <span className="cstep-k">{k}</span>
                    <p className="cstep-v">{v}</p>
                  </li>
                ))}
              </ol>
            </article>
          ))}

          {list.length === 0 && (
            <p className="empty-note">Nothing filed under that one yet — ask us about it.</p>
          )}
        </div>
      </section>

      {/* ── How we talk about work ── */}
      <Panel tone="dark">
        <SectionHead
          eyebrow="A note on results"
          title={<>Numbers without<br />a story are noise</>}
          dark
          lead="A percentage on its own tells you nothing about whether it would apply to you. Every
            figure above has the decision that produced it sitting right underneath — that is the
            part worth stealing."
        />
      </Panel>

      <SiteCTA />
    </Page>
  )
}
