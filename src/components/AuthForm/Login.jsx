import React from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';

const Login = () => {
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
            email: Yup.string().required('Email is required').email('Invalid email address'),

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
            <label htmlFor="email">Email</label><br />
            <Field className='input' id="email" type="email" name="email"/>
            <div className='error'>
                <ErrorMessage name='email' component='span' />
            </div>
        </div>
        <div className='field'>
            <label htmlFor="email">Email</label><br />
            <Field className='input' id="email" type="email" name="email"/>
            <div className='error'>
                <ErrorMessage name='email' component='span' />
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

export default Login;


