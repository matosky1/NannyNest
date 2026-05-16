export default function Navbar({ page, go }) {
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'white', borderBottom: '1px solid var(--border)', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
      
      {/* LOGO AS TEXT */}
      <div onClick={() => go('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: "'DM Serif Display',serif", fontSize: 18 }}>T</div>
        <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: 22, color: 'var(--teal-deeper)' }}>
          Tinytrust <span style={{ color: 'var(--coral)' }}>Services</span>
        </span>
      </div>

      {/* NAV LINKS */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        {[['home','Home'],['nannies','Find a Nanny'],['consult','Consult Us']].map(([p,l]) => (
          <span key={p} onClick={() => go(p)} style={{ fontSize: 15, fontWeight: 500, color: page===p ? 'var(--teal)' : 'var(--text-mid)', cursor: 'pointer', transition: 'color .2s', borderBottom: page===p ? '2px solid var(--teal)' : '2px solid transparent', paddingBottom: 2 }}>{l}</span>
        ))}
        <button className="btn-coral" style={{ padding: '10px 22px', fontSize: 14 }} onClick={() => go('nannies')}>Book Now</button>
      </div>

    </nav>
  );
}