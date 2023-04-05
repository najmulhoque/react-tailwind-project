import { CheckBadgeIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Featurs = ({singleFeaturs}) => {
    return (
        <div className='flex gap-2 items-center'>
            <CheckBadgeIcon className='w-5 h-5 text-white'/>
            <span>{singleFeaturs}</span>
        </div>
    );
};

export default Featurs;