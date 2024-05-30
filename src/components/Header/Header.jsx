import React from 'react';
import { Link } from 'react-router-dom';
import data from './headerData';
import { useGlobalContext } from '../../StoreContext & StoreReducer/StoreContext';


const Header = () => {

    const {amount} = useGlobalContext()

return (
    <section className='navbar flex justify-center '>
        <div className=' navbar-nav flex flex-row justify-center py-3  px-10 mt-10 gap-6 text-xl uppercase text-center'>
            {data.map((link) => {
                const {id, name, to} = link;
                return (
                    <div className='navbar-link'>
                        <Link 
                        to={to}
                        key={id}
                        >{name}</Link>
                        
                    </div>
                )
            })}
            <div>
                <Link to='cart'>
                    <button className='cart-btn '>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span className='text-white text-xl ml-1'>{amount}</span>
                    </button>
                </Link>
            </div>
        </div>
    </section>
)
}

export default Header
