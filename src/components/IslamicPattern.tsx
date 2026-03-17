interface IslamicPatternProps {
  opacity?: number
  color?: string
  tileSize?: number
}

export default function IslamicPattern({
  opacity = 0.06,
  color = 'C9A227',
  tileSize = 80,
}: IslamicPatternProps) {
  const t = tileSize
  const h = t / 2
  const q = t / 4

  // Build a diamond lattice / Islamic geometric tile as an SVG data URL
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${t}' viewBox='0 0 ${t} ${t}'>
    <g stroke='%23${color}' stroke-width='0.6' fill='none' opacity='1'>
      <!-- outer border square -->
      <rect x='2' y='2' width='${t - 4}' height='${t - 4}'/>
      <!-- inner rotated diamond -->
      <polygon points='${h},4 ${t - 4},${h} ${h},${t - 4} 4,${h}'/>
      <!-- cross lines -->
      <line x1='${h}' y1='2' x2='${h}' y2='${t - 2}'/>
      <line x1='2' y1='${h}' x2='${t - 2}' y2='${h}'/>
      <!-- diagonal lines -->
      <line x1='2' y1='2' x2='${t - 2}' y2='${t - 2}'/>
      <line x1='${t - 2}' y1='2' x2='2' y2='${t - 2}'/>
      <!-- corner dots -->
      <circle cx='${q}' cy='${q}' r='1.5' fill='%23${color}'/>
      <circle cx='${t - q}' cy='${q}' r='1.5' fill='%23${color}'/>
      <circle cx='${q}' cy='${t - q}' r='1.5' fill='%23${color}'/>
      <circle cx='${t - q}' cy='${t - q}' r='1.5' fill='%23${color}'/>
      <!-- center dot -->
      <circle cx='${h}' cy='${h}' r='2' fill='%23${color}'/>
    </g>
  </svg>`

  const encoded = svg.replace(/\s+/g, ' ').trim()

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,${encoded}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: `${tileSize}px ${tileSize}px`,
        opacity,
        zIndex: 0,
      }}
    />
  )
}
