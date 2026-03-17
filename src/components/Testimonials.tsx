import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ fontSize: '16px', color: '#C9A227' }}
        >
          ★
        </motion.span>
      ))}
    </div>
  )
}

const avatarEmojis = ['🤱', '🧑‍🤝‍🧑', '🧔']

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        background: '#0F2419',
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
          <span className="section-label">Verified Reviews</span>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '16px',
            }}
          >
            What they&apos;re saying.
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 300,
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            Totally unbiased. Definitely not written by me.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '20px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          {profile.testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.12,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
              }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '36px',
                cursor: 'default',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              {/* Stars */}
              <Stars count={t.stars} />

              {/* Quote */}
              <p
                style={{
                  fontSize: 'clamp(16px, 2vw, 19px)',
                  color: 'rgba(255,255,255,0.85)',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  margin: '20px 0 28px',
                  letterSpacing: '-0.01em',
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(201,162,39,0.2), rgba(27,107,58,0.2))',
                    border: '1px solid rgba(201,162,39,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}
                >
                  {avatarEmojis[i] || '👤'}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.35)',
                      marginTop: '2px',
                    }}
                  >
                    {t.relation}
                  </div>
                </div>

                {/* Verified badge */}
                <div
                  style={{
                    marginLeft: 'auto',
                    background: 'rgba(52,199,89,0.12)',
                    border: '1px solid rgba(52,199,89,0.25)',
                    borderRadius: '100px',
                    padding: '4px 10px',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#34C759',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    flexShrink: 0,
                  }}
                >
                  ✓ Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '40px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.2)',
            fontStyle: 'italic',
            letterSpacing: '0.02em',
          }}
        >
          * Reviews verified by those who know him best. Mashallah, they're good ones.
        </motion.p>
      </div>
    </section>
  )
}
