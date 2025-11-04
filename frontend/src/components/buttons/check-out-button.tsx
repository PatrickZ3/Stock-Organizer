import React from 'react';
import { Button } from 'react-bootstrap'; 
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CheckOutButton() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout')
  }

  return (
   <div>
    <Button className='coButton' onClick={handleClick}><ShoppingCart size={20} /></Button>
      
   </div>
  );
}

export default CheckOutButton;
