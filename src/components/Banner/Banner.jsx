import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='flex justify-around items-center  rounded-xl py-7 bg-[#1313130D] my-7'>
            <div className='space-y-4'>
                <h2 className='text-4xl font-bold'>Books to freshen up your <br /> bookshelf</h2>
                <Link to="/listedBooks"> <button className='bg-[#23BE0A]
                cursor-pointer text-white font-bold px-4 py-2 rounded-md'>View The List</button></Link>
            </div>
            <div>
                <img src="https://i.ibb.co/QFMhVQZV/dating-playbook.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;