import { useState } from 'react';
import { OverviewProps } from '../../types/items';
import AddProduct from '../buttons/add-product-button';
import SearchBar from '../input/search-bar';
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
        <Category categories={categories} onSelectCategory={setSelectedCategories} />
        <Status statuses={statuses} onSelectStatus={setSelectedStatus} />
        <AddProduct />
      </div>
      <div className='productLog'>
        {filteredData.map((item, index) => (
          <div key={item.id} className='card'>
            <div className="cardHeader">
              <div className='cardName'>{item.name}</div>
              <div className='cardStatus'>{item.status}</div>
            </div>
            <div className='cardDescription'>
              <div>{item.description}</div>
            </div>
            <div className='cardItem'>
              <div className='cardName'>Quantity</div>
              <div className='cardQuantity'>{item.quantity} Units</div>
            </div>
            <div className='cardItem'>
              <div className='cardName'>Price</div>
              <div className='cardPrice'>$ {item.price}</div>
            </div>
            <div className='cardItem'>
              <div className='cardName'>Category</div>
              <div className='cardCategory'>{item.category}</div>
            </div>
            <div className='cardFooter'>
              <div className='cardDivider'></div>
              <div className='cardItem'>
                <div className='cardDate'>
                  {new Date(item.updated_at).toLocaleDateString('en-US',{
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  </div>
              </div>

            </div>


          </div>
        ))}
      </div>
    </div>

  );
}

export default Card;
