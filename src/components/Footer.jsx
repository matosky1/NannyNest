export default function Footer() {
  return (
    <footer style={{ background: 'var(--teal-deeper)', color: 'rgba(255,255,255,.7)', padding: '3rem 2rem 1.5rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            {/* Logo as text instead of image — avoids white box issue */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontFamily: "'DM Serif Display',serif", fontSize: 18 }}>T</div>
              <span style={{ fontFamily: "'DM Serif Display',serif", fontSize: 22, color: 'white', letterSpacing: 1 }}>Tinytrust <span style={{ color: 'var(--coral)' }}>Services</span></span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 280, color: 'rgba(255,255,255,.6)' }}>Caring for your little ones with trust & love. Calgary, Alberta.</p>
            <p style={{ fontSize: 13, marginTop: 12, color: 'var(--teal-mid)' }}>📞 204-510-3869</p>
            <p style={{ fontSize: 13, color: 'var(--teal-mid)' }}>📧 info@tinytrustservices.ca</p>
          </div>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {[['Services',['Nanny Booking','After School','Overnight Care','Special Needs']],['Company',['About Us','Our Nannies','Consult Us','Careers']]].map(([title, links]) => (
              <div key={title}>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'white', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 14 }}>{title}</div>
                {links.map(l => <div key={l} style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', marginBottom: 8, cursor: 'pointer' }}>{l}</div>)}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, fontSize: 13 }}>
          <span>© 2025 Tinytrust Services · Licence No: TN28080273</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy','Terms & Conditions','Disclaimer'].map(l => (
              <span key={l} style={{ cursor: 'pointer', color: 'rgba(255,255,255,.5)' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}