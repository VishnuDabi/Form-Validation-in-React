import * as Yup from 'yup'
const data={
    firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('First Name Required'),
    lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Last Name Required'),
    email: Yup.string().email().required("Email is required"),
    password: Yup
    .string()
    .required('Please enter a password')
    .min(8, 'Password too short')
    .matches(/^(?=.*[a-z])/, 'Must contain at least one lowercase character')
    .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
    .matches(/^(?=.*[0-9])/, 'Must contain at least one number')
    .matches(/^(?=.*[!@#%&])/, 'Must contain at least one special character'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Password confirm is required'),
    phone: Yup.string().required('Phone Number Required').matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').min(10, "too short")
        .max(10, "too long"),}
    export {data};