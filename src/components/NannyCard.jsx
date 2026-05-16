export default function NannyCard({ n, onBook, full }) {
  const days = ['Mo','Tu','We','Th','Fr','Sa','Su'];
  return (
    <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: '1.5rem', transition: 'transform .2s, box-shadow .2s' }}
      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 10px 28px rgba(0,0,0,.07)'; }}
      onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: n.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Serif Display',serif", fontSize: 18, color: 'white', flexShrink: 0, position: 'relative' }}>
          {n.avatar}
          <div style={{ position: 'absolute', bottom: 2, right: 2, width: 11, height: 11, borderRadius: '50%', background: n.available ? '#22c55e' : '#d1d5db', border: '2px solid white' }} />
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600 }}>{n.name}</div>
          <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>📍 {n.location}</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--teal)', marginTop: 3 }}>${n.rate}/hr · <span style={{ fontWeight: 400, color: '#999', fontSize: 12 }}>{n.experience} yrs</span></div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
        {n.specialties.map(s => <span key={s} style={{ background: 'var(--teal-light)', color: 'var(--teal-dark)', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{s}</span>)}
        {n.urgent && <span style={{ background: 'var(--coral-light)', color: 'var(--coral)', borderRadius: 20, padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>Urgent available</span>}
      </div>
      {full && <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: 10 }}>{n.bio}</p>}
      <div style={{ fontSize: 10, fontWeight: 700, color: '#aaa', letterSpacing: .5, marginBottom: 6 }}>AVAILABLE DAYS</div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
        {days.map((d,i) => (
          <div key={d} style={{ width: 28, height: 28, borderRadius: 6, fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', background: n.days[i] ? 'var(--teal-light)' : '#f4f4f4', color: n.days[i] ? 'var(--teal-dark)' : '#ccc' }}>{d}</div>
        ))}
      </div>
      <button className="btn-primary" style={{ width: '100%', padding: 10, fontSize: 13, borderRadius: 8 }} disabled={!n.available} onClick={() => onBook(n)}>
        {n.available ? `Book ${n.name.split(' ')[0]} →` : 'Currently Unavailable'}
      </button>
    </div>
  );
}