import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Page, PageIntro, SectionHead, SiteCTA, Mark,
} from '../pagekit.jsx'
import { Starburst, Sparkle, Checker, Squiggle } from '../stickers.jsx'

const ACCENT = 'var(--pillar-think)'
const INK = 'var(--brand-white)'

const OPTIONS = [
  { k: '01', id: 'build', t: 'I want to build something', x: 'A site, an app, a platform, something that does not exist yet.' },
  { k: '02', id: 'modernize', t: 'I need to modernize something', x: 'A system that exists today and is holding the business back.' },
  { k: '03', id: 'grow', t: 'I want to grow my business', x: 'Traffic, conversion, retention — the numbers that matter.' },
  { k: '04', id: 'venture', t: 'I want to start a company', x: 'Ambition without a shape yet. That is a real starting point.' },
  { k: '05', id: 'think', t: 'I have an idea and need someone to think with', x: 'A question more than a brief.' },
  { k: '06', id: 'unsure', t: 'I’m not sure yet', x: 'Perfectly reasonable. Start here.' },
]

const COMMON = [
  { name: 'name', label: 'Your name', type: 'text', required: true, auto: 'name' },
  { name: 'email', label: 'Email', type: 'email', required: true, auto: 'email' },
  { name: 'company', label: 'Company (optional)', type: 'text', auto: 'organization' },
]

/* only the questions that make sense for the door they walked through */
const EXTRA = {
  build: [
    { name: 'what', label: 'What are you building?', type: 'select', required: true,
      options: ['A website', 'A web application', 'A mobile app', 'Something with AI', 'A SaaS platform', 'Not sure yet'] },
    { name: 'stage', label: 'Stage', type: 'select', required: true,
      options: ['Just an idea', 'A prototype exists', 'An MVP is live', 'Already in market'] },
    { name: 'timeline', label: 'When does it need to be live?', type: 'text', ph: 'e.g. before the festival season' },
  ],
  modernize: [
    { name: 'system', label: 'What exists today?', type: 'text', required: true,
      ph: 'e.g. a nine-year-old ERP, five tools, a lot of spreadsheets' },
    { name: 'pain', label: 'What is slowing the business down?', type: 'textarea', required: true,
      ph: 'The honest version is more useful than the polished one.' },
  ],
  grow: [
    { name: 'channels', label: 'Where do you market today?', type: 'text', ph: 'Search, social, email, sales team…' },
    { name: 'goal', label: 'The one number that matters', type: 'select', required: true,
      options: ['Traffic', 'Leads', 'Sales', 'Retention', 'Not sure yet'] },
    { name: 'budget', label: 'Monthly budget range', type: 'select',
      options: ['Under ₹50,000', '₹50k – ₹2L', '₹2L – ₹5L', '₹5L+', 'Not decided'] },
  ],
  venture: [
    { name: 'starting', label: 'Where are you starting from?', type: 'select', required: true,
      options: ['I know the industry', 'I see a problem', 'I have an idea', 'Ten ideas, no idea which'] },
    { name: 'team', label: 'Do you have a team yet?', type: 'select',
      options: ['Just me', 'Me and a co-founder', 'A small team', 'Nobody yet'] },
  ],
  think: [
    { name: 'question', label: 'The question, in your own words', type: 'textarea', required: true,
      ph: 'Rough is fine. That is the whole point of this door.' },
    { name: 'deadline', label: 'When does the decision need to be made?', type: 'text' },
  ],
  unsure: [
    { name: 'anything', label: 'Whatever is on your mind', type: 'textarea', required: true },
  ],
}

const LABELS = {
  name: 'Name', email: 'Email', company: 'Company', what: 'Building', stage: 'Stage',
  timeline: 'Timeline', system: 'Exists today', pain: 'Slowing down',
  channels: 'Channels', goal: 'Goal', budget: 'Budget', starting: 'Starting from',
  team: 'Team', question: 'Question', deadline: 'Decision by', anything: 'Note',
}

