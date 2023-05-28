/* eslint-disable no-unused-vars */
import React from 'react';

const LoaderSpinner = () => {
    return (
        <div>
            <div className='flex items-center justify-center h-[calc(100vh-64px)] -mt-16'>
                <p className='text-7xl font-thin'>L</p>
                <div className='w-10 h-10 rounded-full border-8 border-dashed border-blue-400 mt-5 animate-spin'></div>
                <p className='text-7xl font-thin'>ading...</p>
            </div>
        </div>
    );
};

export default LoaderSpinner;