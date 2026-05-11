export default function StepDateTime({ form, setForm, onNext }) {
  return (
    <div className="fi">
      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 300, marginBottom: 36 }}>When do you need care?</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
        <div><label>Date</label><input type="date" min={new Date().toISOString().split('T')[0]} value={form.date} onChange={e => setForm({...form, date: e.target.value})} /></div>
        <div><label>Start Time</label><input type="time" value={form.time} onChange={e => setForm({...form, time: e.target.value})} /></div>
      </div>
      <div style={{ marginBottom: 40 }}>
        <label>Duration — <span style={{ color: '#D4AF6E' }}>{form.hours} hours</span></label>
        <input type="range" min={1} max={12} value={form.hours} onChange={e => setForm({...form, hours: +e.target.value})} style={{ padding: 0, marginTop: 10, accentColor: '#D4AF6E', width: '100%' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'rgba(245,240,232,.3)', marginTop: 6 }}><span>1 HR</span><span>12 HRS</span></div>
      </div>
      <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} disabled={!form.date || !form.time} onClick={onNext}>CONTINUE →</button>
    </div>
  );
}