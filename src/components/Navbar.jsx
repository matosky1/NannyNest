export default function Navbar({ page, go }) {
  return (
    <nav style={{ padding: '0 48px', height: 72, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(245,240,232,.06)', position: 'sticky', top: 0, background: 'rgba(13,13,13,.95)', backdropFilter: 'blur(20px)', zIndex: 100 }}>
      <div onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 12 }}>
        <svg width="28" height="28" viewBox="0 0 28 28">
          <circle cx="14" cy="14" r="13" fill="none" stroke="#D4AF6E" strokeWidth="1"/>
          <text x="14" y="19" textAnchor="middle" fill="#D4AF6E" fontSize="13" fontFamily="Georgia,serif">N</text>
        </svg>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 600, letterSpacing: 3 }}>NANNYNEST</span>
      </div>
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
        {[['home','HOME'],['nannies','OUR NANNIES'],['consult','CONSULT']].map(([p,l]) => (
          <span key={p} onClick={() => go(p)} style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: page===p ? '#D4AF6E' : 'rgba(245,240,232,.5)', cursor: 'pointer', transition: 'color .2s', borderBottom: page===p ? '1px solid #D4AF6E' : 'none', paddingBottom: 2 }}>{l}</span>
        ))}
        <button className="btn btn-gold" style={{ padding: '11px 24px', fontSize: 11 }} onClick={() => go('nannies')}>BOOK NOW</button>
      </div>
    </nav>
  );
}