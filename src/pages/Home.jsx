import NannyCard from '../components/NannyCard';
import Footer from '../components/Footer';
import NANNIES from '../data/nannies';

export default function Home({ go, onBook }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ minHeight: '92vh', display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden' }}>
        <div style={{ padding: '80px 48px 80px 72px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#D4AF6E', marginBottom: 28 }}>EST. 2024 — CHILDCARE REIMAGINED</div>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(52px,5.5vw,84px)', fontWeight: 300, lineHeight: 1.05, marginBottom: 36 }}>
            The Finest<br />Nannies,<br /><em style={{ color: '#D4AF6E' }}>Delivered.</em>
          </h1>
          <p style={{ fontSize: 15, color: 'rgba(245,240,232,.5)', lineHeight: 1.85, maxWidth: 380, marginBottom: 44 }}>
            We connect discerning families with exceptional, vetted nannies. Book in under 3 minutes. Cancel anytime.
          </p>
          <div style={{ display: 'flex', gap: 14 }}>
            <button className="btn btn-gold" onClick={() => go('nannies')}>Browse Nannies →</button>
            <button className="btn btn-ghost" onClick={() => go('consult')}>Free Consultation</button>
          </div>
          <div style={{ display: 'flex', gap: 40, marginTop: 64, paddingTop: 40, borderTop: '1px solid rgba(245,240,232,.08)' }}>
            {[['200+','Bookings'],['5.0','Avg Rating'],['14','Max Exp. Yrs']].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 44, fontWeight: 300, color: '#D4AF6E', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10, letterSpacing: 2, color: 'rgba(245,240,232,.35)', marginTop: 6, fontWeight: 700, textTransform: 'uppercase' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#111', position: 'relative', overflow: 'hidden', borderLeft: '1px solid rgba(245,240,232,.06)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse at 60% 40%,rgba(212,175,110,.12) 0%,transparent 60%)' }}/>
          <svg style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: .12 }} width="360" height="360" viewBox="0 0 360 360">
            <circle cx="180" cy="180" r="170" fill="none" stroke="#D4AF6E" strokeWidth="1" className="rotate"/>
            <circle cx="180" cy="180" r="120" fill="none" stroke="#D4AF6E" strokeWidth=".5"/>
          </svg>
          <div className="float-center" style={{ position: 'absolute', top: '50%', left: '50%', textAlign: 'center' }}>
            <div style={{ fontSize: 72 }}>🌿</div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 16, color: '#D4AF6E', letterSpacing: 4, marginTop: 10, fontStyle: 'italic' }}>trusted care</div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: '100px 72px', borderTop: '1px solid rgba(245,240,232,.06)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 64 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#D4AF6E', marginBottom: 16 }}>THE PROCESS</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 52, fontWeight: 300, lineHeight: 1.1 }}>Three steps to<br /><em>perfect childcare</em></h2>
          </div>
          <button className="btn btn-ghost" onClick={() => go('nannies')}>View All Nannies →</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, background: 'rgba(245,240,232,.06)' }}>
          {[['01','Browse Profiles','Explore vetted nannies with verified reviews, specialties, and live availability.'],
            ['02','Book & Schedule','Choose your date, time, and duration. Same-day, overnight, and recurring available.'],
            ['03','Pay & Relax','Secure encrypted payment. Confirmation sent instantly. Your nanny arrives on time.']
          ].map(([n,t,d]) => (
            <div key={n} style={{ background: '#0D0D0D', padding: '52px 44px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 64, fontWeight: 300, color: 'rgba(212,175,110,.2)', marginBottom: 24, lineHeight: 1 }}>{n}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 16 }}>{t}</h3>
              <p style={{ fontSize: 14, color: 'rgba(245,240,232,.4)', lineHeight: 1.8 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured */}
      <div style={{ background: '#111', padding: '80px 72px', borderTop: '1px solid rgba(245,240,232,.06)' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#D4AF6E', marginBottom: 16 }}>HAND-PICKED</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 48, fontWeight: 300, marginBottom: 52 }}>Featured Nannies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {NANNIES.slice(0,3).map(n => <NannyCard key={n.id} n={n} onBook={onBook} />)}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button className="btn btn-ghost" onClick={() => go('nannies')}>See All {NANNIES.length} Nannies</button>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#D4AF6E', padding: '72px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 40 }}>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: 'rgba(13,13,13,.5)', marginBottom: 12 }}>FREE CONSULTATION</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 46, fontWeight: 300, color: '#0D0D0D', lineHeight: 1.1 }}>Not sure where to start?<br /><em>We'll guide you.</em></h2>
        </div>
        <button className="btn" style={{ background: '#0D0D0D', color: '#D4AF6E', fontSize: 11, padding: '16px 36px', whiteSpace: 'nowrap' }} onClick={() => go('consult')}>TALK TO AN EXPERT →</button>
      </div>

      <Footer />
    </div>
  );
}