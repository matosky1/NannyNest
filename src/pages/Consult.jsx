import { useState } from 'react';

export default function Consult() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', msg:'' });
  const [sent, setSent] = useState(false);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 48px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#D4AF6E', marginBottom: 16 }}>FREE CONSULTATION</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 52, fontWeight: 300, lineHeight: 1.1, marginBottom: 28 }}>Let's find the<br /><em>right fit</em><br />for your family.</h2>
          <p style={{ fontSize: 15, color: 'rgba(245,240,232,.45)', lineHeight: 1.9, marginBottom: 48 }}>Our experts will understand your schedule and match you with the ideal nanny — no obligation, no cost.</p>
          <div style={{ border: '1px solid rgba(245,240,232,.08)' }}>
            {[['📞','Direct Hotline','Mon–Sat, 8am–7pm'],['📧','Email Support','Reply within 2 hours'],['💬','Live Chat','Instant responses'],['🏠','Home Assessment','We visit your home']].map(([i,t,d]) => (
              <div key={t} style={{ padding: '20px 24px', borderBottom: '1px solid rgba(245,240,232,.06)', display: 'flex', alignItems: 'center', gap: 16 }}>
                <span style={{ fontSize: 22 }}>{i}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14 }}>{t}</div>
                  <div style={{ fontSize: 12, color: 'rgba(245,240,232,.35)', marginTop: 2 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '64px 40px', border: '1px solid rgba(212,175,110,.2)', background: 'rgba(212,175,110,.04)' }} className="fi">
              <div style={{ fontSize: 48, marginBottom: 20 }}>✉️</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 34, fontWeight: 300, marginBottom: 12 }}>Message Sent</h3>
              <p style={{ fontSize: 14, color: 'rgba(245,240,232,.45)', marginBottom: 32 }}>Thank you, <strong style={{ color: '#F5F0E8' }}>{form.name}</strong>. We'll be in touch within 24 hours.</p>
              <button className="btn btn-ghost" onClick={() => { setSent(false); setForm({name:'',email:'',phone:'',msg:''}); }}>SEND ANOTHER →</button>
            </div>
          ) : (
            <div style={{ padding: '40px', background: '#111', border: '1px solid rgba(245,240,232,.08)' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 28, fontWeight: 300, marginBottom: 32 }}>Send a Message</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <div><label>Your Name</label><input placeholder="Full name" value={form.name} onChange={e => setForm({...form,name:e.target.value})} /></div>
                <div><label>Email</label><input type="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} /></div>
                <div><label>Phone</label><input placeholder="+1 000 000 0000" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} /></div>
                <div><label>How can we help?</label><textarea rows={4} placeholder="Tell us about your family and childcare needs..." value={form.msg} onChange={e => setForm({...form,msg:e.target.value})} /></div>
                <button className="btn btn-gold" style={{ justifyContent: 'center' }} disabled={!form.name||!form.email||!form.msg} onClick={() => setSent(true)}>SEND MESSAGE →</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}