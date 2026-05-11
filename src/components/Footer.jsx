export default function Footer() {
  return (
    <footer style={{
      padding: '40px 72px',
      borderTop: '1px solid rgba(245,240,232,.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 20,
      background: '#0D0D0D',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="24" height="24" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="13" fill="none" stroke="#D4AF6E" strokeWidth="1"/>
          <text x="14" y="19" textAnchor="middle" fill="#D4AF6E" fontSize="13" fontFamily="Georgia,serif">N</text>
        </svg>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 20, fontWeight: 600, letterSpacing: 3, color: '#F5F0E8' }}>NANNYNEST</span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 32 }}>
        {['Home', 'Our Nannies', 'Consult', 'Privacy', 'Terms'].map(link => (
          <span key={link} style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: 'rgba(245,240,232,.35)', cursor: 'pointer', transition: 'color .2s', textTransform: 'uppercase' }}
            onMouseEnter={e => e.target.style.color = '#D4AF6E'}
            onMouseLeave={e => e.target.style.color = 'rgba(245,240,232,.35)'}
          >
            {link}
          </span>
        ))}
      </div>

      {/* Copyright */}
      <span style={{ fontSize: 12, color: 'rgba(245,240,232,.25)', letterSpacing: 1 }}>
        © 2025 NannyNest · All Rights Reserved
      </span>
    </footer>
  );
}