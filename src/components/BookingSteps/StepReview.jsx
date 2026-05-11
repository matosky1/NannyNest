export default function StepReview({ form, nanny, onConfirm }) {
  const total = nanny.rate * form.hours;
  const fee = Math.round(total * 0.1);

  return (
    <div className="fi">
      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 300, marginBottom: 36 }}>Review your booking</h3>
      <div style={{ background: '#111', border: '1px solid rgba(245,240,232,.08)', marginBottom: 28 }}>
        {[
          ['Nanny',    nanny.name],
          ['Date',     form.date],
          ['Time',     `${form.time} · ${form.hours} hrs`],
          ['Address',  form.address],
          ['Children', `${form.children} child${form.children > 1 ? 'ren' : ''}`],
          ['Total',    `$${total + fee}`],
        ].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 24px', borderBottom: '1px solid rgba(245,240,232,.05)' }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: 'rgba(245,240,232,.35)' }}>{k.toUpperCase()}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: k === 'Total' ? '#D4AF6E' : '#F5F0E8' }}>{v}</span>
          </div>
        ))}
      </div>
      <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={onConfirm}>
        PLACE BOOKING ✓
      </button>
    </div>
  );
}