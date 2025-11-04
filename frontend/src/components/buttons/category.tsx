import React from 'react';
import { Dropdown } from 'react-bootstrap'; 
import { Funnel, ChevronDown } from 'lucide-react';

function Category() {

  return (
   <Dropdown>
        <Dropdown.Toggle className='dropDown'>
            <Funnel size={16}/> Category <ChevronDown size={16} />
        </Dropdown.Toggle>

        <Dropdown.Menu className='dropDownItem'>
            <Dropdown.Item>All</Dropdown.Item>
            
        </Dropdown.Menu>

   </Dropdown>
  );
}

export default Category;
