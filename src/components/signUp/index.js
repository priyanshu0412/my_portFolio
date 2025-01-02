"use client";
import signupValidationSchema from '@/validations/signUpValidations';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

// -----------------------------------------

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const validateForm = () => {
        try {
            signupValidationSchema.validateSync(formData, { abortEarly: false });
            setErrors({});
            return true;
        } catch (validationErrors) {
            const errorMessages = {};
            validationErrors.inner.forEach((error) => {
                errorMessages[error.path] = error.message;
            });
            setErrors(errorMessages);
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form values:', formData);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            })
        }

    };

    return (
        <div className='flex items-center justify-center w-full min-h-screen'>
            <div className='w-full py-20 max-w-[1200px] px-8 gap-y-16 flex flex-col justify-center items-center'>
                <Fade direction='up' triggerOnce={true} duration={1000} className='w-full'>
                    <div className='flex flex-col items-center justify-center gap-y-4'>
                        <p className='text-3xl font-bold !leading-loose tracking-wide text-transparent cursor-pointer lg:text-5xl font-poppins bg-gradient-to-r from-teal-400 to-gray-300 bg-clip-text'>
                            Sign Up
                        </p>
                        <p className='text-[#b2b3b3] font-poppins text-justify'>
                            Create an account to get started. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full gap-y-4 lg:gap-y-10'>
                        <div className='flex flex-col items-center justify-center w-full lg:flex-col gap-y-8 lg:gap-y-8'>
                            {/* First Name */}
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>First Name</p>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className={`bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white ${errors.firstName ? 'border-red-500' : ''}`}
                                />
                                {errors.firstName && <div className='text-sm text-red-500'>{errors.firstName}</div>}
                            </div>

                            {/* Last Name */}
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>Last Name</p>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className={`bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white ${errors.lastName ? 'border-red-500' : ''}`}
                                />
                                {errors.lastName && <div className='text-sm text-red-500'>{errors.lastName}</div>}
                            </div>

                            {/* Email */}
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>Email</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white ${errors.email ? 'border-red-500' : ''}`}
                                />
                                {errors.email && <div className='text-sm text-red-500'>{errors.email}</div>}
                            </div>

                            {/* Password */}
                            <div className='flex flex-col gap-y-2 w-full lg:w-[40%]'>
                                <p className='text-[#b2b3b3]'>Password</p>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`bg-[#111214] border-[0.5px] border-[#b2b3b3] px-4 py-3 rounded-lg w-full text-white ${errors.password ? 'border-red-500' : ''}`}
                                />
                                {errors.password && <div className='text-sm text-red-500'>{errors.password}</div>}
                            </div>
                        </div>
                        <div className='pt-10 w-fit lg:pt-0'>
                            <button type="submit" className='text-[#000] bg-[#b2b3b3] px-6 py-4 rounded-full hover:bg-[#ffffffc0]'>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </Fade>
            </div>
        </div>
    );
};

export default SignUp;
