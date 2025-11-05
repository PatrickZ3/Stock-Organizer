import React, { useState } from 'react';
import { OverviewProps } from '../../types/items';
import AddProduct from '../buttons/add-product-button';
import SearchBar from '../buttons/search-bar';
import Status from '../buttons/status';

function Card({ data }: OverviewProps) {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredData = data.filter((item) => {
    const matchesSearches = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearches && matchesStatus
  }
);
  const statuses = Array.from(new Set(data.map((item) => item.status).filter(Boolean)));
  console.log("Currently selected status:", selectedStatus);
  return (
    <div>
      <div className='controlBar'>
        <SearchBar onSearch={setSearchTerm} />
        <Status statuses={statuses} onSelectStatus={setSelectedStatus}/>
        <AddProduct />
      </div>
      <div className='productLog'>
        {filteredData.map((item, index) => (
          <div key={item.id} className='card'>
            <div>{item.name}</div>
            <div>{item.description}</div>
            <div>{item.quantity}</div>
            <div>{item.status}</div>
            <div>{item.created_at}</div>
            <div>{item.updated_at}</div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Card;
