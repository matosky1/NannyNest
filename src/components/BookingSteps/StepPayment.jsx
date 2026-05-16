export default function StepPayment({ form, setForm, nanny, onNext }) {
  const total = nanny.rate * form.hours;
  const fee = Math.round(total * 0.1);

  return (
    <div className="fi">
      <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 32, color: 'var(--teal-deeper)', marginBottom: 28 }}>Secure payment</h3>
      <div style={{ padding: '1.25rem 1.5rem', background: 'var(--teal-light)', borderRadius: 12, marginBottom: 24 }}>
        {[['Nanny rate',`${form.hours} hrs × $${nanny.rate}`,`$${total}`],['Platform fee','10%',`$${fee}`],['Total due','',`$${total+fee}`]].map(([l,s,v],i)=>(
          <div key={l} style={{ display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:i<2?'1px solid rgba(0,0,0,.08)':'none' }}>
            <span style={{ fontSize:14,color:i===2?'var(--teal-deeper)':'var(--text-mid)',fontWeight:i===2?700:400 }}>{l}{s?` (${s})`:''}</span>
            <span style={{ fontWeight:700,color:i===2?'var(--teal)':'var(--text)',fontSize:i===2?20:14 }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginBottom: 16 }}><label>Card number</label><input placeholder="1234 5678 9012 3456" maxLength={19} value={form.card} onChange={e=>setForm({...form,card:e.target.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim()})} /></div>
      <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:28 }}>
        <div><label>Expiry</label><input placeholder="MM/YY" maxLength={5} value={form.expiry} onChange={e=>setForm({...form,expiry:e.target.value})} /></div>
        <div><label>CVV</label><input type="password" placeholder="•••" maxLength={3} value={form.cvv} onChange={e=>setForm({...form,cvv:e.target.value})} /></div>
      </div>
      <p style={{ fontSize:12,color:'var(--text-light)',marginBottom:20 }}>🔒 256-bit encryption · Your payment data is never stored</p>
      <button className="btn-primary" style={{ width:'100%',padding:14,fontSize:15 }} disabled={form.card.length<19||!form.expiry||form.cvv.length<3} onClick={onNext}>Confirm & Pay ${total+fee} →</button>
    </div>
  );
}