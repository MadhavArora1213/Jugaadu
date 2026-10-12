import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, Panel, Chain, Mark, PullQuote, NextDoor, SiteCTA,
} from '../pagekit.jsx'
import { Squiggle, OutlineStar, Sparkle, Checker } from '../stickers.jsx'

const ACCENT = 'var(--pillar-think)'
const INK = 'var(--brand-white)'

const SITUATIONS = [
  '“Should we build this or buy it?”',
  '“Is this actually a good idea?”',
  '“Where should we use AI?”',
  '“Our developer says we need to rebuild everything. Do we?”',
  '“We have a problem but don’t know what the solution is.”',
  '“I have ten ideas. Which one should I pursue?”',
]

const METHOD = [
  'Listen', 'Question', 'Research', 'Challenge', 'Simplify', 'Decide',
]

const SEPARATIONS = [
  ['what matters', 'what doesn’t'],
  ['real opportunity', 'hype'],
  ['important problems', 'distractions'],
  ['what to build', 'what not to build'],
  ['what to do now', 'what can wait'],
]

const HONESTY = [
  'If an idea doesn’t make sense, we’ll tell you.',
  'If you don’t need an app, we’ll tell you.',
  'If AI isn’t the answer, we’ll tell you.',
  'If your existing system can be fixed instead of rebuilt, we’ll tell you.',
  'If there is a bigger opportunity hiding behind the original idea, we’ll show you.',
]

export default function ThinkWithYou() {
  return (
    <Page accent={ACCENT} ink={INK} current="/think-with-you">

      <PageIntro
        eyebrow="05 — Think With You"
        title={<>You don’t always need someone to build. Sometimes you need someone to <Mark>think with</Mark>.</>}
        lead="Not every problem arrives as a clear brief. This is the door for the ones that arrive
          as a sentence you are not sure is finished — because that is where most of the expensive
          decisions actually get made."
        actions={
          <>
            <Link className="btn btn--dark btn--lg" to="/contact">Bring the question →</Link>
            <Link className="btn btn--ghost btn--lg" to="/insights">Read how we think</Link>
          </>
        }
        sticker={
          <>
            <span className="thk-script" aria-hidden="true">hmm.</span>
            <span className="st st--tr">
              <OutlineStar size={44} color="#B5523C" rotate={14} />
            </span>
            <span className="st st--bl">
              <Squiggle color="#0F3D3A" width={118} />
            </span>
            <span className="st st--br">
              <Sparkle size={32} color="#D4A373" rotate={-6} />
            </span>
          </>
        }
      />

      <Checker />

      {/* ── What people actually arrive with ── */}
      <section className="panel">
        <SectionHead
          eyebrow="What people bring us"
          title={<>It rarely arrives<br />as a brief</>}
          lead="Six sentences we have heard more than once. Every one of them was a reasonable reason
            to book a call."
        />
        <ul className="bigquotes">
          {SITUATIONS.map((s) => (
            <li className="bigq" key={s}>
              <i aria-hidden="true">“</i>
              <span>{s.replace(/^“|”$/g, '')}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── What we do with it ── */}
      <Panel tone="sand">
        <div className="cols">
          <SectionHead
            eyebrow="What we do"
            title={<>Listen, then<br />get specific</>}
            lead="Six steps, in order. The expensive part is almost never the building — it is the
              decision that happens before anyone opens a laptop."
          />
          <PullQuote cite="The whole job, in one line">
            Separate what matters from what doesn’t — then decide what to do about it.
          </PullQuote>
        </div>
        <Chain items={METHOD} caption="Listen → Question → Research → Challenge → Simplify → Decide" />
      </Panel>

      {/* ── What we help you separate ── */}
      <section className="panel">
        <SectionHead
          eyebrow="What comes out of it"
          title={<>Five things we<br />take apart</>}
          lead="You do not need to have the perfect brief. You can come to us with the rough version —
            we’ll help you find the clearer one."
        />
        <ul className="pairs">
          {SEPARATIONS.map(([good, bad]) => (
            <li key={good}>
              <b>{good}</b>
              <i>from</i>
              <em>{bad}</em>
            </li>
          ))}
        </ul>
        <p className="note">The rough version is usually more honest than the finished one.</p>
      </section>

      {/* ── Not just a vendor ── */}
      <Panel tone="terracotta">
        <SectionHead
          eyebrow="Not just a vendor"
          title={<>Think of us as who you<br />call before the decision</>}
          dark
          lead="The relationship does not have to begin with a predefined project. Most of the value
            we add happens before anything is scoped."
        />
        <ul className="iflist">
          {HONESTY.map((h) => <li key={h}>{h}</li>)}
        </ul>
        <PullQuote cite="Because our job isn’t to sell you more technology">
          Our job is to help you make better decisions — and then build the right thing.
        </PullQuote>
      </Panel>

      <NextDoor />
      <SiteCTA />
    </Page>
  )
}
