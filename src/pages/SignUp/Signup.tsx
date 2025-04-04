import React, { useState } from 'react';
import Typography from '../../components/common/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/common/Button';
import CrochetSignIn from '../../assets/Crochet-signin.svg';
import { ConfirmationResult, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../../../firebase';
import { useVerifyPhoneNumberMutation, VerifyPhoneResponse } from '../../services/auth';

interface SignInType {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  otp: string;
}

function Signup() {
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);
  const [showCaptcha, setShowCaptcha] = useState<boolean>(true);

  const [verifyUser] = useVerifyPhoneNumberMutation();

  const initialValues: SignInType = {
    phoneNumber: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    otp: ''
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character (@$!%*?&)'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
    otp: Yup.string()
      .matches(/^\d{6}$/, 'OTP must be 6 digits')
      .when('phoneNumber', {
        is: () => showOTP, // OTP required only if showOTP is true
        then: (schema) => schema.required('OTP is required')
      })
  });

  const handlePhoneSubmit = async (values: SignInType) => {
    try {
      await verifyUser('+91' + values.phoneNumber);

      // const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      // const confirmation = await signInWithPhoneNumber(auth, '+91' + values.phoneNumber, recaptcha);
      // setConfirmation(confirmation);
      // setShowCaptcha(false)
      // setShowOTP(true);
    } catch (err) {
      const error = err as VerifyPhoneResponse;
      console.error(error.message ?? 'Something went wrong.');
    }
  };

  const handleOTPSubmit = async (values: SignInType) => {
    try {
      await confirmation?.confirm(values.otp);
    } catch (error) {
      console.error('there is an error', error);
    }
  };

  return (
    <div className="grid items-center mb-16 grid-cols-2 gap-8">
      <div className="col-span-2 md:col-span-1">
        <div className="px-4 py-8 m-2 col-span-2 md:col-span-1 rounded-lg shadow-lg flex flex-col gap-2">
          <Typography variant="subTitle" className="text-(--primary) font-medium">
            Sign Up
          </Typography>
          <Typography variant="body-2">Create a new account.</Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={showOTP ? handleOTPSubmit : handlePhoneSubmit}
          >
            {() => (
              <Form className="flex flex-col mt-8 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-gray-900 mb-1"
                  >
                    First Name
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-(--primary)"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-gray-900 mb-1"
                  >
                    Last Name
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-(--primary)"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold text-gray-900 mb-1"
                  >
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
                        className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500"
                      >
                        <option>+91</option>
                      </select>
                    </div>
                    <Field
                      id="phoneNumber"
                      name="phoneNumber"
                      type="text"
                      placeholder="987-654-3210"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-semibold text-gray-900 mb-1"
                  >
                    Password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-(--primary)"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-semibold text-gray-900 mb-1"
                  >
                    Confirm Password
                  </label>
                  <Field
                    id="confirmPassword"
                    name="confirmPassword"
                    type="text"
                    placeholder="Enter confirm password"
                    className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-(--primary)"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* OTP Field (conditionally shown) */}
                {showOTP && (
                  <div>
                    <label htmlFor="otp" className="block text-sm font-semibold text-gray-900 mb-1">
                      OTP
                    </label>
                    <Field
                      id="otp"
                      name="otp"
                      type="text"
                      placeholder="Enter OTP"
                      className="block w-full rounded-md px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-(--primary)"
                    />
                    <ErrorMessage
                      name="otp"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                )}

                {showCaptcha && <div id="recaptcha" />}

                {/* Submit Button */}
                <div>
                  <div className="sm:col-span-2 mt-4">
                    <Button type="submit" className="w-full" color="primary-gold">
                      {showOTP ? 'Verify OTP' : 'Get OTP'}
                    </Button>
                  </div>
                  <Typography className="text-right mt-4" variant="body-2">
                    <a href="/sign-in">
                      Already have an account?{' '}
                      <span className="font-bold text-(--primary)">Sign in</span>
                    </a>
                  </Typography>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <img src={CrochetSignIn} alt="Crochet Signin" className="mb-16 w-[80%] max-w-[400px]" />
        <Typography className="font-bold text-(--primary)" variant="s-subTitle">
          Join the FloraKnots Family
        </Typography>
        <Typography className="mt-4 max-w-2xl" variant="body-2">
          Create an account and step into a world of handcrafted elegance. From intricately woven
          crochet flowers to cozy plushies and stylish apparel, each piece is crafted with love and
          creativity. Sign up today to explore exclusive collections, enjoy personalized
          recommendations, and bring home a touch of artistry.
        </Typography>
      </div>
    </div>
  );
}

export default Signup;
