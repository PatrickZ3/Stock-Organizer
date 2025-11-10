import Navbar from '../../components/navbar';
import Stocks from '../../components/stocks';

// components in dashboard: 
// Navbar
// Stocks (statistic & searchBar & products)

function Dashboard() {
  return (
    <div>
        <Navbar  />
        <Stocks />
    </div>
  );
}

export default Dashboard;