function Field({ f }) {
  const id = `f-${f.name}`
  return (
    <label className="field" htmlFor={id}>
      <span>
        {f.label}
        {f.required && <b className="req" aria-hidden="true">*</b>}
      </span>
      {f.type === 'textarea' && (
        <textarea id={id} name={f.name} required={f.required} placeholder={f.ph} />
      )}
      {f.type === 'select' && (
        <select id={id} name={f.name} required={f.required} defaultValue="">
          <option value="" disabled>Choose one…</option>
          {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
      {(f.type === 'text' || f.type === 'email') && (
        <input
          id={id} name={f.name} type={f.type} required={f.required}
          placeholder={f.ph} autoComplete={f.auto}
        />
      )}
    </label>
  )
}

export default function Contact() {
  const [door, setDoor] = useState('')
  const [sent, setSent] = useState('')

  const chosen = OPTIONS.find((o) => o.id === door)
  const fields = EXTRA[door] || []

  function handleSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    const lines = [`Door: ${chosen ? chosen.t : 'Not sure yet'}`, '']
    for (const [k, v] of fd.entries()) {
      if (!v || k === 'door') continue
      lines.push(`${LABELS[k] || k}: ${v}`)
    }
    const body = lines.join('\n')
    const subject = `Jugaadu — ${chosen ? chosen.t : 'New conversation'}`

    setSent(body)
    window.location.href =
      `mailto:hello@jugaadu.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <Page accent={ACCENT} ink={INK} current="/contact">

      <PageIntro
        eyebrow="Start a conversation"
        title={<>What are you trying to <Mark>figure out</Mark>?</>}
        lead="Not name, email, message, submit. Tell us which door you are standing at and we will
          ask only the questions that apply to it — then answer within a day, usually with something
          you can act on whether or not you hire us."
        sticker={
          <>
            <Starburst label={'Free\n30 min'} size={142} color="#B5523C" ink="#FFFFFF" />
            <span className="st st--tr">
              <Sparkle size={34} color="#466B8A" rotate={-10} />
            </span>
            <span className="st st--bl">
              <Squiggle color="#0F3D3A" width={112} />
            </span>
          </>
        }
      />

      <Checker />

      <section className="panel">
        <div className="cols">
          <SectionHead
            eyebrow="Step one"
            title={<>Pick the door<br />that fits</>}
            lead="You can change your mind halfway through. Nothing here is sent until you press the
              button at the bottom."
          />
          <div className="aside-card">
            <h3>What happens next</h3>
            <ol>
              <li>You pick a door and tell us the situation in your words.</li>
              <li>We read it properly and reply within one working day.</li>
              <li>If it is a fit, we book thirty minutes — free, no deck, no pitch.</li>
              <li>You leave with a next step, whether or not you work with us.</li>
            </ol>
          </div>
        </div>

        <fieldset className="opts">
          <legend className="opts-legend">What are you trying to figure out?</legend>
          {OPTIONS.map((o, i) => (
            <label className="opt" key={o.id}>
              <input
                type="radio"
                name="door"
                value={o.t}
                checked={door === o.id}
                onChange={() => setDoor(o.id)}
                required={i === 0}
              />
              <span>
                <span className="opt-k">{o.k}</span>
                <span className="opt-t">{o.t}</span>
                <span className="opt-x">{o.x}</span>
              </span>
            </label>
          ))}
        </fieldset>

        {sent ? (
          <div className="sent" role="status">
            <h3>That’s on its way</h3>
            <p>
              Your mail app should have opened with everything filled in. If nothing happened,
              copy the note below and send it to <code>hello@jugaadu.in</code> — we reply within
              one working day.
            </p>
            <pre className="sent-body">{sent}</pre>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            {fields.length > 0 && (
              <p className="chain-caption">
                Just the questions that apply to “{chosen ? chosen.t : ''}”
              </p>
            )}

            <div className="form-row">
              {fields.filter((f) => f.type !== 'textarea').map((f) => <Field key={f.name} f={f} />)}
            </div>
            {fields.filter((f) => f.type === 'textarea').map((f) => <Field key={f.name} f={f} />)}

            <div className="form-row">
              {COMMON.map((f) => <Field key={f.name} f={f} />)}
            </div>

            <div className="form-foot">
              <button className="btn btn--accent btn--lg" type="submit">
                Send it over →
              </button>
              <p className="form-fine">
                No list, no sequence, no CRM nurture. One human, one reply.
              </p>
            </div>
          </form>
        )}

        <p className="note">
          Prefer to skip the form? <Link to="/work">Read a case</Link> or write to us directly.
        </p>
      </section>

      <SiteCTA />
    </Page>
  )
}
