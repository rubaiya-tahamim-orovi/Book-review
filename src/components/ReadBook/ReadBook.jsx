import React from 'react';
import { Link } from 'react-router';

const ReadBook = ({read}) => {
    const {title, image,author,tags,yearOfPublishing,
        publisher,totalPages,genre,rating , id} = read;
    // console.log(read);

    return (
        <div className='md:grid md:grid-cols-4 grid-cols-1  border pt-7 pb-7 px-7 rounded-xl  border-[#13131326]  gap-5'>
           <div className='flex   justify-center   col-span-1 bg-[#F3F3F3] rounded-xl  p-5'>
            <img src={image} className='w-[100px]' alt="" />
           </div>
           {/* details part here */}
           <div className='col-span-3 items-center  space-y-2'>
             <h2 className='text-xl font-bold md:mt-0 mt-5'>{title}</h2>
              <p className='mb-4 text-[#131313CC] font-semibold'>By : {author}</p>
              <div className='md:flex items-center gap-4'>
                 <div className='flex items-center md:mb-0 mb-3'>
                     <p  className='font-bold mr-5'>Tag</p>
                <span className='mr-3 text-[#23BE0A] bg-[#23BE0A0D] font-bold p-2 rounded-2xl'>{tags[0]}</span>
                <span className=' text-[#23BE0A] bg-[#23BE0A0D] font-bold p-2 rounded-2xl'>{tags[1]}</span>
          </div>
         
          <p className=''> Year Of Publishing :
            {yearOfPublishing}
          </p>
              </div>
              <div className='border-b mt-3 pb-2 border-[#13131326]'>
                <span>
                <span className='mr-5'> Publisher : {publisher}</span>
                <span>Page : {totalPages}</span>
              </span>
              </div>

        <div className='flex md:gap-5 gap-3'>
            <div className='text-[#328EFF] bg-[#328EFF26] md:px-3 px-1 py-2 md:text-base text-sm rounded-full'>Catagory : {genre}</div>
            <div className='text-[#FFAC33] bg-[#FFAC3326] md:px-3 px-1 py-2 md:text-base text-sm rounded-full'>Rating : {rating}</div>
            <Link to={`/book/${id}`}><button className='text-white
            cursor-pointer bg-[#23BE0A] md:px-3 px-2 py-2 md:text-base text-sm rounded-full'>View Details</button></Link>
        </div>
           </div>
        </div>
    );
};

export default ReadBook;