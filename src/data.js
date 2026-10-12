/* ── Shared site data: navigation, pillars, case studies ────────────────────
 * Pure data — no components, so it can be imported anywhere safely.
 * Colour values are token references, never raw hex.                */

/* The primary navigation. Home is reached through the logo. */
export const NAV = [
  { label: 'Build', to: '/build' },
  { label: 'Modernize', to: '/modernize' },
  { label: 'Grow', to: '/grow' },
  { label: 'Venture Build', to: '/venture-build' },
  { label: 'Think With You', to: '/think-with-you' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
]

/* The five pillars — the spine of the whole site. */
export const PILLARS = [
  {
    num: '01', name: 'Think With You', short: 'Think', to: '/think-with-you',
    desc: 'Clarity, strategy and the right next move — before anything gets built.',
    line: 'Turn uncertainty into a clear next move.',
    color: 'var(--pillar-think)', ink: 'var(--brand-white)', ground: 'var(--brand-sand)',
  },
  {
    num: '02', name: 'Venture Build', short: 'Venture', to: '/venture-build',
    desc: 'From a rough idea to a validated company, with us beside you.',
    line: 'Turn opportunities into companies.',
    color: 'var(--pillar-venture)', ink: 'var(--brand-charcoal)', ground: 'var(--brand-sand)',
  },
  {
    num: '03', name: 'Build', short: 'Build', to: '/build',
    desc: 'Websites, web apps, mobile, AI products and SaaS platforms.',
    line: 'Create what doesn’t exist.',
    color: 'var(--pillar-build)', ink: 'var(--brand-ivory)', ground: 'var(--brand-sand)',
  },
  {
    num: '04', name: 'Modernize', short: 'Modernize', to: '/modernize',
    desc: 'Keep what works, fix what doesn’t, connect what fragmented.',
    line: 'Improve what already exists.',
    color: 'var(--pillar-modernize)', ink: 'var(--brand-white)', ground: 'var(--brand-white)',
  },
  {
    num: '05', name: 'Grow', short: 'Grow', to: '/grow',
    desc: 'Marketing, conversion and analytics tied back to the product.',
    line: 'Turn technology into business results.',
    color: 'var(--pillar-grow)', ink: 'var(--brand-charcoal)', ground: 'var(--brand-sand)',
  },
]

/* Prev / next walking through the five pillars in order. */
export const PILLAR_ORDER = PILLARS.map((p) => p.to)

/* The people. Placeholder faces until real portraits arrive. */
export const TEAM = [
  { name: 'Ananya Rao', role: 'Design Lead', color: 'var(--brand-terracotta)', ink: 'var(--brand-white)', seed: 0, tilt: -1.5, corner: 'var(--brand-brass)', short: true },
  { name: 'Vikram Singh', role: 'Engineering', color: 'var(--brand-brass)', ink: 'var(--brand-charcoal)', seed: 4, tilt: 1, corner: 'var(--brand-terracotta)', tall: true },
  { name: 'Meera Iyer', role: 'Strategy', color: 'var(--brand-indigo)', ink: 'var(--brand-ivory)', seed: 3, tilt: -1, corner: 'var(--brand-sage)', frame: 'var(--brand-ivory)', tall: true },
  { name: 'Arjun Nair', role: 'Product', color: 'var(--brand-sage)', ink: 'var(--brand-charcoal)', seed: 1, tilt: 1.5, corner: 'var(--brand-indigo)' },
  { name: 'Sara Khan', role: 'Growth', color: 'var(--brand-sand)', ink: 'var(--brand-teal)', seed: 5, tilt: -1, corner: 'var(--brand-terracotta)', short: true },
  { name: 'Dev Patel', role: 'Founder', color: 'var(--brand-teal)', ink: 'var(--brand-sand)', seed: 2, tilt: 1, corner: 'var(--brand-brass)', tall: true, frame: 'var(--brand-ivory)' },
  { name: 'Rhea Kapoor', role: 'Frontend', color: 'var(--brand-charcoal)', ink: 'var(--brand-sand)', seed: 6, tilt: -1, corner: 'var(--brand-sage)' },
  { name: 'Imran Sheikh', role: 'Data & AI', color: 'var(--accent-deep)', ink: 'var(--brand-white)', seed: 7, tilt: 1.5, corner: 'var(--brand-brass)', short: true },
]

/* ── Case studies — problem → discovered → decided → built → result ──────── */
export const CASE_CATEGORIES = [
  'Website projects',
  'AI projects',
  'Software',
  'Modernization',
  'Automation',
  'Marketing & growth',
  'Venture projects',
]

export const CASES = [
  {
    cat: 'Website projects',
    tag: 'E-commerce', title: 'Rebuilding around the checkout',
    color: 'var(--brand-terracotta)', ink: 'var(--brand-white)',
    accent: 'var(--brand-brass)', scene: 0,
    steps: [
      ['The problem', 'A D2C brand was selling well and losing cart. On mobile, most people reached the payment step and left.'],
      ['What we discovered', 'The storefront was three systems stitched together — theme, cart, analytics. Every stitch added two seconds, and two seconds was the whole conversion gap.'],
      ['What we decided', 'Keep the brand, replace the plumbing. We rebuilt around the checkout instead of around the homepage.'],
      ['What we built', 'A new front end, one address form, wallet payments, and an order page the support team could actually read.'],
      ['Result', 'Checkout completion up 31% in six weeks. “Where is my order?” tickets down by half.'],
    ],
  },
  {
    cat: 'Website projects',
    tag: 'Corporate', title: 'Twenty-two pages, one story',
    color: 'var(--brand-sage)', ink: 'var(--brand-charcoal)',
    accent: 'var(--brand-terracotta)', scene: 1,
    steps: [
      ['The problem', 'Twenty-two pages of legacy copy that had accumulated for six years. Nobody could say what the company actually did.'],
      ['What we discovered', 'Fourteen pages were describing the same three services. The real differentiator was buried on page nineteen.'],
      ['What we decided', 'Rewrite before redesign. A new structure first, then the visual system.'],
      ['What we built', 'A nine-page site, a plain-language service index, and a content model the team can extend without us.'],
      ['Result', 'Relaunched in six weeks. Enquiry quality changed before enquiry volume did.'],
    ],
  },
  {
    cat: 'AI projects',
    tag: 'Operations', title: 'An assistant that knows the manual',
    color: 'var(--brand-indigo)', ink: 'var(--brand-ivory)',
    accent: 'var(--brand-sage)', scene: 3,
    steps: [
      ['The problem', 'A services firm had 340 pages of internal process documents and a support team that searched them by memory.'],
      ['What we discovered', 'Nobody needed a chatbot. They needed one search box that answered in a sentence and linked to the source.'],
      ['What we decided', 'No conversational theatre. Retrieval over their own documents, with the citation always visible.'],
      ['What we built', 'A scoped assistant over their internal wiki, with confidence thresholds and a hard “I don’t know”.'],
      ['Result', 'First-line resolution time cut from hours to minutes, and every answer can be traced back to a document.'],
    ],
  },
  {
    cat: 'Software',
    tag: 'Internal tools', title: 'Software for the way the team works',
    color: 'var(--brand-teal)', ink: 'var(--brand-sand)',
    accent: 'var(--brand-brass)', scene: 2,
    steps: [
      ['The problem', 'A distributor ran the business across six spreadsheets, one shared inbox and a WhatsApp group. It worked until it didn’t.'],
      ['What we discovered', 'The process was sound. Only one step genuinely needed software; the rest just needed to stop being re-typed.'],
      ['What we decided', 'One internal system, built to the existing workflow rather than to a vendor’s idea of one.'],
      ['What we built', 'Orders, stock and invoicing in one place, with the exports their accountant still expects.'],
      ['Result', 'The re-keying disappeared. Onboarding a new operator went from three weeks to four days.'],
    ],
  },
  {
    cat: 'Modernization',
    tag: 'Legacy', title: 'Modernizing without stopping',
    color: 'var(--brand-brass)', ink: 'var(--brand-charcoal)',
    accent: 'var(--brand-teal)', scene: 1,
    steps: [
      ['The problem', 'A twelve-year-old system still ran the core business. Everyone agreed it had to go. Nobody could afford the month it would take to replace it.'],
      ['What we discovered', 'Two thirds of it was fine. The pain came from a single module and a database nobody wanted to touch.'],
      ['What we decided', 'Keep, replace, connect — in that order. Rebuild the module, wrap the database, leave the rest alone.'],
      ['What we built', 'A strangler-fig migration: new services alongside the old, routed one flow at a time, with a rollback on every step.'],
      ['Result', 'The business never went down. The risky module was retired in eleven weeks, not one big weekend.'],
    ],
  },
  {
    cat: 'Automation',
    tag: 'Workflow', title: 'Four tools, one conversation',
    color: 'var(--brand-sage)', ink: 'var(--brand-charcoal)',
    accent: 'var(--brand-indigo)', scene: 2,
    steps: [
      ['The problem', 'Leads arrived in five places and left in none of them. Follow-up depended on whoever remembered.'],
      ['What we discovered', 'The tools were not the problem. Nothing was telling one system what the other had just done.'],
      ['What we decided', 'No new software. A single event layer, and one place where a human still gets the final say.'],
      ['What we built', 'Integrations between CRM, forms, billing and support, with an audit trail and an override on every automated action.'],
      ['Result', 'Nothing sits unattended overnight. The team stopped being the integration layer.'],
    ],
  },
  {
    cat: 'Marketing & growth',
    tag: 'Performance', title: 'Eleven days, four channels, one number',
    color: 'var(--brand-terracotta)', ink: 'var(--brand-white)',
    accent: 'var(--brand-sage)', scene: 2,
    steps: [
      ['The problem', 'A launch was scheduled. Nobody could say which channel was worth the money, or when they would know.'],
      ['What we discovered', 'Three of four channels were being measured against different definitions of a conversion.'],
      ['What we decided', 'One conversion definition, one dashboard, and a pre-agreed threshold for killing a channel mid-flight.'],
      ['What we built', 'The campaign, the landing system, and measurement wired end to end before the first ad went live.'],
      ['Result', 'Two channels were cut in week one. The budget that remained produced a 3.4× return.'],
    ],
  },
  {
    cat: 'Venture projects',
    tag: 'Venture', title: 'Ten ideas, then one',
    color: 'var(--brand-brass)', ink: 'var(--brand-charcoal)',
    accent: 'var(--brand-terracotta)', scene: 0,
    steps: [
      ['The problem', 'A founder arrived with ten ideas and no way to choose between them.'],
      ['What we discovered', 'Nine of them were features. One was a market with a real, expensive, unanswered question.'],
      ['What we decided', 'Kill nine in three weeks of research instead of three months of building.'],
      ['What we built', 'A landing page, a manual concierge backend and eleven customer interviews — before a line of product code.'],
      ['Result', 'One direction, eleven weeks to first revenue, and a co-founder brought in from inside the research.'],
    ],
  },
]
