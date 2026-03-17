import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const cardColors = [
  { bg: '#F0F7F2', border: 'rgba(27,107,58,0.15)', accent: '#1B6B3A' },
  { bg: '#FDF9EE', border: 'rgba(201,162,39,0.15)', accent: '#C9A227' },
  { bg: '#EDF4EF', border: 'rgba(15,36,25,0.12)', accent: '#0F2419' },
  { bg: '#F0FBF5', border: 'rgba(45,155,90,0.15)', accent: '#2D9B5A' },
  { bg: '#FFFBF0', border: 'rgba(184,144,31,0.15)', accent: '#B8901F' },
  { bg: '#EDF6F0', border: 'rgba(27,107,58,0.15)', accent: '#1B6B3A' },
]

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: '#FFFDF5',
        padding: 'clamp(80px, 12vw, 140px) 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="section-label">Key Features</span>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#1D1D1F',
              marginBottom: '20px',
            }}
          >
            What makes me, me.
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: '#86868B',
              maxWidth: '480px',
              margin: '0 auto',
              fontWeight: 300,
            }}
          >
            Carefully curated values. Shipping with every model, insha&apos;Allah.
          </p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '20px',
          }}
        >
          {profile.features.map((feature, i) => {
            const color = cardColors[i % cardColors.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.08,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 24px 60px rgba(0,0,0,0.1)',
                  transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
                }}
                style={{
                  background: color.bg,
                  border: `1px solid ${color.border}`,
                  borderRadius: '24px',
                  padding: '36px',
                  cursor: 'default',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                {/* Emoji */}
                <div
                  style={{
                    fontSize: '40px',
                    marginBottom: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '72px',
                    height: '72px',
                    background: '#fff',
                    borderRadius: '18px',
                    boxShadow: `0 4px 16px ${color.border}`,
                    border: `1px solid ${color.border}`,
                  }}
                >
                  {feature.emoji}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '21px',
                    fontWeight: 700,
                    letterSpacing: '-0.015em',
                    color: '#1D1D1F',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                  }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '15px',
                    color: '#86868B',
                    lineHeight: 1.6,
                    fontWeight: 400,
                  }}
                >
                  {feature.description}
                </p>

                {/* Accent bar */}
                <div
                  style={{
                    marginTop: '24px',
                    height: '3px',
                    width: '40px',
                    background: color.accent,
                    borderRadius: '2px',
                    opacity: 0.6,
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '64px',
            padding: '32px',
            background: '#0F2419',
            borderRadius: '24px',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(18px, 3vw, 26px)',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '-0.015em',
              marginBottom: '8px',
            }}
          >
            All values standard. No in-app purchases required.
          </p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.4)' }}>
            What you see is what you get. Alhamdulillah for that.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
