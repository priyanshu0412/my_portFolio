import * as Yup from 'yup';

// Password regex: 
// - At least one uppercase letter
// - At least one number
// - Between 8 and 16 characters
const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;

// Email regex for stricter validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .matches(emailRegex, 'Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .matches(passwordRegex, 'Password must be between 8-16 characters, contain at least one uppercase letter and one number')
        .required('Password is required')
});

export default loginValidationSchema;
