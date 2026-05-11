import { useState } from 'react';
import NannyCard from '../components/NannyCard';
import NANNIES from '../data/nannies';

const FILTERS = ['ALL','NEWBORN','TUTORING','SPECIAL NEEDS','NIGHT CARE','BILINGUAL'];

export default function Nannies({ onBook }) {
  const [filter, setFilter] = useState('ALL');
  const filtered = filter === 'ALL' ? NANNIES : NANNIES.filter(n => n.specialties.some(s => s.toUpperCase().includes(filter)));

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 48px' }}>
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 3, color: '#D4AF6E', marginBottom: 12 }}>OUR ROSTER</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 56, fontWeight: 300, marginBottom: 8 }}>Find Your Nanny</h2>
        <p style={{ color: 'rgba(245,240,232,.4)', fontSize: 14 }}>All professionals are background-checked, interviewed, and reference-verified.</p>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 44 }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{ padding: '9px 20px', fontSize: 10, fontWeight: 700, letterSpacing: 2, border: `1px solid ${filter===f ? '#D4AF6E' : 'rgba(245,240,232,.12)'}`, background: filter===f ? '#D4AF6E' : 'transparent', color: filter===f ? '#0D0D0D' : 'rgba(245,240,232,.5)', cursor: 'pointer', transition: 'all .2s', fontFamily: "'Syne',sans-serif" }}>{f}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: 20 }}>
        {filtered.map(n => <NannyCard key={n.id} n={n} onBook={onBook} full />)}
      </div>
    </div>
  );
}