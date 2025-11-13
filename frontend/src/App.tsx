import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/page';
import Dashboard from './pages/dashboard/page';
import Transactions from './pages/transactions/page';
import CheckOut from './pages/checkout/page';
// LOGIN PAGE/ LANDING

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
