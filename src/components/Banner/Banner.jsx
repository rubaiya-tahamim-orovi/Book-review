import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex justify-around items-center md:mx-0 mx-4  rounded-xl py-7 bg-[#1313130D] my-7'>
            <div className='space-y-4 md:m-0 mx-4'>
                <h2 className='md:text-4xl text-2xl font-bold'>Books to freshen up your <br /> bookshelf</h2>
                <Link to="/listedBooks"> <button className='bg-[#23BE0A]
                cursor-pointer text-white font-bold md:px-4 px-2 py-2 rounded-md'>View The List</button></Link>
            </div>
            <div>
                <img className='md:w-auto w-[150px]' src="https://i.ibb.co/QFMhVQZV/dating-playbook.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;