import React from 'react';
import { CiStar } from "react-icons/ci";
const Book = ({book}) => {
    const {id, title, tags, author, genre, rating, image} = book;

    
    return (
        <div className=' border border-[#13131326] rounded-2xl px-4 py-4'>
         <div className='flex justify-center bg-[#F3F3F3] rounded-xl mb-7 p-5'>
            <img className='w-[150px]' src={image} alt="" />
         </div>
         <div className='border-b   border-dashed border-[#13131326]'>
           <span>
                <span className='mr-3 text-[#23BE0A] bg-[#23BE0A0D] font-bold p-2 rounded-2xl'>{tags[0]}</span>
                <span className=' text-[#23BE0A] bg-[#23BE0A0D] font-bold p-2 rounded-2xl'>{tags[1]}</span>
          </span>
            <h2 className='text-2xl mt-7 mb-5 font-bold'>{title}</h2>
            <p className='mb-4 text-[#131313CC] font-semibold'>By : {author}</p>
         </div>
         <div className='flex mt-4 justify-between'>
            <div className='text-[#131313CC] font-semibold'>
                {genre}
            </div>
            <div className='flex font-semibold text-[#131313CC] items-center gap-1'>
                <span>{rating}</span>
                <span><CiStar /></span>
            </div>
         </div>
        </div>
    );
};

export default Book;