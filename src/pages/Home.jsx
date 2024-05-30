import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Arrival from '../components/Arrival';
import Most from '../components/Most';
import FAQ from '../components/FAQ/FAQ';

const Home = () => {
  return (
    <>
    <section className='home p-6 lg:px-16 grid grid-col text-center xl:grid-cols-2 '>
      <div className='text-white'>
        <div className='tagline flex flex-col gap-7'>
          <h2 className='uppercase text-xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl'>hear your <span>music</span> not the <span>noise</span></h2>
          <p className='capitalize text-lg xl:text-2xl mb-12 font-light '>Buy the best headphones with premium quality and noise cancelation feature.</p>
        </div>
          <Link className='home-btn text-sm p-4 sm:text-md lg:text-lg xl:text-lg' to='products'>Explore products</Link>
      </div>
      <div className='hidden xl:flex'>
        <img className='home-img' src='../assets/images/img-1.png' alt='headphone' />
      </div>
    </section>
    <Cards />
    <Arrival />
    <Most />
    <FAQ />
    </>
  )
}

export default Home
