import React, { useState } from 'react';
import Routes from '../Routes/Routes';
import { XMarkIcon, Bars3Icon, CheckBadgeIcon } from '@heroicons/react/24/solid'

const Navbar = () => {

  const [open, isOpen] = useState(false)
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact'
    },
    {
      id: 4,
      name: 'Products',
      path: '/products'
    },
    {
      id: 5,
      name: 'Services',
      path: '/services'
    }
  ];

  return (
    <div className=''>
      <div className=' md:hidden' onClick={() => isOpen(!open)}>
        <span>{open === true ? <XMarkIcon className='w-6 h-6 text-purple-600'></XMarkIcon> : <Bars3Icon className='w-6 h-6 text-purple-500' />}</span>
      </div>
      <ul className={`md:flex md:static duration-200 bg-purple-100  absolute ${open ? 'top-6' : '-top-48'}`}>
        {
          routes.map(route => <Routes key={route.id}
            route={route}
          ></Routes>)
        }
      </ul>
    </div>
  );
};

export default Navbar;