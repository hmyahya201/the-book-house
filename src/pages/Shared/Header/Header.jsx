/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
      <header className='bg-gray-100 relative z-10'>
            <nav className='flex items-center justify-between container mx-auto p-4'>
                <Link to="/">
                    <div className='inline-flex items-center'>
                        <BoltIcon className='w-6 h-6 text-blue-500' />
                        <span className='tracking-wide font-bold text-xl text-gray-800'>Book-House</span>
                    </div>
                </Link>
                <div className='items-center hidden md:flex space-x-8'>
                    <NavLink className={({isActive})=>isActive?"active": ""} to="/">Home</NavLink>
                    <NavLink className={({isActive})=>isActive?"active": ""} to="/books">Books</NavLink>
                    <NavLink className={({isActive})=>isActive?"active": ""} to="/about">About Us</NavLink>
                    <Link className='relative'><ShoppingCartIcon className='w-6 h-6 text-gray-400 '/><span className='absolute -top-3 right-0 text-blue-600 font-bold text-xl'>0</span></Link>
                    <NavLink className={({isActive})=>isActive?"active": ""} to="/login">Login</NavLink>
                </div>
                <div className='md:hidden' onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                   <span>{isMenuOpen?<XMarkIcon className='w-6 h-6' />:<Bars3BottomRightIcon className='w-6 h-6'/>}</span>
                </div>
                    <div className={`-z-10 absolute space-y-2 items-center bg-gray-100 left-0 text-center w-full py-5 duration-300 ${isMenuOpen?"top-16":"-top-40"}`}>
                    <NavLink className={`${({isActive})=>isActive?"active": ""} block`} to="/">Home</NavLink>
                    <NavLink className={`${({isActive})=>isActive?"active": ""} block`} to="/books">Books</NavLink>
                    <NavLink className={`${({isActive})=>isActive?"active": ""} block`} to="/about">About Us</NavLink>
                    </div>
            </nav>
      </header>

    );
};

export default Header;