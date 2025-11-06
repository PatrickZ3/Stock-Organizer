import React, { useState } from 'react';
import { OverviewProps } from '../../types/items';
import AddProduct from '../buttons/add-product-button';
import SearchBar from '../buttons/search-bar';
import Status from '../buttons/status';
import Category from '../buttons/category';

function Card({ data }: OverviewProps) {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedCategories, setSelectedCategories] = useState('All');

  const filteredData = data.filter((item) => {
    const matchesSearches = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    const matchesCategories = selectedCategories === 'All' || item.category === selectedCategories;
    return matchesSearches && matchesStatus && matchesCategories;
  }
  );
  const statuses = Array.from(new Set(data.map((item) => item.status).filter(Boolean)));
  
  const categories = Array.from(new Set(data.map((item) => item.category).filter(Boolean)));

  console.log("Currently selected status:", selectedStatus);
  console.log("Currently selected category:", selectedCategories);
  return (
    <div>
      <div className='controlBar'>
        <SearchBar onSearch={setSearchTerm} />
        <Category categories={categories} onSelectCategory={setSelectedCategories}/>
        <Status statuses={statuses} onSelectStatus={setSelectedStatus} />
        <AddProduct />
      </div>
      <div className='productLog'>
        {filteredData.map((item, index) => (
          <div key={item.id} className='card'>
            <div className="cardItem">
              <div className='cardName'>{item.name}</div>
              <div className='cardStatus'>{item.status}</div>
            </div>
            <div className='cardDescription'>
              
              <div>{item.description}</div>
            </div>
            <div className='cardQuantity'>
            <div>Quantity</div>
              <div>{item.quantity}</div>
            </div>
            <div className='cardPrice'>
            <div>Price</div>
              <div>{item.price}</div>
            </div>
            <div className='cardCategory'>
            <div>Category</div>
              <div>{item.category}</div>
            </div>
            <div className='cardUpdated'>
              <div>{item.updated_at}</div>
            </div>


          </div>
        ))}
      </div>
    </div>

  );
}

export default Card;
