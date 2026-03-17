import { motion } from 'framer-motion'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { profile } from '../data/profile'

const iconMap: Record<string, React.ElementType> = {
  Instagram,
  LinkedIn: Linkedin,
  Twitter,
}

export default function Connect() {
  const { connect } = profile

  return (
    <section
      id="connect"
      style={{
        background: '#FFFDF5',
        padding: 'clamp(80px, 12vw, 140px) 0 clamp(60px, 10vw, 120px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient blob */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,162,39,0.1) 0%, rgba(27,107,58,0.06) 40%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          style={{
            background: 'linear-gradient(135deg, #0F2419 0%, #1B4A2A 50%, #0F2419 100%)',
            borderRadius: '32px',
            padding: 'clamp(56px, 8vw, 96px) clamp(32px, 6vw, 80px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 40px 120px rgba(0,0,0,0.2)',
          }}
        >
          {/* Decorative orbs */}
          <motion.div
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(201,162,39,0.25), transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />
          <motion.div
            animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              bottom: '-60px',
              left: '-60px',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(27,107,58,0.25), transparent 70%)',
              filter: 'blur(40px)',
              pointerEvents: 'none',
            }}
          />

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-label"
              style={{ marginBottom: '24px' }}
            >
              Begin With Salaam
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              style={{
                fontSize: 'clamp(40px, 7vw, 88px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                color: '#FFFFFF',
                marginBottom: '24px',
              }}
            >
              {connect.headline.split(' ').map((word, i) => (
                <span
                  key={i}
                  style={i >= 3 ? {
                    background: 'linear-gradient(135deg, #C9A227, #E8C547)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  } : {}}
                >
                  {word}{' '}
                </span>
              ))}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontSize: 'clamp(16px, 2.2vw, 20px)',
                color: 'rgba(255,255,255,0.5)',
                maxWidth: '560px',
                margin: '0 auto 56px',
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              {connect.subtext}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ marginBottom: '56px' }}
            >
              <motion.a
                href={connect.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.06,
                  boxShadow: '0 24px 60px rgba(201,162,39,0.6)',
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'linear-gradient(135deg, #C9A227, #E8C547)',
                  color: '#0F2419',
                  borderRadius: '100px',
                  padding: '20px 48px',
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  boxShadow: '0 12px 40px rgba(201,162,39,0.45)',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                {connect.ctaText}
              </motion.a>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              style={{
                width: '60px',
                height: '1px',
                background: 'rgba(255,255,255,0.15)',
                margin: '0 auto 40px',
              }}
            />

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              {connect.socials.map((social, i) => {
                const Icon = iconMap[social.platform]
                return (
                  <motion.a
                    key={i}
                    href={social.url}
                    whileHover={{
                      y: -4,
                      background: 'rgba(255,255,255,0.12)',
                      transition: { duration: 0.2 },
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '100px',
                      padding: '10px 20px',
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '14px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {Icon && <Icon size={16} />}
                    {social.handle}
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '14px', color: '#A0B0A0' }}>
            Made with tawakkul and plenty of ☕ by {profile.name}
          </p>
          <p style={{ fontSize: '12px', color: '#6B7C6B', fontStyle: 'italic' }}>
            Insha'Allah, this is the beginning of something good.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
