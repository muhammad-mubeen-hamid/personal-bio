import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import IslamicPattern from './IslamicPattern'

export default function Journey() {
  return (
    <section
      id="journey"
      style={{
        background: '#0F2419',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vw, 140px) 0',
      }}
    >
      <IslamicPattern opacity={0.05} color="C9A227" tileSize={84} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="section-label">My Journey</span>
          <h2
            style={{
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: '#FFFFFF',
              marginBottom: '18px',
            }}
          >
            From Pakistan to this moment.
          </h2>
          <p
            style={{
              fontSize: '19px',
              color: 'rgba(255,255,255,0.45)',
              maxWidth: '620px',
              margin: '0 auto',
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            A scrollable timeline of the chapters that shaped who I am and what I am building toward.
          </p>
        </motion.div>

        <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '30px',
              top: '30px',
              bottom: '30px',
              width: '2px',
              background: 'linear-gradient(to bottom, #C9A227 0%, #E8C547 45%, #1B6B3A 100%)',
              transformOrigin: 'top',
              borderRadius: '2px',
              zIndex: 0,
            }}
          />

          {profile.journey.map((milestone, i) => (
            <motion.div
              key={`${milestone.year}-${milestone.title}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -36 : 36, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.75,
                delay: i * 0.08,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'flex-start',
                marginBottom: '28px',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '62px',
                  minWidth: '62px',
                  height: '62px',
                  borderRadius: '50%',
                  background: '#0F2419',
                  border: `2px solid ${milestone.future ? 'rgba(232,197,71,0.6)' : 'rgba(201,162,39,0.3)'}`,
                  boxShadow: '0 0 0 8px #0F2419, 0 8px 20px rgba(0,0,0,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {milestone.emoji}
              </div>

              <motion.article
                whileHover={{
                  x: 4,
                  transition: { duration: 0.2, ease: 'easeOut' },
                }}
                style={{
                  flex: 1,
                  borderRadius: '22px',
                  border: milestone.future
                    ? '1px dashed rgba(232,197,71,0.45)'
                    : '1px solid rgba(255,255,255,0.1)',
                  background: milestone.future
                    ? 'linear-gradient(135deg, rgba(201,162,39,0.14), rgba(255,255,255,0.06))'
                    : 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  padding: '24px 26px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#E8C547',
                      background: 'rgba(201,162,39,0.12)',
                      border: '1px solid rgba(201,162,39,0.25)',
                      borderRadius: '100px',
                      padding: '5px 10px',
                    }}
                  >
                    {milestone.year}
                  </span>
                  {milestone.future && (
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#1B6B3A',
                        background: '#E8C547',
                        borderRadius: '100px',
                        padding: '5px 10px',
                      }}
                    >
                      InshaAllah
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: 'clamp(20px, 3.2vw, 28px)',
                    color: '#FFFFFF',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '10px',
                  }}
                >
                  {milestone.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.78)',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    marginBottom: '10px',
                  }}
                >
                  {milestone.description}
                </p>
                <p
                  style={{
                    color: '#E8C547',
                    fontSize: '14px',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}
                >
                  {milestone.impact}
                </p>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
