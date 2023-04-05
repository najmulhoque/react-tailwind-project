import React from 'react';
import Featurs from '../Featurs/Featurs';

const PriceCard = ({ price }) => {
    const { features } = price
    return (
        <div className='bg-indigo-400 rounded-lg m-4 p-4 flex flex-col'>
            <h4 >
                <span className='text-5xl text-purple-500 font-extrabold'>{price.price}</span>
                <span className='text-3xl text-white font-bold'>/month</span></h4>
            <h4 className='text-2xl font-bold '>{price.name}</h4>
            <p className='underline font-bold text-white'>Features:</p>
            <div> {
                features.map(singleFeaturs => <Featurs singleFeaturs={singleFeaturs}></Featurs>)
            }</div>
            <button className='w-full bg-green-400 py-2 hover:bg-green-600 rounded-md mt-auto font-bold text-white'>Buy now</button>
        </div>
    );
};

export default PriceCard;