import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-around items-center  rounded-xl py-7 bg-[#1313130D] my-7'>
            <div className='space-y-4'>
                <h2 className='text-4xl font-bold'>Books to freshen up your <br /> bookshelf</h2>
                 <button className='bg-[#23BE0A] text-white font-bold px-4 py-2 rounded-md'>View The List</button>
            </div>
            <div>
                <img src="../../../public/book-images/dating playbook.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;