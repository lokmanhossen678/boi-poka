import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data=>setAllBooks(data))
    //     },[])

    const bookPromise=fetch('booksData.json').then(res=>res.json())

    return (
        <div>
            <h1 className='text-center text-3xl p-6'>Hellow ami books </h1>
            <Suspense fallback={<span>Lodding ....</span>}>
            {
                <Book bookPromise={bookPromise}></Book>
            }
            </Suspense>
        </div>
    );
};

export default Books;