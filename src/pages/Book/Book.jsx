import React, { use } from 'react';

const Book = ({bookPromise}) => {
    const data = use (bookPromise)
    console.log(data)
    return (
        <div>
            <h1>Sigle Book</h1>
        </div>
    );
}; 

export default Book;