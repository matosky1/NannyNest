const MSGS = [
  '✦ Trusted by Calgary Families ',
  '✦ Background Checked Caregivers ',
  '✦ CPR & First Aid Certified ',
  '✦ Urgent Placement Available ',
  '✦ Licensed Employment Agency ',
];

export default function Ticker() {
  return (
    <div style={{ background: 'var(--teal-deeper)', padding: '8px 0', overflow: 'hidden' }}>
      <div className="ticker-inner">
        {[...MSGS, ...MSGS].map((m, i) => (
          <span key={i} style={{ color: 'var(--teal-mid)', fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: '0 32px' }}>{m}</span>
        ))}
      </div>
    </div>
  );
}