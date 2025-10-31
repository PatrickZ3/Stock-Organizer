import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import EditProduct from './pages/products/edit';
import NewProduct from './pages/products/new';
import ProductDetails from './pages/products/[id]';
import LoginForm from './components/login-form';
import {Package} from "lucide-react";

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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/new" element={<NewProduct />} />
        <Route path="/products/edit" element={<EditProduct />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
