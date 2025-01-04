import * as yup from 'yup';

const newsLetterSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
});

export default newsLetterSchema;
