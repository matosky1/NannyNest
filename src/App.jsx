import { useState } from 'react';
import Navbar from './components/Navbar';
import Ticker from './components/Ticker';

import Home from './pages/Home';
import Nannies from './pages/Nannies';
import Booking from './pages/Booking';
import Consult from './pages/Consult';

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedNanny, setSelectedNanny] = useState(null);

  const go = (p) => { setPage(p); window.scrollTo(0, 0); };

  const handleBook = (nanny) => {
    setSelectedNanny(nanny);
    setPage('book');
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Ticker />
      <Navbar page={page} go={go} />
      {page === 'home'    && <Home    go={go} onBook={handleBook} />}
      {page === 'nannies' && <Nannies go={go} onBook={handleBook} />}
      {page === 'book'    && <Booking go={go} nanny={selectedNanny} />}
      {page === 'consult' && <Consult />}
    </div>
  );
}