import {Package} from "lucide-react";
import LoginForm from '../../components/login-form';

// LOGIN PAGE/ LANDING

function Home() {
  return (
    <div>
      <header className="App-header">
        <div className="Title">
          <Package size={38} color="#2251DD" />
          <div style={{fontFamily: "Tatsuki", fontWeight: 700, fontSize: "3rem", textAlign: "start"}}>StockTrack</div>
        </div>
        <div className="BoxModal">
          <div style={{fontFamily: "Tatsuki", fontWeight: 700, fontSize: "3rem", textAlign: "start"}}>Welcome Back</div>
          <div style={{fontFamily: "Tatsuki", fontWeight: 400, fontSize: "2rem", textAlign: "start"}}>Sign in to your account to manage your inventory</div>
          <LoginForm/>
        </div>
      </header>
    </div>
  )
}

export default Home;