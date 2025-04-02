import React, { useState } from 'react';
import Typography from '../../components/common/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../../components/common/Button';
import CrochetSignIn from '../../assets/Crochet-signin.svg';

interface SignInType {
  phoneNumber: string;
  otp: string;
}

function Signin() {
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [resendDisabled, setResendDisabled] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(30);

  const initialValues: SignInType = {
    phoneNumber: '',
    otp: ''
  };

  const validationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    otp: Yup.string()
      .matches(/^\d{4}$/, 'OTP must be 4 digits')
      .when('phoneNumber', {
        is: () => showOTP, // OTP required only if showOTP is true
        then: (schema) => schema.required('OTP is required')
      })
  });

  const handlePhoneSubmit = (values: SignInType) => {
    console.log('Phone Number:', values.phoneNumber);
    setShowOTP(true);
    startResendTimer();
  };

  const handleOTPSubmit = (values: SignInType, { resetForm }: { resetForm: () => void }) => {
    console.log('Form Data:', values);
    setTimeout(() => {
      alert('Signed in successfully!');
      resetForm();
      setShowOTP(false);
    }, 500);
  };

  const handleResendOTP = () => {
    console.log('Resending OTP...');
    startResendTimer();
  };

  const startResendTimer = () => {
    setResendDisabled(true);
    setTimer(30);
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          setResendDisabled(false);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="grid items-center mb-16 grid-cols-2 gap-8">
      <div>
        <Typography className="mb-16 font-bold text-(--primary)" variant="s-title">
          FloraKnots
        </Typography>

        <div className="px-4 py-8 m-2 col-span-2 md:col-span-1 rounded-lg shadow-lg flex flex-col gap-2">
          <Typography variant="subTitle" className="text-(--primary) font-medium">
            Sign In
          </Typography>
          <Typography variant="body-2">Use your contact number to sign in.</Typography>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={showOTP ? handleOTPSubmit : handlePhoneSubmit}
          >
            {() => (
              <Form className="flex flex-col mt-8 gap-8">
                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-semibold text-gray-900 mb-2"
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

                {/* OTP Field (conditionally shown) */}
                {showOTP && (
                  <div>
                    <label htmlFor="otp" className="block text-sm font-semibold text-gray-900 mb-2">
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

                {/* Resend OTP Button (conditionally shown) */}
                {showOTP && (
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    disabled={resendDisabled}
                    className={`cursor-pointer text-sm font-semibold ${
                      resendDisabled ? 'text-gray-400 cursor-not-allowed' : 'text-blue-500'
                    }`}
                  >
                    Resend OTP {resendDisabled && `(${timer}s)`}
                  </button>
                )}

                {/* Submit Button */}
                <div>
                  <div className="sm:col-span-2 mt-4">
                    <Button type="submit" className="w-full" color="primary-gold">
                      {showOTP ? 'Verify OTP' : 'Get OTP'}
                    </Button>
                  </div>
                  <Typography className="text-right mt-4" variant="body-2">
                    <a href="/sign-up">
                      Don't have an account?{' '}
                      <span className="font-bold text-(--primary)">Sign up</span>
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
          Where Creativity Meets Comfort
        </Typography>
        <Typography className="mt-4 max-w-2xl" variant="body-2">
          Sign in to explore a world of handcrafted beauty. From delicate crochet flowers to cozy
          plushies and stylish apparel, every creation is a testament to artistry and passion. Let
          FloraKnots bring warmth, charm, and uniqueness to your everyday life.
        </Typography>
      </div>
    </div>
  );
}

export default Signin;
