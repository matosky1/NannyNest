import { useState } from 'react';
import StepDateTime from '../components/BookingSteps/StepDateTime';
import StepYourInfo from '../components/BookingSteps/StepYourInfo';
import StepPayment  from '../components/BookingSteps/StepPayment';
import StepReview   from '../components/BookingSteps/StepReview';

const STEPS = ['Date & Time', 'Your Info', 'Payment', 'Confirm'];

export default function Booking({ go, nanny }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ date:'', time:'', hours:4, name:'', phone:'', address:'', children:'1', notes:'', card:'', expiry:'', cvv:'' });

  const total = nanny ? nanny.rate * form.hours : 0;
  const fee = Math.round(total * 0.1);

  if (!nanny) return <div style={{ padding: 80, textAlign: 'center' }}>No nanny selected. <button className="btn btn-ghost" onClick={() => go('nannies')}>Browse Nannies</button></div>;

  if (done) return (
    <div style={{ maxWidth: 560, margin: '0 auto', padding: '100px 48px', textAlign: 'center' }} className="fi">
      <div style={{ width: 80, height: 80, border: '1px solid #D4AF6E', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, margin: '0 auto 36px', color: '#D4AF6E' }}>✓</div>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#D4AF6E', marginBottom: 16 }}>BOOKING CONFIRMED</div>
      <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 300, marginBottom: 20, lineHeight: 1.1 }}>You're all set,<br /><em>{form.name.split(' ')[0] || 'friend'}.</em></h2>
      <p style={{ fontSize: 14, color: 'rgba(245,240,232,.4)', lineHeight: 1.8, marginBottom: 48 }}>
        <strong style={{ color: '#F5F0E8' }}>{nanny.name}</strong> will arrive at <strong style={{ color: '#F5F0E8' }}>{form.time}</strong> on <strong style={{ color: '#F5F0E8' }}>{form.date}</strong>.
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <button className="btn btn-gold" onClick={() => go('nannies')}>BOOK AGAIN</button>
        <button className="btn btn-ghost" onClick={() => go('home')}>HOME</button>
      </div>
    </div>
  );

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '60px 48px' }}>
      <button onClick={() => go('nannies')} style={{ background: 'none', border: 'none', color: 'rgba(245,240,232,.4)', fontSize: 11, letterSpacing: 2, cursor: 'pointer', marginBottom: 40, fontFamily: "'Syne',sans-serif", fontWeight: 700 }}>← BACK TO NANNIES</button>

      {/* Nanny summary bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 20, alignItems: 'center', padding: '24px 28px', background: '#111', border: '1px solid rgba(245,240,232,.08)', marginBottom: 40 }}>
        <div style={{ width: 52, height: 52, background: nanny.accent+'22', border: `1px solid ${nanny.accent}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: nanny.accent }}>{nanny.avatar}</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 4 }}>{nanny.name}</div>
          <div style={{ fontSize: 12, color: 'rgba(245,240,232,.4)' }}>★ {nanny.rating} · {nanny.reviews} reviews · {nanny.experience} yrs</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 300, color: '#D4AF6E', lineHeight: 1 }}>${total+fee}</div>
          <div style={{ fontSize: 10, letterSpacing: 2, color: 'rgba(245,240,232,.3)', fontWeight: 700 }}>TOTAL</div>
        </div>
      </div>

      {/* Progress */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 4, marginBottom: 48 }}>
        {STEPS.map((s,i) => (
          <div key={s}>
            <div style={{ height: 3, background: i<=step ? '#D4AF6E' : 'rgba(245,240,232,.1)', marginBottom: 8, transition: 'all .3s' }}/>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: i===step ? '#D4AF6E' : i<step ? 'rgba(212,175,110,.5)' : 'rgba(245,240,232,.2)' }}>{s.toUpperCase()}</div>
          </div>
        ))}
      </div>

      {step === 0 && <StepDateTime form={form} setForm={setForm} onNext={() => setStep(1)} />}
      {step === 1 && <StepYourInfo form={form} setForm={setForm} onNext={() => setStep(2)} />}
      {step === 2 && <StepPayment  form={form} setForm={setForm} nanny={nanny} onNext={() => setStep(3)} />}
      {step === 3 && <StepReview   form={form} nanny={nanny} onConfirm={() => setDone(true)} />}
    </div>
  );
}