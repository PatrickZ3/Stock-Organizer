import React from 'react';
import { Button } from 'react-bootstrap';
import { Receipt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function TransactionsButton() {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Transactions');
  };

  return (
    <div>
      <Button className='coButton' onClick={handleClick}>
        <div className='transactionLabel'>
          <Receipt size={20} />
          <div style={{paddingLeft:"4px"}}>
            Transactions
            </div>
        </div>

      </Button>

    </div>
  );
}

export default TransactionsButton;
