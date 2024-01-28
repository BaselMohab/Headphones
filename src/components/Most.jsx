import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

const Most = () => {
return (
    <section className='most py-8 '>
        <h2 className='text-white text-4xl text-center mb-10 uppercase'>Most Purchased</h2>
        <div className="most-content grid grid-col-1 sm:grid-cols-2 items-center px-10">
            <img src='../assets/images/mint-apple.jpg' className='rounded-2xl border border-spacing-20 border-teal-300' />
            <div className='flex flex-col gap-7 text-white items-center'>
                <h2 className='text-3xl uppercase text-teal-300'>Airpods Max - Mint green</h2>
                <p className='text-lg text-white text-center'>Airpods deliver efforties, all-day audio on the go. And bring noice canvcelation with a customisable fit.</p>
                <div className='flex flex-row gap-3'>
                    <p>5.0</p>
                    <Rating name="read-only" value={5} readOnly />
                    <p>Based on 247 reviews</p>
                </div>
                <Link to='/' className='most-btn bg-teal-300'>More details</Link>
            </div>
        </div>
    </section>
)
}

export default Most;
