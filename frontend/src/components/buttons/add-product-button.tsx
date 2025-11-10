import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; 
import { Plus } from 'lucide-react';
import ProductModal from '../modals/productModal';

function AddProduct() {
  const [showModal, setShowModal] = useState(false);

  return (
   <div>
    <Button className='addButton' onClick={() => setShowModal(true)}>
     <Plus size={16}/>add Product
      </Button>   
      <ProductModal 
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
   </div>
  );
}

export default AddProduct;
