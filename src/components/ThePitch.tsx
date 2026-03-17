import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function highlightText(text: string, highlight: string) {
  const parts = text.split(highlight)
  if (parts.length < 2) return <>{text}</>
  return (
    <>
      {parts[0]}
      <span
        style={{
          background: 'linear-gradient(135deg, #C9A227, #E8C547)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontStyle: 'italic',
          fontWeight: 700,
        }}
      >
        {highlight}
      </span>
      {parts[1]}
    </>
  )
}

const spring = { ease: 'easeOut' as const, duration: 0.8 }

export default function ThePitch() {
  const { pitch } = profile

  return (
    <section
      id="pitch"
      style={{
        background: '#FFFDF5',
        padding: 'clamp(80px, 12vw, 140px) 0',
      }}
    >
      <div className="container">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={spring}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="section-label">The Pitch</span>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#1D1D1F',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            Thoughtfully built.
            <br />
            <span style={{ color: '#6B7C6B', fontWeight: 300 }}>Entirely sincere.</span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(40px, 6vw, 80px)',
            alignItems: 'center',
          }}
        >
          {/* Left: Quote */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...spring, delay: 0.1 }}
          >
            <blockquote
              style={{
                fontSize: 'clamp(22px, 3.5vw, 36px)',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.4,
                color: '#1D1D1F',
                letterSpacing: '-0.015em',
                borderLeft: 'none',
                margin: 0,
                padding: 0,
              }}
            >
              &ldquo;{highlightText(pitch.quote, pitch.highlight)}&rdquo;
            </blockquote>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ...spring, delay: 0.25 }}
              style={{
                marginTop: '40px',
                fontSize: '15px',
                color: '#86868B',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              — {profile.name}, and I mean it
            </motion.p>

            {/* Callout badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ ...spring, delay: 0.35 }}
              style={{
                marginTop: '40px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, rgba(201,162,39,0.08), rgba(232,197,71,0.08))',
                border: '1px solid rgba(201,162,39,0.2)',
                borderRadius: '16px',
                padding: '16px 22px',
              }}
            >
              <span style={{ fontSize: '20px' }}>✦</span>
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 500,
                  color: '#1D1D1F',
                  letterSpacing: '-0.01em',
                }}
              >
                {pitch.callout}
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {pitch.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.12,
                  ease: 'easeOut',
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                style={{
                  background: '#F5F8F5',
                  border: '1px solid rgba(15,36,25,0.08)',
                  borderRadius: '20px',
                  padding: '28px 32px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(40px, 6vw, 64px)',
                    fontWeight: 700,
                    letterSpacing: '-0.035em',
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, #C9A227, #E8C547)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    minWidth: '80px',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '17px',
                    color: '#86868B',
                    fontWeight: 400,
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}

            {/* Extra fun fact card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.56, ease: 'easeOut' }}
              style={{
                background: 'linear-gradient(135deg, #0F2419, #1B4A2A)',
                borderRadius: '20px',
                padding: '28px 32px',
                color: '#fff',
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>🤲</div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                Seeking a partner to build something beautiful —{' '}
                <span style={{ color: '#E8C547', fontWeight: 600 }}>for this dunya and the next</span>
                .
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
