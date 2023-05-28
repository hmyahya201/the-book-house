/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image, price, title, subtitle, isbn13} = book    
        return (
        <Link to={`/book/${isbn13}`}>
            <div className='relative shadow-md hover:shadow-2xl duration-300 grid place-items-center'>
                <div>
                    <img src={image} alt="book-cover" />
                </div>
                <div className='abosolute w-full bg-black opacity-0 bg-opacity-75 p-10 hover:opacity-100 text-gray-300 absolute inset-0 duration-200 flex flex-col'>
                    <h3 className='mb-5'>{title}</h3>
                    <h3>{subtitle.substring(0, 45)}...</h3>
                    <p className='mt-auto'>Price: {price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;