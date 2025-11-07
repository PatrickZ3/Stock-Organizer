import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Funnel, ChevronDown } from 'lucide-react';

interface categoryProp {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

function Category({ categories, onSelectCategory }: categoryProp) {

  const [show, setShow] = useState(false);

  const handleToggle = (isOpen: boolean) => {
    setShow(isOpen);
  }

  const handleSelect = (category: string) => {
    console.log("selected category", category);
    onSelectCategory(category);
    setShow(false);
  }

  const toggleDropdown = () => {
    setShow(prev => !prev);
  }


  return (
    <div>
      <Dropdown show={show} onToggle={handleToggle} autoClose="outside" >
        <Dropdown.Toggle className='dropDown' id="category-dropdown" onClick={toggleDropdown}>
          <Funnel size={16} /> Category <ChevronDown size={16} />
        </Dropdown.Toggle>
        <Dropdown.Menu className='dropDownItemCategory' onClick={() => setShow(false)}>
          <Dropdown.Item onClick={() => handleSelect('All')}>All</Dropdown.Item>
          {categories.map((category, index) => (
            <Dropdown.Item key={index} onClick={() => handleSelect(category)}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>

  );
}

export default Category;
