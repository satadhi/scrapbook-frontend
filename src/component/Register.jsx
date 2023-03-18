import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import locationOptions from '../resource/locationList';

function Register() {
    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        cpassword: '',
        picture: '',
        location: '',
        occupation: ''
    };

    const [picture, setpicture] = useState('');

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
        cpassword: Yup.string().required('Please confirm your password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
        picture: Yup.mixed().test('fileType', 'Invalid file type, only JPEG, PNG, and GIF are allowed', (value) => {
            if (value) {
                return ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
            }
            return true;
        }),
        location: Yup.string().required('Location is required'),
        occupation: Yup.string(),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values);

        try {
            const response = await fetch('http://localhost:3001/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            })

            setSubmitting(false);
        } catch (e) {
            setSubmitting(true);
        }




    };

    return (
        <div>
            <h1>Register</h1>
            <Formik initialValues={initialValues} validationSchema={validationSchema}  enctype="multipart/form-data" onSubmit={handleSubmit}>
                {({ value, isSubmitting, setFieldValue }) => (
                    <Form>
                        <div>
                            <label htmlFor="firstName">firstName:</label>
                            <Field type='text' name="firstName" id="firstName" />
                            <ErrorMessage name="firstName" component="div" />
                        </div>
                        <div>
                            <label htmlFor="lastName">lastName:</label>
                            <Field type="text" name="lastName" id="lastName" />
                            <ErrorMessage name="lastName" component="div" />
                        </div>
                        <div>
                            <label htmlFor="email">email:</label>
                            <Field type="email" name="email" id="email" />
                            <ErrorMessage name="email" component="div" />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <Field type="password" name="password" id="password" />
                            <ErrorMessage name="password" component="div" />
                        </div>
                        <div>
                            <label htmlFor="cpassword"> Confirm password:</label>
                            <Field type="password" name="cpassword" id="cpassword" />
                            <ErrorMessage name="cpassword" component="div" />
                        </div>
                        <div>
                            <label htmlFor="picture">Upload a picture:</label>
                            <Field
                                id="picture"
                                name="picture"
                                type="file"
                                onChange={(event) => {
                                    console.log(event.currentTarget.files[0])
                                    setFieldValue("picture", "satadhi");
                                }}
                            />
                            <ErrorMessage name="picture" />
                        </div>
                        <div>
                            <label htmlFor="location">Location:</label>
                            <Field as="select" name="location">
                                <option value="">Select a location</option>
                                {locationOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="location" />
                        </div>
                        <div>
                            <label htmlFor="occupation">occupation:</label>
                            <Field type="text" name="occupation" id="occupation" />
                            <ErrorMessage name="occupation" component="div" />
                        </div>

                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Register;