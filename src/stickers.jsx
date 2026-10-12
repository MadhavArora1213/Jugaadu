/* ── Jugaadu sticker kit ────────────────────────────────────────────────
   Every decorative primitive used by the page: rotating seals, starbursts,
   scalloped tags, sparkles, checkerboard rules, laurel awards, polaroids,
   squiggles, script arrows, the hero doodle, mascots and stamp cards.
   All inline SVG so they inherit the brand palette exactly.
   ─────────────────────────────────────────────────────────────────────── */

import { scallopPath } from './shapes.js'

/* ── Rotating seal badge — the round scalloped stamp ── */
export function Seal({ text, size = 132, color = '#D4A373', face = '#0F3D3A', spin = 24, id = 'seal' }) {
  const r = size / 2
  const ring = r - 26
  return (
    <div className="seal" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
        <path d={scallopPath(r, r, r - 5, 20, 1.14)} fill={color} />
        <circle cx={r} cy={r} r={ring} fill="none" stroke={face} strokeWidth="1" strokeDasharray="2 5" opacity="0.6" />
        <defs>
          <path id={`${id}-ring`} d={`M ${r} ${r} m -${ring - 9} 0 a ${ring - 9} ${ring - 9} 0 1 1 ${2 * (ring - 9)} 0 a ${ring - 9} ${ring - 9} 0 1 1 -${2 * (ring - 9)} 0`} />
        </defs>
        <g style={{ transformOrigin: 'center', animation: `sealspin ${spin}s linear infinite` }}>
          <text fontSize={size * 0.072} fontFamily="'JetBrains Mono', monospace" fontWeight="500" letterSpacing="1.6" fill={face}>
            <textPath href={`#${id}-ring`} startOffset="0%">{`${text} · `.repeat(6)}</textPath>
          </text>
        </g>
        {/* centre flower/asterisk */}
        <g transform={`translate(${r}, ${r})`}>
          {Array.from({ length: 8 }).map((_, i) => (
            <ellipse key={i} rx={size * 0.055} ry={size * 0.115}
              transform={`rotate(${(i * 180) / 8}) translate(0, ${-size * 0.075})`}
              fill={face} />
          ))}
          <circle r={size * 0.05} fill={color} />
        </g>
      </svg>
    </div>
  )
}

/* ── Starburst — spiky sun with a word inside ── */
export function Starburst({ label, size = 96, color = '#B5523C', ink = '#FFFFFF', spikes = 15 }) {
  const r = size / 2
  let d = ''
  for (let i = 0; i < spikes * 2; i++) {
    const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2
    const rad = i % 2 === 0 ? r - 1 : r - 13
    d += `${i === 0 ? 'M' : 'L'} ${(r + Math.cos(a) * rad).toFixed(2)} ${(r + Math.sin(a) * rad).toFixed(2)} `
  }
  const lines = String(label).split('\n')
  return (
    <div className="starburst" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} aria-hidden="true">
        <path d={d + 'Z'} fill={color} />
        <text x={r} y={r + (lines.length === 1 ? 3 : -3)} textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontWeight="500"
          fontSize={size * 0.105} letterSpacing="0.5" fill={ink}>
          {lines.map((l, i) => (
            <tspan key={l} x={r} dy={i === 0 ? 0 : size * 0.13}>{l}</tspan>
          ))}
        </text>
      </svg>
    </div>
  )
}

/* ── Scalloped tag — the little burst-shaped word sticker ── */
export function ScallopTag({ children, color = '#8aae78', ink = '#0F3D3A', rotate = -4 }) {
  const w = 14 + String(children).length * 9.6
  const h = 42
  return (
    <span className="scallop-tag" style={{ rotate: `${rotate}deg` }}>
      <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} aria-hidden="true" preserveAspectRatio="none">
        <path d={scallopPath(w / 2, h / 2, h / 2 - 2, Math.max(10, Math.round(w / 9)), 1.12)} fill={color} />
      </svg>
      <span style={{ color: ink }}>{children}</span>
    </span>
  )
}

/* ── Plain pill tag ── */
export function Tag({ children, color = '#8aae78', ink = '#0F3D3A', rotate = -4 }) {
  return (
    <span className="tag" style={{ background: color, color: ink, rotate: `${rotate}deg` }}>
      {children}
    </span>
  )
}

/* ── Four-point sparkle ── */
export function Sparkle({ size = 26, color = '#B5523C', rotate = 0 }) {
  return (
    <svg className="sparkle" style={{ rotate: `${rotate}deg` }}
      width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0 C13 7 17 11 24 12 C17 13 13 17 12 24 C11 17 7 13 0 12 C7 11 11 7 12 0 Z" fill={color} />
    </svg>
  )
}

