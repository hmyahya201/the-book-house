/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useNavigation} from 'react-router-dom';
import Book from '../../components/Boook/Book';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';

const Books = () => {
    const navigation = useNavigation();
    if(navigation.state==="loading"){
        return <LoaderSpinner/>
    }
    const data = useLoaderData();
    const books = data.books;
    return (
        <div className='container mx-auto px-5'>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    books.map(book=><Book
                         key={book.isbn13}
                         book={book}
                         >book</Book>)
                }
            </div>
        </div>
    );
};

export default Books;