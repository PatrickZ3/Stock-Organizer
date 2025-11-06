import React from 'react';
import { Button } from 'react-bootstrap'; 
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Products/new')
  };

  return (
   <div>
    <Button className='addButton' onClick={handleClick}>
     <Plus size={16}/>add Product
      </Button>
      
   </div>
  );
}

export default AddProduct;
