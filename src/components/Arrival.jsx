import React from 'react';
import { Link } from 'react-router-dom';

const Arrival = () => {
return (
    <section className='arrival mb-20'>
        <h2 className='text-white text-4xl text-center mb-10 uppercase'>Newest Addition</h2>
        <div className='flex flex-col gap-12'>
        <div className='flex flex-row justify-evenly gap-5 items-center'>
            <img className='rounded-lg'  src='../assets/images/white-sony-head.jpg' />
            <div className="new-arrival flex flex-col gap-7 text-white items-center">
                <h3 className='uppercase text-5xl'>Sony WH-1000XM5</h3>
                <p className='capitalize text-lg'>The best noise cancelling with two high performance proesors and eight microphones.</p>
                <Link to='cart' className='arrival-btn'>more details</Link>
            </div>
        </div>
        <div className='flex flex-row justify-evenly gap-5 items-center'>
            <div className="new-arrival flex flex-col gap-7 text-white items-center">
                <h3 className='uppercase text-5xl'>marshal  major IV</h3>
                <p className='capitalize text-lg'>the iconic headphones from Marshall with 80+ solid hours of wireless playtime, wireless charging and a new.</p>
                <Link to='cart' className='arrival-btn'>more details</Link>
            </div>
            <img className='rounded-lg'  src='../assets/images/marshal.jpg' />
        </div>
        <div className='flex flex-row justify-evenly gap-5 items-center'>
            <img className='rounded-lg'  src='../assets/images/philips.jpg' />
            <div className="new-arrival flex flex-col gap-7 text-white items-center">
                <h3 className='uppercase text-5xl'>Philips Bold Bass</h3>
                <p className='capitalize text-lg'>Tune in to your sounds with big, bold bass. Tune out distractions with Active Noise Cancelling (ANC).</p>
                <Link to='cart' className='arrival-btn'>more details</Link>
            </div>
        </div>
        </div>
    </section>
)
}

export default Arrival
