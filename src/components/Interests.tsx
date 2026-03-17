import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const pillColors = [
  { bg: '#F0F7F2', text: '#1B6B3A', border: 'rgba(27,107,58,0.2)' },
  { bg: '#FDF9EE', text: '#A07A1A', border: 'rgba(160,122,26,0.2)' },
  { bg: '#EDF4EF', text: '#0F2419', border: 'rgba(15,36,25,0.2)' },
  { bg: '#FFF8ED', text: '#8A6A10', border: 'rgba(138,106,16,0.2)' },
  { bg: '#E8F5ED', text: '#165C30', border: 'rgba(22,92,48,0.2)' },
  { bg: '#FBF5E6', text: '#9B7B1A', border: 'rgba(155,123,26,0.2)' },
  { bg: '#EAF2EC', text: '#1A5C35', border: 'rgba(26,92,53,0.2)' },
  { bg: '#FFF3DA', text: '#8A6710', border: 'rgba(138,103,16,0.2)' },
  { bg: '#EDF6EF', text: '#2D9B5A', border: 'rgba(45,155,90,0.2)' },
  { bg: '#F5F0E8', text: '#6B4F12', border: 'rgba(107,79,18,0.2)' },
  { bg: '#ECF5EE', text: '#175C2F', border: 'rgba(23,92,47,0.2)' },
  { bg: '#FDF8EC', text: '#9E7B18', border: 'rgba(158,123,24,0.2)' },
  { bg: '#EBF3ED', text: '#1B6B3A', border: 'rgba(27,107,58,0.2)' },
  { bg: '#FFF6E0', text: '#7D5E10', border: 'rgba(125,94,16,0.2)' },
]

export default function Interests() {
  return (
    <section
      id="interests"
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
          <span className="section-label">Interests & Passions</span>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#1D1D1F',
              marginBottom: '16px',
            }}
          >
            What I'm into.
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: '#86868B',
              fontWeight: 300,
            }}
          >
            Shared interests are a conversation starter. Shared values are the foundation.
          </p>
        </motion.div>

        {/* Pill grid */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '14px',
            justifyContent: 'center',
            maxWidth: '800px',
            margin: '0 auto',
          }}
        >
          {profile.interests.map((interest, i) => {
            const color = pillColors[i % pillColors.length]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.04,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  transition: { duration: 0.25, ease: [0.34, 1.56, 0.64, 1] },
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: color.bg,
                  border: `1px solid ${color.border}`,
                  borderRadius: '100px',
                  padding: '12px 22px',
                  cursor: 'default',
                  userSelect: 'none',
                }}
              >
                <span style={{ fontSize: '22px', lineHeight: 1 }}>{interest.emoji}</span>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: 600,
                    color: color.text,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {interest.label}
                </span>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            marginTop: '72px',
            background: 'linear-gradient(135deg, #0F2419 0%, #1B6B3A 100%)',
            borderRadius: '28px',
            padding: 'clamp(40px, 6vw, 64px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Background decoration */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,162,39,0.18), transparent 70%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-40px',
              left: '-40px',
              width: '180px',
              height: '180px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,162,39,0.12), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontSize: 'clamp(20px, 3vw, 28px)',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-0.015em',
                marginBottom: '8px',
              }}
            >
              Share any of these? We already have something to talk about.
            </p>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.4)', marginBottom: '28px' }}>
              Even if you don't — I'm curious about yours. Insha'Allah.
            </p>
            <a
              href={profile.connect.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(135deg, #C9A227, #E8C547)',
                color: '#0F2419',
                border: 'none',
                borderRadius: '100px',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(201,162,39,0.4)',
                transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
                textDecoration: 'none',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'scale(1.06) translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(201,162,39,0.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)'
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,162,39,0.4)'
              }}
            >
              Say Salaam ☪️
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
