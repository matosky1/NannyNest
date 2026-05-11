export default function StepPayment({ form, setForm, nanny, onNext }) {
  const total = nanny.rate * form.hours;
  const fee = Math.round(total * 0.1);

  return (
    <div className="fi">
      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 300, marginBottom: 36 }}>Secure payment</h3>
      <div style={{ padding: '20px 24px', background: 'rgba(212,175,110,.06)', border: '1px solid rgba(212,175,110,.15)', marginBottom: 28 }}>
        {[['Nanny rate', `${form.hours} hrs × $${nanny.rate}`, `$${total}`], ['Platform fee', '10%', `$${fee}`], ['Total due', '', `$${total + fee}`]].map(([l,s,v],i) => (
          <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i<2 ? '1px solid rgba(245,240,232,.06)' : 'none' }}>
            <span style={{ fontSize: 13, color: i===2 ? '#F5F0E8' : 'rgba(245,240,232,.5)' }}>{l}{s ? ` (${s})` : ''}</span>
            <span style={{ fontWeight: 700, color: i===2 ? '#D4AF6E' : '#F5F0E8', fontFamily: i===2 ? "'Cormorant Garamond',serif" : 'inherit', fontSize: i===2 ? 22 : 14 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 20 }}><label>Card Number</label><input placeholder="1234 5678 9012 3456" maxLength={19} value={form.card} onChange={e => setForm({...form, card: e.target.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim()})} /></div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 36 }}>
        <div><label>Expiry</label><input placeholder="MM/YY" maxLength={5} value={form.expiry} onChange={e => setForm({...form, expiry: e.target.value})} /></div>
        <div><label>CVV</label><input type="password" placeholder="•••" maxLength={3} value={form.cvv} onChange={e => setForm({...form, cvv: e.target.value})} /></div>
      </div>
      <div style={{ fontSize: 11, color: 'rgba(245,240,232,.3)', letterSpacing: 1, marginBottom: 28 }}>🔒 256-BIT ENCRYPTION · YOUR DATA IS NEVER STORED</div>
      <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} disabled={form.card.length < 19 || !form.expiry || form.cvv.length < 3} onClick={onNext}>CONFIRM & PAY ${total+fee} →</button>
    </div>
  );
}