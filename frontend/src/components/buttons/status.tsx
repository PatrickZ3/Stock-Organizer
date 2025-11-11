import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap'; 

interface StatusProps{
    statuses: string[]
    onSelectStatus: (status: string) => void;
}

function Status({ statuses, onSelectStatus}: StatusProps) {
    
    const [show, setShow] = useState(false);
    const handleToggle = (isOpen: boolean) =>{
        setShow(isOpen)
    }

    const handleSelect = (status: string) => {
        console.log("Status selected:", status);
        onSelectStatus(status);
        setShow(false);
    }
    const toggleDropdown = () => {
        setShow(prev => !prev);
      };

      
      
  return (
   <Dropdown show={show} onToggle={handleToggle} autoClose="outside" className='statusContainer'>
        <Dropdown.Toggle className='dropDown' id="status-dropdown" onClick={toggleDropdown}>
            Status
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropDownItemStatus' align="start" onClick = {() => setShow(false)}>
            <Dropdown.Item onClick={() => handleSelect('All')}>All</Dropdown.Item>
            {statuses.map((status,index) =>(
                <Dropdown.Item key={index} onClick={() => handleSelect(status)}>
                    {status}
                </Dropdown.Item>
            ) )}
        </Dropdown.Menu>
   </Dropdown>
  );
}

export default Status;
