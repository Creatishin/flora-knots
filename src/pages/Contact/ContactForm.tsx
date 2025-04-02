import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/common/Button';

interface ContactType {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactUsForm = () => {
  const initialValues: ContactType = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email format'),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = (
    values: ContactType,
    {
      resetForm
    }: {
      resetForm: () => void;
    }
  ) => {
    console.log('Form Data:', values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
              First name
            </label>
            <Field
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--primary) ${
                touched.firstName && errors.firstName ? 'border-red-500' : ''
              }`}
            />
            <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
              Last name
            </label>
            <Field
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--primary) ${
                touched.lastName && errors.lastName ? 'border-red-500' : ''
              }`}
            />
            <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--primary) ${
                touched.email && errors.email ? 'border-red-500' : ''
              }`}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone number
            </label>
            <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300">
              <div className="grid shrink-0 grid-cols-1">
                <select
                  disabled
                  id="country"
                  name="country"
                  autoComplete="country"
                  aria-label="Country"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--primary) sm:text-sm/6"
                >
                  <option>+91</option>
                </select>
              </div>
              <Field
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                placeholder="123-456-7890"
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              rows={4}
              className={`block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-(--primary) ${
                touched.message && errors.message ? 'border-red-500' : ''
              }`}
            />
            <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 mt-4">
            <Button type="submit" className="w-full" color="primary-gold">
              Let's connect
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
