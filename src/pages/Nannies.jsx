import { useState } from 'react';
import NannyCard from '../components/NannyCard';
import NANNIES from '../data/nannies';

const FILTERS = ['All','After school','Special needs','Overnight','Infant care','Urgent available'];

export default function Nannies({ onBook }) {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? NANNIES : NANNIES.filter(n =>
    (filter === 'Urgent available' ? n.urgent : n.specialties.some(s => s.toLowerCase().includes(filter.toLowerCase())))
  );

  return (
    <div style={{ padding: '64px 2rem' }}>
      <div className="container">
        <div className="sec-label">Our roster</div>
        <h2 className="sec-title">Find your nanny</h2>
        <p className="sec-sub" style={{ marginBottom: '2rem' }}>All caregivers are background-checked, interviewed, and personally approved by our founder.</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: '7px 16px', borderRadius: 20, fontSize: 13, fontWeight: 500, border: `1px solid ${filter===f ? 'var(--teal-mid)' : 'var(--border)'}`, background: filter===f ? 'var(--teal-light)' : 'white', color: filter===f ? 'var(--teal-dark)' : 'var(--text-mid)', cursor: 'pointer', transition: 'all .2s', fontFamily: "'DM Sans',sans-serif" }}>{f}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(265px,1fr))', gap: '1.25rem' }}>
          {filtered.map(n => <NannyCard key={n.id} n={n} onBook={onBook} full />)}
        </div>
      </div>
    </div>
  );
}