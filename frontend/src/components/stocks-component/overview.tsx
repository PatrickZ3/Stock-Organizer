import React from 'react';
import { OverviewProps } from '../../types/items';

function Overview({ data }: OverviewProps) {
    console.log("overview", data)

    const totalProducts = data.length;

    const activeItems = data.filter(item => item.status?.toLowerCase() === "active").length;

    const lowStock = data.filter(item => item.quantity <= 10 && item.quantity > 0).length;

    const outOfStock = data.filter(item => item.quantity === 0).length;

    return (
        <div className='overview'>
            <div className='card'>
                <div className='subtitle'>
                    Total Products
                </div>
                <div className='cardContent'>
                    {totalProducts}
                </div>
                <div className='subtitle'>
                    Total inventory items
                </div>
            </div>
            <div className='card'>
                <div className='subtitle'>
                    Active Products
                </div>
                <div className='cardContent'>
                    {activeItems}
                </div>
                <div className='subtitle'>
                    Active inventory items
                </div>
            </div>
            <div className='card'>
                <div className='subtitle'>
                    Low Stock
                </div>
                <div className='cardContent'>
                    {lowStock}
                </div>
                <div className='subtitle'>
                    Items with ≤ 10 units
                </div>
            </div><div className='card'>
                <div className='subtitle'>
                    Out of Stock
                </div>
                <div className='cardContent'>
                    {outOfStock}
                </div>
                <div className='subtitle'>
                    Item needs restocking
                </div>
            </div>
        </div>
    );
}

export default Overview;
