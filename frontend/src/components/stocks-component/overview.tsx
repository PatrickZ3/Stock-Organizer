import React from 'react';
import { OverviewProps } from '../../types/items';

function Overview({ data }: OverviewProps) {
    console.log("overview", data)
    return (
        <div className='overview'>
            <div className='card'>
                <div className='subtitle'>
                    Total Products
                </div>
                <div className='cardContent'>
                    X
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
                    X
                </div>
                <div className='subtitle'>
                    Items with ≤ 10 units
                </div>
            </div><div className='card'>
                <div className='subtitle'>
                    Out of Stock
                </div>
                <div className='cardContent'>
                    X
                </div>
                <div className='subtitle'>
                    Item needs restocking
                </div>
            </div>
        </div>
    );
}

export default Overview;
