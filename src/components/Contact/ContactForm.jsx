import React from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const initialValues = {
            name: "",
            email: "",
            phone: "",
            message: "",
        };

    const onSubmit = (values, {resetForm}) => {
            console.log("onSubmit", values);
            resetForm()
        };

    const validationSchema = Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().required('Email is required').email('Invalid email address'),
            phone: Yup.string()
            .required('Phone is required')
            .test('is-number', 'Invalid phone number', (value) => {
                // Check if the value is a valid number
                return !isNaN(Number(value));
                // The test method allows you to define a custom validation function. 
                // The first argument is a unique identifier for the test, 
                // and the second argument is the error message to be displayed if the test fails.
            }),
            message: Yup.string().required('Message is required'),
        });

return (
    <div>
    <Formik 
    initialValues={initialValues} 
    onSubmit={onSubmit} 
    validationSchema={validationSchema}>  
        {() => (
        <Form className='contact-form flex flex-col items-center gap-5 py-5'>
        <div className='field'>
            <label htmlFor="name">Name</label><br />
            <Field className='input' id="name" type="text" name="name" />
            <div className='error'>
                <ErrorMessage name='name' component='span'/>
            </div>
        </div>
        <div className='field'>
            <label htmlFor="email">Email</label><br />
            <Field className='input' id="email" type="email" name="email"/>
            <div className='error'>
                <ErrorMessage name='email' component='span' />
            </div>
        </div>
        <div className='field'>
            <label htmlFor="phone">Phone number</label><br />
            <Field className='input' id="phone" type="tel" name="phone"/>
            <div className='error'>
                <ErrorMessage name='phone' component='span' />
            </div>
        </div>
        <div className='field'>
            <label htmlFor="message">Your message</label><br />
            <Field className='input' id="message" type="text" name="message"/>
            <div className='error'>
                <ErrorMessage name='message' component='span' />
            </div>
        </div>
        <button
        className='form-btn py-2 px-5 text-lg capitalize rounded-md'
        type='submit'>Submit</button>
    </Form>
        )} 
    
    </Formik>
    </div>
);
};

export default ContactForm;


