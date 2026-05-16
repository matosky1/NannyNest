import NannyCard from '../components/NannyCard';
import NANNIES from '../data/nannies';

export default function Home({ go, onBook }) {
  return (
    <div>
      {/* HERO */}
      <div style={{ background: 'var(--warm)', padding: '80px 2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'var(--teal-light)', color: 'var(--teal-dark)', borderRadius: 20, padding: '6px 16px', fontSize: 13, fontWeight: 600, marginBottom: '1.5rem' }}>
              <span className="pulse-dot" /> Calgary's Trusted Childcare Agency
            </div>
            <h1 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(36px,5vw,56px)', lineHeight: 1.15, color: 'var(--teal-deeper)', marginBottom: '1.25rem' }}>
              Childcare you can<br /><em style={{ color: 'var(--coral)', fontStyle: 'italic' }}>truly trust.</em>
            </h1>
            <p style={{ fontSize: 17, color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '2rem', maxWidth: 480 }}>
              We connect Calgary families with vetted, background-checked nannies. Flexible hours, urgent placements available, and personalised matching — always.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn-primary" onClick={() => go('nannies')}>Find a Nanny</button>
              <button className="btn-outline" onClick={() => go('consult')}>Free Consultation</button>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
              {[['50+','Caregivers'],['200+','Families Served'],['5.0','Avg Rating']].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "'DM Serif Display',serif", fontSize: 32, color: 'var(--teal)' }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual */}
          <div style={{ background: 'var(--teal-light)', borderRadius: 24, padding: '2rem' }}>
            <div style={{ background: 'white', borderRadius: 16, padding: '1.25rem 1.5rem', border: '1px solid var(--border)', marginBottom: '1rem' }}>
              <div style={{ display: 'inline-block', background: 'var(--coral)', color: 'white', borderRadius: 6, padding: '3px 10px', fontSize: 11, fontWeight: 700, marginBottom: '.75rem' }}>URGENT</div>
              <h4 style={{ fontSize: 15, fontWeight: 600, marginBottom: '.25rem' }}>Same-day nanny needed</h4>
              <p style={{ fontSize: 13, color: 'var(--text-light)' }}>NW Calgary · 2 children · Ages 4 & 7</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '.75rem', fontSize: 12, color: 'var(--teal-dark)', fontWeight: 500 }}>
                <span>⏰ Today 3pm–7pm</span><span>💰 $22/hr</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              {NANNIES.slice(0,3).map(n => (
                <div key={n.id} style={{ background: 'white', borderRadius: 12, padding: '.75rem', border: '1px solid var(--border)', flex: 1, minWidth: 110 }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: n.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13, color: 'white', marginBottom: '.4rem' }}>{n.avatar}</div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{n.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-light)' }}>⭐ {n.rating}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div style={{ background: 'var(--teal-deeper)', padding: '80px 2rem' }}>
        <div className="container">
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--teal-mid)', textTransform: 'uppercase', marginBottom: 10 }}>Simple process</div>
          <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(28px,4vw,42px)', color: 'white', marginBottom: 12 }}>How it works</h2>
          <p style={{ fontSize: 16, color: 'var(--teal-mid)', lineHeight: 1.7, maxWidth: 520, marginBottom: '3rem' }}>Book trusted childcare in three simple steps — we handle the vetting, you enjoy the peace of mind.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '2rem' }}>
            {[['1','Browse Profiles','Explore verified nannies with real reviews, specialties, and live availability.'],['2','Book & Schedule','Pick your date, time, and hours. Same-day and recurring bookings available.'],['3','Meet & Relax','We confirm your match. Your nanny arrives on time, every time.']].map(([n,t,d]) => (
              <div key={n} style={{ textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(255,255,255,.12)', color: 'white', fontFamily: "'DM Serif Display',serif", fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>{n}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: 'white', marginBottom: '.5rem' }}>{t}</h4>
                <p style={{ fontSize: 14, color: 'var(--teal-mid)', lineHeight: 1.65 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ padding: '80px 2rem', background: 'white' }}>
        <div className="container">
          <div className="sec-label">What we offer</div>
          <h2 className="sec-title">Our services</h2>
          <p className="sec-sub" style={{ marginBottom: '3rem' }}>Every service is backed by our screening process and managed through Tinytrust Services.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1.5rem' }}>
            {[['🏠','After-School Care','School pickup, homework help, snacks, and activities until parents return home.','$18–$25/hr'],['🌙','Overnight Care','Calm, experienced overnight caregivers for infants, toddlers, and school-age children.','$22–$30/hr'],['❤️','Special Needs Support','Trained caregivers with experience in autism, FASD, Down syndrome, and complex needs.','Custom rate'],['👶','Newborn & Infant Care','Postpartum support, sleep training, feeding routines, and gentle newborn care.','$22–$28/hr'],['🏡','Live-In Nanny','Full-time live-in placement for families needing consistent, around-the-clock support.','From $2,800/mo'],['⚡','Urgent Placement','Same-day or next-day nanny when life happens unexpectedly. We respond fast.','$25–$35/hr']].map(([icon,title,desc,price]) => (
              <div key={title} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 16, padding: '1.75rem', transition: 'transform .2s, box-shadow .2s' }}
                onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-4px)';e.currentTarget.style.boxShadow='0 12px 30px rgba(0,0,0,.07)';}}
                onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';}}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--teal-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, marginBottom: '1rem' }}>{icon}</div>
                <h4 style={{ fontSize: 17, fontWeight: 600, marginBottom: '.5rem' }}>{title}</h4>
                <p style={{ fontSize: 14, color: 'var(--text-mid)', lineHeight: 1.65 }}>{desc}</p>
                <div style={{ marginTop: '1rem', fontSize: 13, fontWeight: 600, color: 'var(--teal)' }}>{price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED NANNIES */}
      <div style={{ padding: '80px 2rem', background: 'var(--warm)' }}>
        <div className="container">
          <div className="sec-label">Hand-picked</div>
          <h2 className="sec-title">Meet our caregivers</h2>
          <p className="sec-sub" style={{ marginBottom: '3rem' }}>Every caregiver is personally vetted by our founder — background checked, reference verified, and interview approved.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(265px,1fr))', gap: '1.25rem' }}>
            {NANNIES.slice(0,3).map(n => <NannyCard key={n.id} n={n} onBook={onBook} full />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn-outline" onClick={() => go('nannies')}>See All Caregivers →</button>
          </div>
        </div>
      </div>

      {/* CONSULT BANNER */}
      <div style={{ background: 'var(--teal-deeper)', padding: '72px 2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: 40 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 2, color: 'var(--teal-mid)', textTransform: 'uppercase', marginBottom: 12 }}>Free consultation</div>
            <h2 style={{ fontFamily: "'DM Serif Display',serif", fontSize: 'clamp(28px,4vw,40px)', color: 'white', lineHeight: 1.2 }}>Not sure where to start?<br /><em>We'll guide you.</em></h2>
          </div>
          <button className="btn-coral" style={{ whiteSpace: 'nowrap', padding: '14px 32px' }} onClick={() => go('consult')}>Talk to an Expert →</button>
        </div>
      </div>
    </div>
  );
}