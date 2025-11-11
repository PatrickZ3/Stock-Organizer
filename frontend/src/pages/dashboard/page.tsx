import Navbar from '../../components/navbar';
import Stocks from '../../components/stocks';

// components in dashboard: 
// Navbar
// Stocks (statistic & searchBar & products)

function Dashboard() {
  return (
    <div>
      
        <Navbar  />
        <div style={{ fontFamily: "Tatsuki", fontWeight: 400, fontSize: "3rem" }}>Product Dashboard</div>
        <Stocks />
    </div>
  );
}

export default Dashboard;