/* ── Outlined star (the little outline stars in the reviews corner) ── */
export function OutlineStar({ size = 34, color = '#B5523C', rotate = 0 }) {
  return (
    <svg style={{ rotate: `${rotate}deg` }} width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <path d="M20 3 L24.6 14.6 L37 15.6 L27.6 24 L30.4 36 L20 29.6 L9.6 36 L12.4 24 L3 15.6 L15.4 14.6 Z"
        fill="none" stroke={color} strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Looping squiggle — the orange curl above the reviews ── */
export function Squiggle({ color = '#B5523C', width = 96 }) {
  return (
    <svg width={width} height={width * 0.52} viewBox="0 0 96 50" aria-hidden="true">
      <path d="M6 44 C 6 18, 26 4, 40 12 C 52 19, 44 36, 32 34 C 20 32, 22 14, 40 8 C 60 1, 82 10, 90 30"
        fill="none" stroke={color} strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  )
}

/* ── Curved hand-drawn arrow ── */
export function ScriptArrow({ color = '#0F3D3A', width = 92, flip = false }) {
  return (
    <svg className="script-arrow" style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      width={width} height={width * 0.42} viewBox="0 0 92 38" aria-hidden="true">
      <path d="M4 6 C 26 2, 56 8, 74 26" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M62 28 l14 3 -3 -14" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* ── Checkerboard rule ── */
export function Checker({ a = '#0f3d3a', b = '#F5F0E7', height = 20 }) {
  return (
    <div className="checker" aria-hidden="true" style={{
      height,
      backgroundImage: `linear-gradient(45deg, ${a} 25%, transparent 25%, transparent 75%, ${a} 75%),
                        linear-gradient(45deg, ${a} 25%, transparent 25%, transparent 75%, ${a} 75%)`,
      backgroundColor: b,
      backgroundSize: `${height * 2}px ${height * 2}px`,
      backgroundPosition: `0 0, ${height}px ${height}px`,
    }} />
  )
}

/* ── Blue smiley star — the chunky 8-point star with a face ── */
export function SmileyStar({ size = 38, color = '#466B8A', ink = '#F5F0E7', rotate = 8 }) {
  const r = 19
  let d = ''
  for (let i = 0; i < 16; i++) {
    const a = (i / 16) * Math.PI * 2 - Math.PI / 2
    const rad = i % 2 === 0 ? r : r * 0.6
    d += `${i === 0 ? 'M' : 'L'} ${(r + Math.cos(a) * rad).toFixed(2)} ${(r + Math.sin(a) * rad).toFixed(2)} `
  }
  return (
    <svg className="smiley-star" style={{ rotate: `${rotate}deg`, width: size, height: size }}
      viewBox="0 0 38 38" aria-hidden="true">
      <path d={d + 'Z'} fill={color} />
      <circle cx="14" cy="17" r="1.9" fill={ink} />
      <circle cx="24" cy="17" r="1.9" fill={ink} />
      <path d="M14 23 q5 5 10 0" fill="none" stroke={ink} strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

/* ── Clover — the chunky 4-petal flower ── */
export function Clover({ size = 34, color = '#B5523C', rotate = 0 }) {
  return (
    <svg className="clover" style={{ rotate: `${rotate}deg`, width: size, height: size }}
      viewBox="0 0 34 34" aria-hidden="true">
      <circle cx="11" cy="11" r="9" fill={color} />
      <circle cx="23" cy="11" r="9" fill={color} />
      <circle cx="11" cy="23" r="9" fill={color} />
      <circle cx="23" cy="23" r="9" fill={color} />
      <circle cx="17" cy="17" r="3.4" fill="#F5F0E7" opacity="0.35" />
    </svg>
  )
}

/* ── Big asterisk — the chunky 6-arm mark ── */
export function BigAsterisk({ size = 32, color = '#98402B', rotate = 0 }) {
  return (
    <svg className="big-asterisk" style={{ rotate: `${rotate}deg`, width: size, height: size }}
      viewBox="0 0 32 32" aria-hidden="true">
      {Array.from({ length: 3 }).map((_, i) => (
        <rect key={i} x="13.6" y="2" width="4.8" height="28" rx="2.4"
          fill={color} transform={`rotate(${i * 60} 16 16)`} />
      ))}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════
   The tape-wrapped bust — gold packing tape over a plaster cast
   ══════════════════════════════════════════════════════ */
const BUST_D = `M170 36
  C215 36 237 73 237 118
  C237 157 222 185 203 199
  C214 211 221 221 225 233
  C264 247 302 270 314 308
  C323 339 324 366 322 392
  L336 404 L336 452 L4 452 L4 404 L18 392
  C16 366 17 339 26 308
  C38 270 76 247 115 233
  C119 221 126 211 137 199
  C118 185 103 157 103 118
  C103 73 125 36 170 36 Z`

/* horizontal tape wraps — y is the strip top, rot its tilt */
const TAPE = [
  { y: 26, h: 30, rot: -7, c: '#f0d6a4' },
  { y: 55, h: 30, rot: 5, c: '#dcae66' },
  { y: 84, h: 32, rot: -4, c: '#e9c489' },
  { y: 115, h: 30, rot: 8, c: '#cf9c52', label: 'ADVERTISING' },
  { y: 144, h: 30, rot: -6, c: '#edcf9b' },
  { y: 173, h: 30, rot: 4, c: '#d7a45e' },
  { y: 202, h: 30, rot: -9, c: '#e7c184' },
  { y: 231, h: 30, rot: 6, c: '#c8934a' },
  { y: 260, h: 32, rot: -5, c: '#eccd97' },
  { y: 290, h: 30, rot: 7, c: '#d9a95c', label: 'ADVERTISEMENTS' },
  { y: 319, h: 30, rot: -4, c: '#e9c489' },
  { y: 348, h: 30, rot: 5, c: '#c99550' },
  { y: 377, h: 30, rot: -7, c: '#edcf9b' },
  { y: 406, h: 30, rot: 4, c: '#d7a45e' },
  { y: 435, h: 30, rot: -5, c: '#e4bd7e' },
]

/* two wraps that cross the cast on the diagonal */
const DIAGONAL = [
  { x: 40, y: 62, rot: 38, c: '#e7c184' },
  { x: 40, y: 236, rot: -34, c: '#dcae66' },
  { x: 40, y: 330, rot: 26, c: '#eccd97' },
]

export function TapeBust({ width = 440 }) {
  return (
    <svg className="bust" viewBox="0 0 340 500" width={width}
      role="img" aria-label="A classical bust wrapped in gold packing tape">
      <defs>
        <clipPath id="bustClip">
          <path d={BUST_D} />
        </clipPath>
        <linearGradient id="bustLight" x1="0" y1="0" x2="1" y2="0.45">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
          <stop offset="38%" stopColor="#FFFFFF" stopOpacity="0.04" />
          <stop offset="72%" stopColor="#4a2c0d" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#3a2007" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="bustFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="60%" stopColor="#3a2007" stopOpacity="0" />
          <stop offset="100%" stopColor="#3a2007" stopOpacity="0.42" />
        </linearGradient>
      </defs>

      {/* contact shadow */}
      <ellipse cx="170" cy="470" rx="150" ry="17" fill="#0F3D3A" opacity="0.16" />

      <g clipPath="url(#bustClip)">
        <rect width="340" height="500" fill="#d9a95c" />

        {TAPE.map((t, i) => (
          <g key={i} transform={`rotate(${t.rot} 170 ${t.y + t.h / 2})`}>
            <rect x="-110" y={t.y} width="560" height={t.h} fill={t.c} />
            <rect x="-110" y={t.y} width="560" height="3" fill="#8a5a24" opacity="0.4" />
            <rect x="-110" y={t.y + t.h - 3} width="560" height="3" fill="#F5F0E7" opacity="0.35" />
            {t.label && (
              <text x="170" y={t.y + t.h / 2 + 9} textAnchor="middle"
                fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="800"
                fontSize="25" letterSpacing="1.5" fill="#7a4a17" opacity="0.92">
                {t.label}
              </text>
            )}
          </g>
        ))}

        {DIAGONAL.map((d, i) => (
          <rect key={`d${i}`} x={d.x} y={d.y} width="300" height="34"
            transform={`rotate(${d.rot} 170 ${d.y + 17})`} fill={d.c} />
        ))}

        {/* seams between wraps */}
        {TAPE.map((t, i) => (
          <rect key={`s${i}`} x="-110" y={t.y - 1} width="560" height="1.6"
            transform={`rotate(${t.rot} 170 ${t.y + t.h / 2})`}
            fill="#593308" opacity="0.33" />
        ))}

        <rect width="340" height="500" fill="url(#bustLight)" />
        <rect width="340" height="500" fill="url(#bustFloor)" />
      </g>

      {/* loose tape ends escaping the cast */}
      <path d="M104 252 l-52 -18 l7 36 l49 12 Z" fill="#dcae66" stroke="#7a4a17" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M238 146 l52 -15 l7 34 l-50 13 Z" fill="#e9c489" stroke="#7a4a17" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M306 356 l46 11 l-9 34 l-43 -13 Z" fill="#cf9c52" stroke="#7a4a17" strokeWidth="1.5" strokeLinejoin="round" />

      <path d={BUST_D} fill="none" stroke="#6b4318" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

/* ═══ Rotating circular stamp with an ✕ in the middle ═══ */
export function SpinBadge({ text, size = 96, id = 'spin' }) {
  return (
    <div className="spin-badge" style={{ width: size, height: size }}>
      <svg className="spin-badge__ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <path id={`${id}-arc`} fill="none"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="spin-badge__text">
          <textPath href={`#${id}-arc`} startOffset="0%">{text}</textPath>
        </text>
      </svg>
      <span className="spin-badge__x" aria-hidden="true" />
    </div>
  )
}

/* ── Laurel award badge ── */
/* A real laurel: a "(" stem with dense leaves alternating up both sides.
   Mirrored on the right, the two branches cup the text like a wreath. */
const WREATH_P = [[46, 96], [14, 84], [11, 30], [44, 14]]

const wreathAt = (t) => {
  const [p0, p1, p2, p3] = WREATH_P
  const m = 1 - t
  const a = m * m * m
  const b = 3 * m * m * t
  const c = 3 * m * t * t
  const d = t * t * t
  const x = a * p0[0] + b * p1[0] + c * p2[0] + d * p3[0]
  const y = a * p0[1] + b * p1[1] + c * p2[1] + d * p3[1]
  const dx = 3 * m * m * (p1[0] - p0[0]) + 6 * m * t * (p2[0] - p1[0]) + 3 * t * t * (p3[0] - p2[0])
  const dy = 3 * m * m * (p1[1] - p0[1]) + 6 * m * t * (p2[1] - p1[1]) + 3 * t * t * (p3[1] - p2[1])
  return { x, y, a: (Math.atan2(dy, dx) * 180) / Math.PI }
}

/* pointed almond, rooted at the origin and growing along +x */
const LEAF_D = 'M0 0 C4 -4.6 11 -5 17 0 C11 5 4 4.6 0 0 Z'

const WREATH_LEAVES = (() => {
  const outer = []
  const inner = []
  const N = 9
  for (let i = 0; i < N; i++) {
    const t = 0.05 + (i / (N - 1)) * 0.92
    const { x, y, a } = wreathAt(t)
    const s = 1 - t * 0.34 // leaves taper toward the tip
    outer.push({ x, y, a: a - 42, s })
    inner.push({ x, y, a: a + 64, s: s * 0.74 })
  }
  return { outer, inner }
})()

const leafAt = (l) =>
  `translate(${l.x.toFixed(2)} ${l.y.toFixed(2)}) rotate(${l.a.toFixed(1)}) scale(${l.s.toFixed(3)})`

function LaurelBranch({ color }) {
  return (
    <svg className="laurel-branch" viewBox="0 0 64 112" width="46" height="80" aria-hidden="true">
      <path d="M46 96 C14 84 11 30 44 14" fill="none" stroke={color} strokeWidth="2.3" strokeLinecap="round" />
      {WREATH_LEAVES.inner.map((l, i) => (
        <path key={`i${i}`} d={LEAF_D} fill={color} opacity="0.6" transform={leafAt(l)} />
      ))}
      {WREATH_LEAVES.outer.map((l, i) => (
        <path key={`o${i}`} d={LEAF_D} fill={color} transform={leafAt(l)} />
      ))}
    </svg>
  )
}

/* ── Five small stars, used under a laurel ── */
export function StarRow({ count = 5, size = 9, color = '#0F3D3A' }) {
  return (
    <span className="laurel-stars" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24">
          <path d="M12 1.6 L15 8.8 L22.6 9.4 L16.8 14.4 L18.7 21.8 L12 17.8 L5.3 21.8 L7.2 14.4 L1.4 9.4 L9 8.8 Z" fill={color} />
        </svg>
      ))}
    </span>
  )
}

export function Laurel({ top, mid, bottom, stars = false, color = '#0F3D3A' }) {
  return (
    <div className="laurel" style={{ color }}>
      <LaurelBranch color={color} />
      <div className="laurel-txt">
        <span className="laurel-top">{top}</span>
        {mid && <span className="laurel-mid">{mid}</span>}
        <span className="laurel-bot">{bottom}</span>
        {stars && <StarRow color={color} />}
      </div>
      <span className="laurel-flip"><LaurelBranch color={color} /></span>
    </div>
  )
}

/* ── Polaroid — tilted photo frame with a handwritten caption ── */
export function Polaroid({ caption, from, to, rotate = -6, size = 138, motif = 'bulb' }) {
  const gid = `pg-${motif}-${caption.replace(/\W/g, '')}`
  return (
    <figure className="polaroid" style={{ rotate: `${rotate}deg`, width: size }}>
      <svg viewBox="0 0 100 100" width="100%" style={{ display: 'block', aspectRatio: '1' }} aria-hidden="true">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#${gid})`} />
        <Motif kind={motif} />
      </svg>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

function Motif({ kind }) {
  const s = { stroke: '#F5F0E7', strokeWidth: 3, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }
  if (kind === 'bulb') {
    return (
      <g {...s}>
        <circle cx="50" cy="42" r="17" />
        <path d="M43 59h14M45 66h10" />
        <path d="M50 16v-8M70 24l6-6M30 24l-6-6" />
      </g>
    )
  }
  if (kind === 'gear') {
    return (
      <g {...s}>
        <circle cx="50" cy="50" r="15" />
        <circle cx="50" cy="50" r="6" />
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2
          return <line key={i}
            x1={50 + Math.cos(a) * 15} y1={50 + Math.sin(a) * 15}
            x2={50 + Math.cos(a) * 24} y2={50 + Math.sin(a) * 24} />
        })}
      </g>
    )
  }
  if (kind === 'chart') return (
    <g {...s} strokeWidth="3.4">
      <path d="M22 74 L42 52 L56 62 L80 28" />
      <path d="M64 26h18v18" />
    </g>
  )
  if (kind === 'chat') return (
    <g {...s}>
      <path d="M24 30h52v32H46l-14 12V62H24Z" />
      <path d="M38 46h24M38 54h14" />
    </g>
  )
  return (
    <g {...s}>
      <path d="M30 70 L50 26 L70 70 Z" />
      <path d="M40 56h20" />
    </g>
  )
}

/* ── Hero doodle — cap, waving hand, steaming mug ── */
export function Doodle({ stroke = '#0F3D3A', accent = '#B5523C' }) {
  const L = { fill: 'none', stroke, strokeWidth: 5, strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <svg className="doodle" viewBox="0 0 360 420" width="100%" role="img"
      aria-label="Illustration of a person wearing a cap, waving and holding a hot drink">

      {/* raised waving hand */}
      <g {...L}>
        <path d="M96 214 q-40 -4 -60 -46" />
        {/* palm + four fingers */}
        <path d="M36 168 q-8 -16 2 -26 q8 -8 14 0 M52 142 q-4 -16 6 -22 q9 -5 12 5
                 M68 128 q0 -16 10 -18 q10 -1 10 12 M82 122 q4 -14 14 -12 q10 2 6 16
                 q-6 20 -26 30 q-24 12 -44 6" />
      </g>

      {/* torso */}
      <path d="M134 214 q46 -22 96 0 l12 150 q-60 16 -120 0 Z" fill="#F5F0E7" stroke={stroke} strokeWidth="5" strokeLinejoin="round" />
      {/* placket + pocket */}
      <path d="M182 220 L186 362" fill="none" stroke={stroke} strokeWidth="3.4" strokeLinecap="round" />
      <path d="M156 258 h20 v22 h-20 Z" fill="none" stroke={stroke} strokeWidth="3.4" strokeLinejoin="round" />

      {/* arm holding the mug */}
      <path d="M230 220 q40 12 46 58" {...L} />
      <path d="M266 286 q14 -4 20 8" {...L} />
      {/* mug */}
      <path d="M270 276 l4 44 q10 8 20 0 l4 -44 Z" fill={accent} stroke={stroke} strokeWidth="4.4" strokeLinejoin="round" />
      <path d="M298 288 q12 2 10 14 q-2 10 -14 8" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      {/* steam */}
      <path d="M278 268 q-6 -10 1 -17 q6 -7 1 -14" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" opacity="0.65" />
      <path d="M292 270 q-6 -11 1 -18" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" opacity="0.45" />

      {/* head */}
      <circle cx="186" cy="140" r="50" fill="#F5F0E7" stroke={stroke} strokeWidth="5" />
      {/* eyes + smile */}
      <circle cx="170" cy="140" r="4.4" fill={stroke} />
      <circle cx="204" cy="140" r="4.4" fill={stroke} />
      <path d="M168 160 q18 16 36 0" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      {/* ear */}
      <path d="M236 140 q10 -4 10 8 q0 10 -10 8" fill="none" stroke={stroke} strokeWidth="4" strokeLinecap="round" />

      {/* backwards cap */}
      <path d="M138 128 q4 -50 48 -50 q44 0 48 46 q-46 -18 -96 4 Z" fill={accent} stroke={stroke} strokeWidth="5" strokeLinejoin="round" />
      <path d="M234 124 q22 -4 34 8 q-16 12 -36 6" fill={accent} stroke={stroke} strokeWidth="5" strokeLinejoin="round" />
      <path d="M186 80 v-8" fill="none" stroke={stroke} strokeWidth="5" strokeLinecap="round" />
      <circle cx="186" cy="70" r="6" fill={accent} stroke={stroke} strokeWidth="4" />

      {/* collar */}
      <path d="M164 200 q22 16 44 0" fill="none" stroke={stroke} strokeWidth="4.4" strokeLinecap="round" />
    </svg>
  )
}

/* ── Little mascots for the dark band ── */
export function Mascot({ color, eyes = '#F5F0E7', size = 78, kind = 0 }) {
  const paths = [
    'M39 4 C62 4 74 22 74 43 C74 64 60 74 39 74 C18 74 4 62 4 41 C4 20 17 4 39 4 Z',
    'M39 6 C64 2 76 24 72 45 C68 66 55 76 36 74 C15 72 3 58 5 37 C7 17 20 9 39 6 Z',
    'M37 5 C60 5 76 19 74 44 C72 66 54 76 35 74 C14 72 5 55 6 34 C7 15 18 5 37 5 Z',
  ]
  return (
    <svg className="mascot" style={{ width: size, height: size }} viewBox="0 0 78 78" aria-hidden="true">
      <path d={paths[kind % paths.length]} fill={color} />
      <circle cx="29" cy="36" r="4.8" fill={eyes} />
      <circle cx="50" cy="36" r="4.8" fill={eyes} />
      <path d="M29 51 q11 10 21 0" fill="none" stroke={eyes} strokeWidth="3.4" strokeLinecap="round" />
      {kind % 3 === 1 && <path d="M15 13 l-7 -9M63 13 l8 -9" stroke={color} strokeWidth="5" strokeLinecap="round" />}
      {kind % 3 === 2 && <path d="M8 66 l-8 8M70 66 l8 8" stroke={color} strokeWidth="5" strokeLinecap="round" />}
    </svg>
  )
}

/* ── Scalloped stamp card — reviews ── */
export function StampCard({ children, color, ink = '#0F3D3A', rotate = 0 }) {
  return (
    <article className="stampcard" style={{ '--card': color, '--card-ink': ink, rotate: `${rotate}deg` }}>
      <div className="stampcard-in">{children}</div>
    </article>
  )
}

/* ── Inline headline chip — the little photo tile set into the type ── */
export function ChipPhoto({ size = 46, from = '#d4a373', to = '#B5523C', rotate = -2 }) {
  const gid = `chip-${from.replace('#', '')}`
  return (
    <svg className="chip-photo" style={{ rotate: `${rotate}deg`, width: size, height: size * 0.88 }}
      viewBox="0 0 46 40" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="46" height="40" rx="4" fill={`url(#${gid})`} />
      <circle cx="23" cy="15" r="7.5" fill="#F5F0E7" />
      <path d="M8 40 a15 12 0 0 1 30 0 Z" fill="#F5F0E7" />
      <rect width="46" height="40" rx="4" fill="none" stroke="#0F3D3A" strokeWidth="1.6" opacity="0.35" />
    </svg>
  )
}

/* ── Gallery tile — a full-bleed photo panel for the strip ── */
export function GalleryTile({ children, bg, flex = 1, tall = false }) {
  return (
    <div className={`gal-tile${tall ? ' gal-tile--tall' : ''}`}
      style={{ background: bg, flexGrow: flex, flexBasis: 0 }}>
      <svg viewBox="0 0 200 130" preserveAspectRatio="xMidYMid slice"
        width="100%" height="100%" aria-hidden="true">
        {children}
      </svg>
    </div>
  )
}

/* ── Small round portrait used on the review cards ── */
export function Avatar({ from, to, seed = 0 }) {
  const gid = `av-${seed}`
  return (
    <svg className="avatar" viewBox="0 0 48 48" width="42" height="42" aria-hidden="true">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="24" fill={`url(#${gid})`} />
      <circle cx="24" cy="19" r="8" fill="#F5F0E7" />
      <path d="M8 46 a16 13 0 0 1 32 0 Z" fill="#F5F0E7" />
      <circle cx="24" cy="19" r="8" fill="none" stroke="#0F3D3A" strokeWidth="1.6" opacity="0.35" />
    </svg>
  )
}

/* ═══ Scrolling marquee band ═══ */
export function Marquee({ items, speed = 34, className = '' }) {
  const row = (
    <div className="marquee-row" aria-hidden="true">
      {items.map((t, i) => (
        <span key={`${t}-${i}`} className="marquee-item">
          {t}
          <i className="marquee-dot" />
        </span>
      ))}
    </div>
  )
  return (
    <div className={`marquee ${className}`.trim()}>
      <div className="marquee-track" style={{ '--mq': `${speed}s` }}>
        {row}
        {row}
      </div>
    </div>
  )
}

/* ═══ Work scenes — flat illustrations standing in for project photos ═══ */
const SCENES = [
  // 0 · storefront
  <>
    <rect key="bg" width="320" height="200" fill="#EDE6DB" />
    <rect key="sh" y="150" width="320" height="50" fill="#c9b294" />
    <rect key="b" x="58" y="66" width="204" height="96" rx="4" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="3" />
    <path key="aw" d="M46 66 h228 l-14 26 H60 Z" fill="#B5523C" stroke="#0F3D3A" strokeWidth="3" strokeLinejoin="round" />
    <path key="sc" d="M70 66 l-8 26 M110 66 l-6 26 M150 66 v26 M190 66 l6 26 M230 66 l8 26" stroke="#F5F0E7" strokeWidth="7" />
    <rect key="w1" x="76" y="102" width="58" height="46" rx="3" fill="#8aae78" stroke="#0F3D3A" strokeWidth="2.6" />
    <rect key="w2" x="146" y="102" width="58" height="46" rx="3" fill="#466B8A" stroke="#0F3D3A" strokeWidth="2.6" />
    <rect key="w3" x="216" y="110" width="34" height="38" rx="3" fill="#d4a373" stroke="#0F3D3A" strokeWidth="2.6" />
    <circle key="s" cx="278" cy="44" r="19" fill="#D4A373" stroke="#0F3D3A" strokeWidth="3" />
  </>,
  // 1 · meeting table
  <>
    <rect key="bg" width="320" height="200" fill="#C7D6C0" />
    <rect key="tb" x="34" y="128" width="252" height="20" rx="5" fill="#8a5a34" stroke="#0F3D3A" strokeWidth="3" />
    <path key="lg" d="M62 148 v34 M258 148 v34" stroke="#0F3D3A" strokeWidth="5" strokeLinecap="round" />
    {[[92, '#B5523C'], [160, '#466B8A'], [228, '#8aae78']].map(([x, c], i) => (
      <g key={i}>
        <path key={`b${i}`} d={`M${x - 30} 128 a30 26 0 0 1 60 0 Z`} fill={c} stroke="#0F3D3A" strokeWidth="3" />
        <circle key={`h${i}`} cx={x} cy="82" r="17" fill="#c9bda8" stroke="#0F3D3A" strokeWidth="3" />
      </g>
    ))}
    <rect key="lp" x="136" y="112" width="48" height="16" rx="2" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="2.6" />
    <path key="cu" d="M262 108 h22 v14 a11 11 0 0 1 -22 0 Z" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="2.6" />
    <path key="st" d="M296 34 l5 12 12 5 -12 5 -5 12 -5 -12 -12 -5 12 -5 Z" fill="#D4A373" stroke="#0F3D3A" strokeWidth="2.4" strokeLinejoin="round" />
  </>,
  // 2 · phone + engagement
  <>
    <rect key="bg" width="320" height="200" fill="#EDE6DB" />
    <rect key="ph" x="118" y="28" width="84" height="152" rx="12" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="3.4" />
    <rect key="sb" x="128" y="46" width="64" height="46" rx="4" fill="#B5523C" />
    <rect key="l1" x="128" y="102" width="64" height="9" rx="4.5" fill="#0F3D3A" opacity="0.75" />
    <rect key="l2" x="128" y="118" width="46" height="9" rx="4.5" fill="#0F3D3A" opacity="0.45" />
    <rect key="l3" x="128" y="134" width="56" height="9" rx="4.5" fill="#0F3D3A" opacity="0.45" />
    <path key="h1" d="M74 66 c-8 -10 -24 -2 -16 10 l16 18 16 -18 c8 -12 -8 -20 -16 -10 Z" fill="#B5523C" stroke="#0F3D3A" strokeWidth="2.8" strokeLinejoin="round" />
    <path key="h2" d="M244 118 c-6 -8 -19 -2 -12 8 l12 14 12 -14 c6 -10 -6 -16 -12 -8 Z" fill="#D4A373" stroke="#0F3D3A" strokeWidth="2.6" strokeLinejoin="round" />
    <circle key="o1" cx="248" cy="52" r="17" fill="#8aae78" stroke="#0F3D3A" strokeWidth="2.8" />
    <text key="ot" x="248" y="58" textAnchor="middle" fontFamily="'Bricolage Grotesque', sans-serif" fontWeight="800" fontSize="15" fill="#0F3D3A">9k</text>
    <circle key="o2" cx="62" cy="140" r="14" fill="#466B8A" stroke="#0F3D3A" strokeWidth="2.8" />
  </>,
  // 3 · analytics
  <>
    <rect key="bg" width="320" height="200" fill="#C7D6C0" />
    <rect key="wd" x="40" y="34" width="240" height="140" rx="7" fill="#F5F0E7" stroke="#0F3D3A" strokeWidth="3.4" />
    <path key="tb" d="M40 62 h240" stroke="#0F3D3A" strokeWidth="3" />
    <circle key="d1" cx="56" cy="48" r="5" fill="#B5523C" />
    <circle key="d2" cx="72" cy="48" r="5" fill="#D4A373" />
    <circle key="d3" cx="88" cy="48" r="5" fill="#8aae78" />
    <path key="gr" d="M64 152 L108 122 L146 136 L188 92 L232 104 L256 72" fill="none" stroke="#B5523C" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    <path key="ar" d="M256 72 l-16 2 M256 72 l3 16" stroke="#B5523C" strokeWidth="5" strokeLinecap="round" />
    <rect key="b1" x="64" y="76" width="22" height="76" rx="3" fill="#466B8A" opacity="0.35" />
    <rect key="b2" x="112" y="94" width="22" height="58" rx="3" fill="#466B8A" opacity="0.35" />
    <rect key="b3" x="160" y="108" width="22" height="44" rx="3" fill="#466B8A" opacity="0.35" />
    <circle key="su" cx="272" cy="42" r="20" fill="#D4A373" stroke="#0F3D3A" strokeWidth="3" />
    <path key="sr" d="M272 30 v24 M260 42 h24" stroke="#0F3D3A" strokeWidth="3.4" strokeLinecap="round" opacity="0.35" />
    <path key="sb" d="M272 22 a20 20 0 0 1 20 20 h-20 Z" fill="#0F3D3A" opacity="0.35" />
  </>,
]

export function WorkScene({ variant = 0 }) {
  return (
    <svg className="work-scene" viewBox="0 0 320 200" width="100%" height="100%"
      preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {SCENES[variant % SCENES.length]}
    </svg>
  )
}

/* ══════════════════════════════════════════════════════
   Team — grayscale portrait cards with a pinking-shears edge
   ══════════════════════════════════════════════════════ */
const PORTRAIT_GREY = ['#e6e2da', '#c9c3b8', '#a29b8f', '#6f6a60', '#3d3a34']

const PORTRAIT_HAIR = [
  'M28 36 C28 15 39 7 54 7 C69 7 80 15 80 36 L80 60 C76 50 74 42 72 36 C66 44 42 44 36 36 C34 44 32 52 28 60 Z',
  'M30 33 C30 14 40 6 54 6 C68 6 78 14 78 33 C71 24 37 24 30 33 Z',
  'M25 34 C25 12 38 3 54 3 C70 3 83 12 83 34 C83 39 78 36 76 33 C71 40 37 40 32 33 C30 36 25 39 25 34 Z',
  'M31 33 C31 14 41 7 54 7 C67 7 77 14 77 33 C70 25 38 25 31 33 Z M54 1 C61 1 65 5 65 10 C65 15 61 19 54 19 C47 19 43 15 43 10 C43 5 47 1 54 1 Z',
  'M28 36 C28 14 40 6 54 6 C68 6 80 14 80 36 L80 56 C75 48 72 42 70 37 C64 45 44 45 38 37 C36 43 33 49 28 56 Z',
  'M31 31 C31 13 41 6 54 6 C67 6 77 13 77 31 C70 23 38 23 31 31 Z',
  // 6 — centre-parted, falls either side
  'M29 38 C29 14 40 6 54 6 C68 6 79 14 79 38 L79 54 C77 44 74 38 72 34 C66 40 58 40 54 30 C50 40 42 40 36 34 C34 38 31 44 29 54 Z',
  // 7 — cropped sides, taller on top
  'M31 34 C31 18 39 4 54 4 C69 4 77 18 77 34 C73 26 68 21 54 21 C40 21 35 26 31 34 Z',
]

const PORTRAIT_BEARD =
  'M31 56 C31 80 41 91 54 91 C67 91 77 80 77 56 C77 67 68 73 54 73 C40 73 31 67 31 56 Z'

const PORTRAIT_MOUTH = [
  'M47 68 q7 6 14 0',
  'M46 68 q8 9 16 0',
  'M47 69 h14',
]

export function Portrait({ seed = 0 }) {
  const skin = ['#cfc9be', '#b9b2a6', '#a49c8f', '#8d8578'][seed % 4]
  const ink = PORTRAIT_GREY[4]
  const glasses = seed % 3 === 1
  const beard = seed % 4 === 2
  return (
    <svg className="portrait" viewBox="0 0 108 132" aria-hidden="true">
      <rect width="108" height="132" fill="#F5F0E7" />
      {/* shoulders + collar */}
      <path d="M8 132 C8 106 28 92 54 92 C80 92 100 106 100 132 Z" fill={PORTRAIT_GREY[3]} />
      <path d="M43 92 L54 110 L65 92 L58 90 L50 90 Z" fill={PORTRAIT_GREY[0]} />
      {/* neck + head */}
      <path d="M44 78 h20 v18 c0 6 -20 6 -20 0 Z" fill={skin} />
      <ellipse cx="54" cy="54" rx="24" ry="29" fill={skin} />
      {/* ears */}
      <ellipse cx="30" cy="55" rx="4" ry="6" fill={skin} />
      <ellipse cx="78" cy="55" rx="4" ry="6" fill={skin} />
      {beard && <path d={PORTRAIT_BEARD} fill={ink} opacity="0.9" />}
      <path d={PORTRAIT_HAIR[seed % PORTRAIT_HAIR.length]} fill={ink} />
      {/* brows */}
      <path d="M40 47 q5 -3 10 0 M58 47 q5 -3 10 0" fill="none" stroke={ink} strokeWidth="2.2" strokeLinecap="round" />
      <ellipse cx="45" cy="54" rx="2.6" ry="3" fill={ink} />
      <ellipse cx="63" cy="54" rx="2.6" ry="3" fill={ink} />
      <path d={PORTRAIT_MOUTH[seed % PORTRAIT_MOUTH.length]} fill="none" stroke={ink} strokeWidth="2.4" strokeLinecap="round" />
      {glasses && (
        <g fill="none" stroke={ink} strokeWidth="2.1">
          <rect x="35.5" y="47" width="17" height="13" rx="4.5" />
          <rect x="55.5" y="47" width="17" height="13" rx="4.5" />
          <path d="M52.5 53 h3 M35.5 51 l-5 2 M72.5 51 l5 2" strokeLinecap="round" />
        </g>
      )}
    </svg>
  )
}

/* sharp teeth down the sides, optionally zigzagging across the bottom too */
function pinking({ teeth = 6, depth = 9, bottomTeeth = 0, bottomDepth = 11 } = {}) {
  const pts = ['0% 0%', '100% 0%']
  const step = 100 / teeth
  for (let i = 1; i <= teeth; i++) {
    pts.push(`${i % 2 ? 100 - depth : 100}% ${(i * step).toFixed(2)}%`)
  }
  if (bottomTeeth) {
    const bstep = 100 / bottomTeeth
    for (let i = 1; i <= bottomTeeth; i++) {
      pts.push(`${(100 - i * bstep).toFixed(2)}% ${i % 2 ? 100 - bottomDepth : 100}%`)
    }
  } else {
    pts.push('0% 100%')
  }
  for (let i = teeth - 1; i >= 1; i--) {
    pts.push(`${i % 2 ? 0 : depth}% ${(i * step).toFixed(2)}%`)
  }
  return `polygon(${pts.join(', ')})`
}

const PINKING = pinking({ teeth: 6, depth: 9 })
const PINKING_TALL = pinking({ teeth: 7, depth: 10, bottomTeeth: 6, bottomDepth: 12 })

export function TeamCard({
  name, role, color, ink = '#F5F0E7', seed = 0, tilt = 0,
  corner = null, frame = null, tall = false, short = false,
}) {
  const cls = ['teamcard', tall && 'teamcard--tall', short && 'teamcard--short']
    .filter(Boolean).join(' ')
  return (
    <article className={cls} style={{ '--tc': color, '--ti': ink, rotate: `${tilt}deg` }}>
      {frame && <span className="teamcard-frame" style={{ '--cf': frame }} aria-hidden="true" />}
      <div className="teamcard-photo" style={{ clipPath: tall ? PINKING_TALL : PINKING }}>
        <Portrait seed={seed} />
      </div>
      {corner && <span className="teamcard-corner" style={{ '--cc': corner }} aria-hidden="true" />}
      <div className="teamcard-name">
        <span className="teamcard-n">{name}</span>
        <span className="teamcard-r">{role}</span>
      </div>
    </article>
  )
}
