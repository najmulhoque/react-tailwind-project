import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('Prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
        console.log(prices)
    }, [])
    return (
        <div>
            <h3 className='text-5xl text-purple-800 bg-purple-300 text-center font-bold p-5'>Awsome Price list</h3>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCard price={price}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;