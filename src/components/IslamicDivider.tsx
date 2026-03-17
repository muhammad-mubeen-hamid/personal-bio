import { motion } from 'framer-motion'

interface IslamicDividerProps {
  variant?: 'light' | 'dark'
}

export default function IslamicDivider({ variant = 'light' }: IslamicDividerProps) {
  const isLight = variant === 'light'
  const bg = isLight ? '#FFFDF5' : '#0F2419'
  const lineColor = isLight ? 'rgba(201,162,39,0.35)' : 'rgba(201,162,39,0.5)'
  const ornamentColor = isLight ? 'rgba(201,162,39,0.6)' : 'rgba(201,162,39,0.75)'

  return (
    <div
      aria-hidden="true"
      style={{
        background: bg,
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
        height: '48px',
      }}
    >
      <motion.div
        initial={{ scaleX: 0.6, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '0 clamp(20px, 5vw, 48px)',
          transformOrigin: 'center',
        }}
      >
        <svg
          viewBox="0 0 800 40"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: '100%', height: '40px', display: 'block', overflow: 'visible' }}
        >
          {/* Left line with diamond nodes */}
          <line x1="0" y1="20" x2="330" y2="20" stroke={lineColor} strokeWidth="1" />
          <polygon points="290,20 298,14 306,20 298,26" fill={ornamentColor} />
          <polygon points="315,20 320,16 325,20 320,24" fill={ornamentColor} />
          <polygon points="260,20 268,14 276,20 268,26" fill={ornamentColor} />
          <polygon points="230,20 238,14 246,20 238,26" fill={ornamentColor} />
          <polygon points="200,20 208,14 216,20 208,26" fill={ornamentColor} />

          {/* Right line with diamond nodes */}
          <line x1="470" y1="20" x2="800" y2="20" stroke={lineColor} strokeWidth="1" />
          <polygon points="494,20 489,16 484,20 489,24" fill={ornamentColor} />
          <polygon points="475,20 480,14 485,20 480,26" fill={ornamentColor} />
          <polygon points="524,20 532,14 540,20 532,26" fill={ornamentColor} />
          <polygon points="554,20 562,14 570,20 562,26" fill={ornamentColor} />
          <polygon points="584,20 592,14 600,20 592,26" fill={ornamentColor} />

          {/* Central 8-pointed khatam ornament */}
          {/* Outer square rotated 0° */}
          <polygon
            points="400,2 416,20 400,38 384,20"
            fill="none"
            stroke={ornamentColor}
            strokeWidth="1.2"
          />
          {/* Outer square rotated 45° */}
          <rect
            x="389"
            y="9"
            width="22"
            height="22"
            fill="none"
            stroke={ornamentColor}
            strokeWidth="1.2"
            transform="rotate(45 400 20)"
          />
          {/* Center dot */}
          <circle cx="400" cy="20" r="2.5" fill={ornamentColor} />
          {/* Cardinal small dots */}
          <circle cx="400" cy="9" r="1.5" fill={ornamentColor} />
          <circle cx="400" cy="31" r="1.5" fill={ornamentColor} />
          <circle cx="389" cy="20" r="1.5" fill={ornamentColor} />
          <circle cx="411" cy="20" r="1.5" fill={ornamentColor} />
        </svg>
      </motion.div>
    </div>
  )
}
