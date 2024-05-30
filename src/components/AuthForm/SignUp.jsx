import React from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignUp = ({onSignupSuccess}) => {
    const initialValues = {
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        };

    const navigate = useNavigate()    

    const onSubmit = (values) => {
            console.log("onSubmit", values);
            onSignupSuccess()
            navigate('/')
        };

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;    

    const validationSchema = Yup.object({
            email: Yup.string().required('Email is required').email('Invalid email address'),
            phone: Yup.string()
            .required('Phone is required')
            .test('is-number', 'Invalid phone number', (value) => {
                return !isNaN(Number(value));
            }),
            password: Yup.string().min(5).matches(passwordRules,{message: "Please create a stronger password"}).required("Required"),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], "Passwords must match").required("Required")  // Validation rule to check if the value of `confirmPassword` matches with `password`.
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
            <label htmlFor="phone">Phone number</label><br />
            <Field className='input' id="phone" type="tel" name="phone"/>
            <div className='error'>
                <ErrorMessage name='phone' component='span' />
            </div>
        </div>
        <div className='field'>
            <label htmlFor="phone">Password</label><br />
            <Field className='password' id="password" type="password" name="password"/>
            <div className='error'>
                <ErrorMessage name='password' component='span' />
            </div>
        </div>
        <div className='field'>
            <label htmlFor="phone">Confirm Password</label><br />
            <Field className='confirmPassword' id="confirmPassword" type="password" name="confirmPassword"/>
            <div className='error'>
                <ErrorMessage name='confirmPassword' component='span' />
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

export default SignUp;


