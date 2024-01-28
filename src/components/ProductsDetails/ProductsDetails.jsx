import React from 'react';
import data from './productsData';
import { Link } from 'react-router-dom';

const ProductsDetails = () => {
return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
        {data.map((product) => {
            const {id, image, name, desc, rating, stars, reviews, price} = product;
            return (
                <div key={id} className='mt-10 product-details'>
                    <img src={image} alt={name} 
                    className='product-img'
                    />
                    <div className='text-white flex flex-col text-center items-center gap-4'>
                        <h2 className='text-4xl product-name'>{name}</h2>
                        <p className='text-l capitalize'>{desc}</p>
                        <div className='flex flex-row items-center gap-5'>
                            <p className='text-2xl'>{rating}</p>
                            <span>{stars}</span>
                            <p className='capitalize'>base on <span className='text-lg'>{reviews}</span> reviews</p>
                        </div>
                        <p className='text-3xl'>${price}</p>
                    </div>
                    <div className="flex flex-row gap-20 py-4 capitalize">
                        <Link to='cart' className='product-btn-1'>more details</Link>
                        <Link to='cart' className='product-btn-2'>add to cart</Link>
                    </div>
                </div>    
            )
        })}
    </div>
)
}

export default ProductsDetails
