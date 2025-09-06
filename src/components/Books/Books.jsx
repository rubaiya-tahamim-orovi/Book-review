import React, { useEffect, useState } from 'react';

import Book from '../Book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);
    const [booksLength, setBooksLength] = useState(6);

    useEffect(() => {
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
   
    // console.log(books)
    
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
         <div className='md:grid md:grid-cols-3 grid-cols-1 md:px-0 px-5 space-y-5 gap-5 mb-10 mt-14'>
             {
            books.slice(0, booksLength).map(book => <Book book={book}></Book>)
          }
         
         </div>
          <div className={booksLength === books.length ? 'hidden' : ''}>
            <div className='flex justify-center mb-10'>
                 <button onClick={() => setBooksLength(books.length)} className='bg-[#23BE0A0D] text-[#23BE0A] hover:text-white hover:transform-fill cursor-pointer hover:bg-[#23BE0A]
              px-4 py-2 rounded-lg border border-[#23BE0A]'>Show all</button>
            </div>
          </div>
        
        </div>
    );
};

export default Books;