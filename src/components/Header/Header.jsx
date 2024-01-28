import React from 'react';
import { Link } from 'react-router-dom';
import data from './headerData';


const Header = () => {
return (
    <section className='navbar flex justify-center '>
        <div className=' navbar-nav flex flex-row justify-center py-3  px-10 mt-10 gap-5 text-xl uppercase text-center'>
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
        </div>
    </section>
)
}

export default Header
