import { useState } from 'react';

export default function Consult() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', children:'', service:'', urgent: false, msg:'' });
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: 'var(--teal-deeper)', padding: '80px 2rem', minHeight: '80vh' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--teal-mid)', textTransform: 'uppercase', marginBottom: 10 }}>Free consultation</div>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(28px,4vw,42px)', color: 'white', lineHeight: 1.2, marginBottom: 16 }}>Let's find the<br />right fit for your family.</h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,.7)', lineHeight: 1.75, marginBottom: '2rem' }}>Our founder personally handles every consultation. Tell us about your family's needs and we'll match you with the ideal caregiver — no obligation.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[['📞','Direct line','204-510-3869 · Mon–Sat 8am–7pm'],['📧','Email us','info@tinytrustservices.ca'],['💬','WhatsApp','Message us for urgent requests'],['📍','Location','Calgary, Alberta, Canada']].map(([i,t,d]) => (
                <div key={t} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 12, padding: '1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 22 }}>{i}</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'white', marginBottom: 4 }}>{t}</div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,.6)' }}>{d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: 20, padding: '2rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }} className="fi">
                <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
                <h3 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 28, color: 'var(--teal-deeper)', marginBottom: 12 }}>Message received!</h3>
                <p style={{ fontSize: 15, color: 'var(--text-mid)', marginBottom: 28 }}>Thank you, <strong>{form.name}</strong>. Our founder will reach out within 24 hours.</p>
                <button className="btn-primary" onClick={() => { setSent(false); setForm({ name:'',email:'',phone:'',children:'',service:'',urgent:false,msg:'' }); }}>Send another message</button>
              </div>
            ) : (
              <>
                <h4 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 22, color: 'var(--teal-deeper)', marginBottom: '1.5rem' }}>Get in touch</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div><label>Your name</label><input placeholder="Jane Smith" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /></div>
                  <div><label>Phone</label><input placeholder="(204) 000-0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} /></div>
                </div>
                <div style={{ marginBottom: '1rem' }}><label>Email</label><input type="email" placeholder="you@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div><label>Number of children</label>
                    <select value={form.children} onChange={e=>setForm({...form,children:e.target.value})}>
                      <option value="">Select</option>
                      {[1,2,3,4,5].map(n=><option key={n} value={n}>{n} child{n>1?'ren':''}</option>)}
                    </select>
                  </div>
                  <div><label>Service needed</label>
                    <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}>
                      <option value="">Select</option>
                      {['After-school care','Overnight care','Special needs support','Newborn care','Live-in nanny','Urgent placement'].map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div onClick={()=>setForm({...form,urgent:!form.urgent})} style={{ background: form.urgent?'var(--coral-light)':'#fafafa', border: `1.5px solid ${form.urgent?'var(--coral-mid)':'var(--border)'}`, borderRadius: 10, padding: '1rem', display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '1rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={form.urgent} onChange={()=>{}} style={{ width:18,height:18,accentColor:'var(--coral)',cursor:'pointer' }} />
                  <div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--coral)' }}>⚡ This is an urgent request</span>
                    <div style={{ fontSize: 12, color: 'var(--text-mid)', marginTop: 2 }}>We'll prioritise your request for same-day or next-day placement</div>
                  </div>
                </div>
                <div style={{ marginBottom: '1.25rem' }}><label>Tell us more</label><textarea rows={3} placeholder="Ages of children, schedule, any special needs or requirements..." value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} style={{ resize: 'vertical', minHeight: 90 }} /></div>
                <button className="btn-primary" style={{ width: '100%', padding: 14, fontSize: 15 }} disabled={!form.name||!form.email||!form.msg} onClick={() => setSent(true)}>Send message →</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}