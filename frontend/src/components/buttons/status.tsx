import React from 'react';
import { Dropdown } from 'react-bootstrap'; 
import { ChevronDown } from 'lucide-react';

interface StatusProps{
    statuses: string[]
    onSelectStatus: (status: string) => void;
}

function Status({ statuses, onSelectStatus}: StatusProps) {

  return (
   <Dropdown>
        <Dropdown.Toggle className='dropDown'>
            Status <ChevronDown size={16} />
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropDownItem'>
            <Dropdown.Item onClick={() => onSelectStatus('All')}>All</Dropdown.Item>
            {statuses.map((status,index) =>(
                <Dropdown.Item key={index} onClick={() => onSelectStatus(status)}>
                    {status}
                </Dropdown.Item>
            ) )}
        </Dropdown.Menu>

   </Dropdown>
  );
}

export default Status;
