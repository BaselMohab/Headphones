import React from 'react';
import data from './cardsData'
import { Link } from 'react-router-dom';

const Cards = () => {
return (
    <section className='cards m-20'>
        <h2 className='text-white text-4xl text-center mb-4 uppercase'>Seasonal Discount</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
            {data.map((card) => {
                const {id, name, image, prePrice, postPrice} = card;
                return (
                    <div key={id} className='card'>
                        <img className='card-img' src={image} alt="product"/>
                        <div className="card-content">
                        <h2 className='card-name'>{name}</h2>
                        <div className="price">
                            <span className="old-price">${prePrice}</span>
                            <span className="new-price">${postPrice}</span>
                        </div>
                        <div className="cards-btn">
                        <Link to='cart' className='card-btn-1'>more details</Link>
                        <Link to='cart' className='card-btn-2'>add to cart</Link>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
)
}

export default Cards
