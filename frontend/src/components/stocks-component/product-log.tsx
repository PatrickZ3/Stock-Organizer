import React from 'react';
import Card from '../ui/card';
import { OverviewProps } from '../../types/items';

function ProductLog({data} : OverviewProps) {
  console.log("product log", data)
  return (  
    <div className='product'>

      <Card data = {data}/>
    </div>
  );
}

export default ProductLog;
