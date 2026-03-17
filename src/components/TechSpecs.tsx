import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import IslamicPattern from './IslamicPattern'

export default function TechSpecs() {
  return (
    <section
      id="specs"
      style={{
        background: '#0F2419',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vw, 140px) 0',
      }}
    >
      <IslamicPattern opacity={0.05} color="C9A227" tileSize={80} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="section-label">Full Specifications</span>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            The character sheet.
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: 'rgba(255,255,255,0.45)',
              maxWidth: '480px',
              margin: '0 auto',
              fontWeight: 300,
            }}
          >
            Full transparency. Because that's how it should be.
          </p>
        </motion.div>

        {/* Spec table */}
        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            border: '1px solid rgba(201,162,39,0.12)',
            borderRadius: '24px',
            overflow: 'hidden',
            background: 'rgba(201,162,39,0.03)',
          }}
        >
          {/* Table header */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(120px, 200px) 1fr',
              padding: '16px clamp(16px, 4vw, 32px)',
              background: 'rgba(201,162,39,0.06)',
              borderBottom: '1px solid rgba(201,162,39,0.1)',
            }}
          >
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Property
            </span>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Value
            </span>
          </div>

          {/* Spec rows */}
          {profile.specs.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(120px, 200px) 1fr',
                padding: 'clamp(16px, 2vw, 22px) clamp(16px, 4vw, 32px)',
                borderBottom: i < profile.specs.length - 1 ? '1px solid rgba(201,162,39,0.08)' : 'none',
                gap: '16px',
                alignItems: 'start',
                transition: 'background 0.2s ease',
                cursor: 'default',
              }}
              whileHover={{
                background: 'rgba(201,162,39,0.04)',
              }}
            >
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.01em',
                  paddingTop: '2px',
                }}
              >
                {spec.label}
              </span>
              <span
                style={{
                  fontSize: '15px',
                  color: spec.label === 'Availability'
                    ? '#C9A227'
                    : spec.label === 'Mahr'
                    ? '#E8C547'
                    : 'rgba(255,255,255,0.85)',
                  fontWeight: spec.label === 'Availability' || spec.label === 'Mahr' ? 600 : 400,
                  lineHeight: 1.5,
                }}
              >
                {spec.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '40px',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.02em',
          }}
        >
          * These qualities are standard. Verified by those who know him best, and ultimately by Allah ﷻ.
        </motion.p>
      </div>
    </section>
  )
}
