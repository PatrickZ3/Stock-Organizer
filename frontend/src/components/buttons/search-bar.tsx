import React from 'react';
import { Button } from 'react-bootstrap'; 

type SearchBarProps ={
    onSearch: (value: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {

  return (
   <div>
   <input
    type="text"
    placeholder='Search products by name or description...'
    className='searchInput'
    onChange={(e) => onSearch(e.target.value)}
   />
      
   </div>
  );
}

export default SearchBar;
