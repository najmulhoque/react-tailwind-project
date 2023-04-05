import React from 'react';

const Routes = ({route}) => {
    return (
        <li className='ml-10 hover:bg-purple-500 text-purple-700'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Routes;