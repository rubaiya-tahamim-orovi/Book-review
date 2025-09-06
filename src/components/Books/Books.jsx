import React, { useEffect, useState } from 'react';

import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
   
    // console.log(books)
    
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
         <div className='grid grid-cols-3 gap-5 mb-10 mt-14'>
             {
            books.map(book => <Book book={book}></Book>)
          }
         </div>
        </div>
    );
};

export default Books;