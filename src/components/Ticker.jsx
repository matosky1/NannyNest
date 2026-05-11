const MSGS = [
  '✦ Trusted by 200+ Families ',
  '✦ Background Checked Nannies ',
  '✦ Flexible Hours Available ',
  '✦ 24/7 Support ',
  '✦ Instant Booking Confirmation ',
];

export default function Ticker() {
  return (
    <div style={{ background: '#D4AF6E', padding: '9px 0', overflow: 'hidden' }}>
      <div className="ticker-inner">
        {[...MSGS, ...MSGS].map((m, i) => (
          <span key={i} style={{ color: '#0D0D0D', fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: '0 32px' }}>{m}</span>
        ))}
      </div>
    </div>
  );
}