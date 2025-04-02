import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import Typography from '../../components/common/Typography';
import { Radio, RadioGroup } from '@headlessui/react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Button from '../../components/common/Button';
import * as Yup from 'yup';
import { RenderCartItem } from '../../components/layout/Cart';
import { states } from '../../utils/states';

const initialValue = {
  contact: '',
  name: {
    first: '',
    last: ''
  },
  shipping: {
    mode: 'standard',
    address: '',
    city: '',
    state: '',
    pincode: ''
  },
  coupon: '',
  message: ''
};

const validationSchema = Yup.object({
  contact: Yup.string().required('Contact number is required'),
  name: Yup.object({
    first: Yup.string().required('First name is required')
  }),
  shipping: Yup.object({
    address: Yup.string().required('Address is required'),
    street: Yup.string().required('Street is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    pincode: Yup.string()
      .matches(/^\d{6}$/, 'Invalid postal code')
      .required('Pincode is reqired')
  })
});

function Checkout() {
  const handleFormSubmit = () => {};

  const cart = useAppSelector((state) => state.cart);

  const fieldClass =
    'w-full border-2 cursor-pointer border-(--gray-normal) border rounded p-2 mt-1 focus:border-(--primary) focus:outline-0';

  const RenderSections = ({
    title,
    children,
    hideBorder
  }: {
    title: string;
    children: React.JSX.Element;
    hideBorder?: boolean;
  }) => (
    <div
      className={`flex flex-col gap-4 py-4 md:py-12  border-b-${hideBorder ? 0 : 1} border-b-(--gray-normal)`}
    >
      <Typography variant="body-1" className="font-medium">
        {title}
      </Typography>
      <div>{children}</div>
    </div>
  );

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValue}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <Form>
          <div className="py-0 gap-8 lg:py-8 grid grid-cols-1 md:grid-cols-2">
            <div>
              <RenderSections title="Contact information">
                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Phone number
                  </label>
                  <div className="flex rounded-sm bg-white outline-2 -outline-offset-1 outline-(--gray-normal)">
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
                      id="contact"
                      name="contact"
                      type="text"
                      placeholder="123-456-7890"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                  <ErrorMessage
                    name="contact"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </RenderSections>
              <RenderSections title="Shipping information">
                <div className="flex gap-4 flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Typography variant="body-2">First name*</Typography>
                      <Field
                        placeholder="Enter first name"
                        type="text"
                        name="name.first"
                        className={`${fieldClass}`}
                      />
                      {errors.name?.first && touched.name?.first && (
                        <Typography variant="error">{errors.name?.first}</Typography>
                      )}
                    </div>
                    <div>
                      <Typography variant="body-2">Last name</Typography>
                      <Field
                        placeholder="Enter last name"
                        type="text"
                        name="name.last"
                        className={`${fieldClass}`}
                      />
                      {errors.name?.last && touched.name?.last && (
                        <Typography variant="error">{errors.name?.last}</Typography>
                      )}
                    </div>
                  </div>
                  <div>
                    <Typography variant="body-2">Address*</Typography>
                    <Field
                      placeholder="Enter address"
                      type="text"
                      name="shipping.address"
                      className={`${fieldClass}`}
                    />
                    {errors.shipping?.address && touched.shipping?.address && (
                      <Typography variant="error">{errors.shipping?.address}</Typography>
                    )}
                  </div>
                  <div>
                    <Typography variant="body-2">State*</Typography>
                    <Field as="select" name="shipping.state" className={`${fieldClass}`}>
                      <option value="">Select State</option>
                      {Object.keys(states).map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Field>
                    {errors.shipping?.state && touched.shipping?.state && (
                      <Typography variant="error">{errors.shipping?.state}</Typography>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Typography variant="body-2">State*</Typography>
                      <Field as="select" name="shipping.city" className={`${fieldClass}`}>
                        <option value="">Select City</option>
                        {states[values.shipping.state]?.map((city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        ))}
                      </Field>
                      {errors.shipping?.city && touched.shipping?.city && (
                        <Typography variant="error">{errors.shipping?.city}</Typography>
                      )}
                    </div>

                    <div>
                      <Typography variant="body-2">Pincode*</Typography>
                      <Field
                        placeholder="Enter pincode"
                        type="text"
                        name="shipping.pincode"
                        className={`${fieldClass}`}
                      />
                      {errors.shipping?.pincode && touched.shipping?.pincode && (
                        <Typography variant="error">{errors.shipping?.pincode}</Typography>
                      )}
                    </div>
                  </div>
                </div>
              </RenderSections>
              <RenderSections hideBorder title="Delivery mode">
                <RadioGroup
                  value={values.shipping.mode}
                  onChange={(val) => setFieldValue('shipping.mode', val)}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Radio
                      value="standard"
                      className={`${fieldClass} ${values.shipping.mode === 'standard' && 'border-(--var-primary)'}`}
                    >
                      <div>
                        <Typography variant="body-2">Standard</Typography>
                        <Typography variant="caption" className="text-(--gray-medium)">
                          4-10 business days
                        </Typography>
                        <Typography variant="body-2" className="mt-6 font-medium">
                          {cart.final_price > 999 && (
                            <span className="text-red-600 line-through mr-2">Rs. 100</span>
                          )}
                          Rs. {cart.final_price > 999 ? 0 : 100}
                        </Typography>
                      </div>
                    </Radio>
                    <Radio
                      value="express"
                      className={`${fieldClass} ${values.shipping.mode === 'express' && 'border-(--var-primary)'}`}
                    >
                      <div>
                        <Typography variant="body-2">Express</Typography>
                        <Typography variant="caption" className="text-(--gray-medium)">
                          2-4 business days
                        </Typography>
                        <Typography variant="body-2" className="mt-6 font-medium">
                          {cart.final_price > 999 && (
                            <span className="text-red-600 line-through mr-2">Rs. 500</span>
                          )}
                          Rs. {cart.final_price > 999 ? 400 : 500}
                        </Typography>
                      </div>
                    </Radio>
                  </div>
                </RadioGroup>
              </RenderSections>
            </div>
            <div className="py-1 md:py-14">
              <Typography variant="body-1" className="font-medium mb-2 md:mb-11">
                Order summary
              </Typography>
              <div className="border-1 flex  flex-col border-(--gray-normal) rounded px-4">
                <div
                  style={{ maxHeight: 'calc(100dvh - 300px)' }}
                  className="no-scrollbar px-2 flex-1 overflow-auto"
                >
                  {cart.cart_items.map((cartItem) => (
                    <RenderCartItem key={cartItem.name} item={cartItem} />
                  ))}
                </div>

                <div className="flex flex-col gap-4 py-8">
                  <div className="mb-8">
                    <Typography variant="body-2">Coupon</Typography>
                    <Field
                      placeholder="Enter coupon"
                      type="text"
                      name="coupon"
                      className={`${fieldClass}`}
                    />
                    {errors.coupon && touched.coupon && (
                      <Typography variant="error">{errors.coupon}</Typography>
                    )}
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <Typography variant="body-2">Subtotal</Typography>
                    <Typography variant="body-2" className="font-medium">
                      Rs. {cart.total_price}
                    </Typography>
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <Typography variant="body-2">Shipping</Typography>
                    <Typography variant="body-2" className="font-medium">
                      Rs.{' '}
                      {values.shipping.mode === 'standard'
                        ? cart.final_price > 999
                          ? 0
                          : 100
                        : cart.final_price > 999
                          ? 400
                          : 500}
                    </Typography>
                  </div>
                  <div className="flex gap-4 items-center justify-between">
                    <Typography variant="body-2">Total</Typography>
                    <Typography variant="body-2" className="font-medium">
                      Rs.{' '}
                      {cart.final_price +
                        (values.shipping.mode === 'standard'
                          ? cart.final_price > 999
                            ? 0
                            : 100
                          : cart.final_price > 999
                            ? 400
                            : 500)}
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="my-8">
                <Typography variant="body-2">Any personalised message?</Typography>
                <Field
                  placeholder="Create a personalised message of up to 30 words"
                  type="textarea"
                  name="coupon"
                  className={`${fieldClass}`}
                />
                {errors.coupon && touched.coupon && (
                  <Typography variant="error">{errors.coupon}</Typography>
                )}
              </div>
              <Button
                type="submit"
                onClick={() => console.log('pay')}
                className="w-full"
                color="primary-gold"
                size="large"
              >
                Proceed to pay
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default Checkout;
