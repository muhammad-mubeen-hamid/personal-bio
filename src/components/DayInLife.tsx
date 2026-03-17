import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function DayInLife() {
  return (
    <section
      id="day"
      style={{
        background: '#FFF8ED',
        padding: 'clamp(80px, 12vw, 140px) 0',
        overflow: 'hidden',
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
          <span className="section-label">A Typical Day</span>
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
            A day with me.
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: '#86868B',
              fontWeight: 300,
            }}
          >
            A glimpse into what barakah looks like on a Tuesday.
          </p>
        </motion.div>

        {/* Timeline — vertical on desktop, scrollable on mobile */}
        <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '28px',
              top: '28px',
              bottom: '28px',
              width: '2px',
              background: 'linear-gradient(to bottom, #C9A227, #1B6B3A)',
              transformOrigin: 'top',
              borderRadius: '1px',
            }}
          />

          {profile.timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{
                display: 'flex',
                gap: '28px',
                alignItems: 'flex-start',
                marginBottom: '32px',
                paddingLeft: '0',
              }}
            >
              {/* Circle on timeline */}
              <div
                style={{
                  position: 'relative',
                  flexShrink: 0,
                  width: '56px',
                  height: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}
              >
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 + 0.3 }}
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#fff',
                    border: '2px solid rgba(201,162,39,0.25)',
                    boxShadow: '0 4px 16px rgba(201,162,39,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                  }}
                >
                  {item.emoji}
                </motion.div>
              </div>

              {/* Content */}
              <motion.div
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2 },
                }}
                style={{
                  flex: 1,
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.06)',
                  borderRadius: '20px',
                  padding: '22px 28px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
                  cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#1B6B3A',
                      letterSpacing: '0.06em',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {item.time}
                  </span>
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'rgba(0,0,0,0.15)',
                      display: 'inline-block',
                    }}
                  />
                  <span
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: '#1D1D1F',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.label}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#86868B',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            textAlign: 'center',
            marginTop: '24px',
            fontSize: '14px',
            color: '#AEAEB2',
            fontStyle: 'italic',
          }}
        >
          Schedule may vary ±2 hours. Fajr, however, is non-negotiable.
        </motion.p>
      </div>
    </section>
  )
}
