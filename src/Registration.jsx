import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { data } from './ValidationData';
const Registration = () => {
    const values = { firstName: '', lastName: '', email: '', phone: '', password: '', confirmPassword: '' }
    return (
        <Formik
            initialValues={values}
            validationSchema={Yup.object(data)}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        id="firstName"
                        type="text"

                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div className="error-msg">{formik.errors.firstName}</div>
                    ) : null}

                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div className="error-msg">{formik.errors.lastName}</div>
                    ) : null}

                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error-msg">{formik.errors.email}</div>
                    ) : null}
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" {...formik.getFieldProps('password')} />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="error-msg">{formik.errors.password}</div>
                    ) : null}
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input id="confirmPassword" type="password" {...formik.getFieldProps('confirmPassword')} />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="error-msg">{formik.errors.confirmPassword}</div>
                    ) : null}
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="number" {...formik.getFieldProps('phone')} />
                    {formik.touched.phone && formik.errors.phone ? (
                        <div className="error-msg">{formik.errors.phone}</div>
                    ) : null}

                    <button type="submit">Submit</button>
                </form>
            )}
        </Formik>
    );
};
export default Registration;