export default function StepYourInfo({ form, setForm, onNext }) {
  return (
    <div className="fi">
      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 36, fontWeight: 300, marginBottom: 36 }}>Tell us about yourself</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
        <div><label>Full Name</label><input placeholder="Your full name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} /></div>
        <div><label>Phone</label><input placeholder="+1 000 000 0000" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
      </div>
      <div style={{ marginBottom: 20 }}><label>Home Address</label><input placeholder="Street, City, State" value={form.address} onChange={e => setForm({...form, address: e.target.value})} /></div>
      <div style={{ marginBottom: 20 }}>
        <label>Number of Children</label>
        <select value={form.children} onChange={e => setForm({...form, children: e.target.value})}>
          {[1,2,3,4,5].map(n => <option key={n} value={n}>{n} {n>1?'children':'child'}</option>)}
        </select>
      </div>
      <div style={{ marginBottom: 40 }}><label>Special Instructions</label><textarea rows={3} placeholder="Allergies, routines, emergency contacts..." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} /></div>
      <button className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }} disabled={!form.name || !form.phone || !form.address} onClick={onNext}>CONTINUE →</button>
    </div>
  );
}