/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react'
import reader from '../../assets/reading-boy.json'
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Home = () => {
    return (
        <div className='container mx-auto flex flex-col gap-8 xl:gap-14 justify-between lg:flex-row lg:items-center xl:items-center p-5 h-screen'>
            <div className='lg:w-1/2 xl:w-7/12'>
                <div className='max-w-xl mb-6'>
                  <div>
                    <p className='badge'>On Sale!</p>
                  </div>
                  <h2 className='max-w-xl mb-6 font-sans text-3xl xl:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'> 
                    A reader lives a <br className=' sm:block' /> thousand lives{' '}
                    <span className='inline-flex text-blue-400'>before he dies</span>
                  </h2>
                  <p className='text-base text-gray-700 md:text-lg'>
                    Books are a uniquely portable magic. Books serve to show a man that
                    those original thoughts of his aren’t very new after all. The man
                    who does not read good books is no better than the man who can’t.
                  </p>
                </div>
                <div className='flex gap-3 flex-row'>
                    <Link to='/books' className=' md:w-auto md:mr-4'>
                        <button className='btn inline-flex'>Visit Store <ShoppingCartIcon className='w-5 text-gray-100 ml-2' /></button> 
                    </Link>
                    <Link
                      to='/about'
                      className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                    >
                      <button>Learn More</button>
                    </Link>
                </div>
            </div>

            {/* Lottie Animation */}

            <div className='lg:w-1/2 xl:w-5/12'>
              <div className='max-w-full'>
                <Lottie animationData={reader} loop={true} />
              </div>
            </div>
        </div>
    );
};

export default Home;