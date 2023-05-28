/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData();
    const {authors} = book
    console.log(book)
    return (
        <div>
            <h2>Book Details</h2>
            <div>
                <p>{authors}</p>
            </div>
        </div>
    );
};

export default BookDetails;