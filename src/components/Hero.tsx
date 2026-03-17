import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import IslamicPattern from './IslamicPattern'

const words = ['Assalamu Alaikum,', profile.name + '.']

const orbs = [
  { size: 500, x: '10%', y: '20%', color: 'rgba(201,162,39,0.18)', blur: 80, duration: 8 },
  { size: 400, x: '70%', y: '10%', color: 'rgba(201,162,39,0.14)', blur: 60, duration: 11 },
  { size: 350, x: '55%', y: '65%', color: 'rgba(27,107,58,0.22)', blur: 70, duration: 9 },
  { size: 300, x: '-5%', y: '60%', color: 'rgba(27,107,58,0.15)', blur: 50, duration: 13 },
]

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollDown = () => {
    document.getElementById('intent')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Parallax on scroll
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY
      el.style.transform = `translateY(${y * 0.3}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        background: '#0F2419',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '120px 24px 80px',
      }}
    >
      {/* Animated gradient orbs */}
      <div ref={scrollRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {/* Islamic geometric pattern overlay */}
        <IslamicPattern opacity={0.06} color="C9A227" tileSize={80} />

        {orbs.map((orb, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -25, 15, 0],
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 1.5,
            }}
            style={{
              position: 'absolute',
              left: orb.x,
              top: orb.y,
              width: orb.size,
              height: orb.size,
              borderRadius: '50%',
              background: orb.color,
              filter: `blur(${orb.blur}px)`,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* Noise texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', width: '100%' }}>

        {/* Bismillah block */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          style={{ marginBottom: '32px' }}
        >
          <div
            style={{
              fontFamily: "'Amiri', 'Scheherazade New', 'Traditional Arabic', serif",
              direction: 'rtl',
              unicodeBidi: 'bidi-override' as const,
              fontSize: 'clamp(22px, 4vw, 36px)',
              color: '#C9A227',
              letterSpacing: '0.04em',
              lineHeight: 1.5,
              marginBottom: '6px',
            }}
          >
            بِسْمِ اللَّٰهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <div
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontStyle: 'italic',
            }}
          >
            In the name of Allah, the Most Gracious, the Most Merciful
          </div>
        </motion.div>

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(201,162,39,0.12)',
            border: '1px solid rgba(201,162,39,0.25)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '40px',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A227', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.04em' }}>
            {profile.profession} · {profile.location} · {profile.background}
          </span>
        </motion.div>

        {/* Main headline — word by word */}
        <h1
          style={{
            fontSize: 'clamp(52px, 9vw, 100px)',
            fontWeight: 700,
            color: '#FFFFFF',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.25em',
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                duration: 0.9,
                delay: 0.5 + i * 0.18,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={i === 1 ? {
                background: 'linear-gradient(135deg, #C9A227, #E8C547)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              } : {}}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontSize: 'clamp(18px, 3vw, 26px)',
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
            letterSpacing: '-0.01em',
            marginBottom: '8px',
            lineHeight: 1.4,
          }}
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{
            fontSize: 'clamp(15px, 2vw, 18px)',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '56px',
            maxWidth: '740px',
            marginInline: 'auto',
          }}
        >
          {profile.heroSubtitle} {profile.taglineSub}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a
            href={profile.connect.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #C9A227, #E8C547)',
              color: '#0F2419',
              border: 'none',
              borderRadius: '100px',
              padding: '16px 36px',
              fontSize: '17px',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(201,162,39,0.4)',
              transition: 'transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(201,162,39,0.55)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,162,39,0.4)'
            }}
          >
            {profile.connect.ctaText}
          </a>
          <button
            onClick={() => document.getElementById('intent')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '100px',
              padding: '16px 36px',
              fontSize: '17px',
              fontWeight: 500,
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              transition: 'background 0.25s ease, border-color 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            }}
          >
            Learn more ↓
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            width: '28px',
            height: '46px',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '14px',
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: '6px',
          }}
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '4px',
              height: '8px',
              background: 'rgba(255,255,255,0.5)',
              borderRadius: '2px',
            }}
          />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
      `}</style>
    </section>
  )
}
