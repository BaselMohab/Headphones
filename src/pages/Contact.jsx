import React from 'react'
import ContactInfo from '../components/Contact/ContactInfo'
import ContactForm from '../components/Contact/ContactForm'

const Contact = () => {
return (
    <section className='contact'>
        <h1 className='text-center text-white text-4xl uppercase'>contact us</h1>
        <div className="underline"></div>
        <h2 className='text-white text-center text-3xl capitalize py-20'>we are here to give you the best service possible and in a short time </h2>
        <div className='text-white grid gap-7 px-4 mt-15 capitalize lg:grid-cols-4 xl:grid-cols-4'>
            <ContactInfo />
        </div>
        <div className='grid grid-cols-2 gap-2 mt-32 px-12 items-center'>
            <div className='flex flex-col'>
                <ContactForm />
            </div>
            <div>
                <img src='../assets/images/man-headphones-blue.jpg' className='rounded-lg hidden lg:flex xl:flex' />
            </div>
        </div>
    </section>
)
}

export default Contact
