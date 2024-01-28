import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards/Cards';
import Arrival from '../components/Arrival';
import Most from '../components/Most';
import FAQ from '../components/FAQ/FAQ';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
    <section className='home grid grid-cols-1 md:grid-cols-2'>
      <div className='text-white'>
        <div className=' tagline flex flex-col gap-7'>
          <h2 className='uppercase text-7xl'>hear your <span>music</span> not the <span>noise</span></h2>
          <p className='capitalize text-2xl mb-12 font-light'>Buy the best headphones with premium quality and noise cancelation feature.</p>
        </div>
          <Link className='home-btn text-xl p-5' to='products'>Explore products</Link>
      </div>
      <div>
        <img className='home-img' src='../assets/images/beats-blue-1.png' alt='headphone' />
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
