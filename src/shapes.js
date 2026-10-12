/** Outward-bulging scalloped circle, built from quadratic Béziers.
 *  Used by the seal badge to get the sticker-stamp edge. */
export function scallopPath(cx, cy, r, bumps = 16, bulge = 1.2) {
  const step = (Math.PI * 2) / bumps
  const pts = []
  for (let i = 0; i < bumps; i++) {
    const a = i * step - Math.PI / 2
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r])
  }
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`
  for (let i = 1; i <= bumps; i++) {
    const p = pts[i % bumps]
    const prev = pts[i - 1]
    const mx = (prev[0] + p[0]) / 2
    const my = (prev[1] + p[1]) / 2
    const cxp = cx + (mx - cx) * bulge
    const cyp = cy + (my - cy) * bulge
    d += ` Q ${cxp.toFixed(2)} ${cyp.toFixed(2)} ${p[0].toFixed(2)} ${p[1].toFixed(2)}`
  }
  return d + ' Z'
}
