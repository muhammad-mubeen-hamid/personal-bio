import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { profile } from '../data/profile'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLinks = [
    { label: 'About', id: 'pitch' },
    { label: 'Journey', id: 'journey' },
    { label: 'Character', id: 'specs' },
    { label: 'Values', id: 'features' },
    { label: 'Day', id: 'day' },
    { label: 'Interests', id: 'interests' },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(7, 20, 16, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,162,39,0.15)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontSize: '18px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {profile.name}
          <span style={{ color: '#C9A227', marginLeft: '2px' }}>.</span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '15px',
                fontWeight: 400,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
            >
              {link.label}
            </button>
          ))}
          <a
            href={profile.connect.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #C9A227, #E8C547)',
              color: '#0F2419',
              border: 'none',
              borderRadius: '100px',
              padding: '9px 22px',
              fontSize: '15px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 16px rgba(201,162,39,0.35)',
              textDecoration: 'none',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,162,39,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(201,162,39,0.35)'
            }}
          >
            Say Salaam ☪️
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={menuOpen ? (i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 7 } : { rotate: -45, y: -7 }) : { rotate: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'block', width: '22px', height: '2px', background: '#fff', borderRadius: '1px' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'rgba(7, 20, 16, 0.98)',
              borderTop: '1px solid rgba(201,162,39,0.15)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: '18px',
                    fontWeight: 500,
                    textAlign: 'left',
                    padding: '12px 0',
                    background: 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(201,162,39,0.1)',
                    cursor: 'pointer',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={profile.connect.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '12px',
                  background: 'linear-gradient(135deg, #C9A227, #E8C547)',
                  color: '#0F2419',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '14px',
                  fontSize: '16px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  width: '100%',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                }}
              >
                Say Salaam ☪️
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
