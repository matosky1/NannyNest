export default function NannyCard({ n, onBook, full }) {
  return (
    <div className="ncard" style={{ padding: '28px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div style={{ width: 50, height: 50, background: n.accent+'18', border: `1px solid ${n.accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 15, color: n.accent }}>{n.avatar}</div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 32, fontWeight: 300, color: '#D4AF6E', lineHeight: 1 }}>${n.rate}</div>
          <div style={{ fontSize: 9, letterSpacing: 2, color: 'rgba(245,240,232,.3)', fontWeight: 700 }}>/HOUR</div>
        </div>
      </div>
      <div style={{ marginBottom: 6, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 700, fontSize: 16 }}>{n.name}</span>
        <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: 1.5, color: n.accent, background: n.accent+'18', padding: '3px 8px' }}>{n.badge}</span>
      </div>
      <div style={{ fontSize: 12, color: 'rgba(245,240,232,.4)', marginBottom: 16 }}>★ {n.rating} ({n.reviews}) · {n.experience} yrs experience</div>
      {full && <p style={{ fontSize: 12, color: 'rgba(245,240,232,.4)', lineHeight: 1.7, marginBottom: 16 }}>{n.bio}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 20 }}>
        {n.specialties.map(s => <span key={s} className="tag">{s}</span>)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid rgba(245,240,232,.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: n.available ? '#8FC4A2' : 'rgba(245,240,232,.2)' }}/>
          <span style={{ fontSize: 10, letterSpacing: 1.5, fontWeight: 700, color: n.available ? '#8FC4A2' : 'rgba(245,240,232,.25)' }}>{n.available ? 'AVAILABLE' : 'BOOKED'}</span>
        </div>
        {n.available && (
          <button className="btn btn-gold" style={{ padding: '9px 18px', fontSize: 10 }} onClick={() => onBook(n)}>BOOK →</button>
        )}
      </div>
    </div>
  );
}