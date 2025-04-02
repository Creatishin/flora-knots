import React from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppSelector } from '../../store/store';
import Typography from '../common/Typography';
import Button from '../common/Button';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slice/CartSlice';
import NotFound from '../../pages/AdditionalPages/NotFound';
import { useNavigate } from 'react-router-dom';
import QuantityButton from '../common/elements/QuantityButton';
import { CartItem } from '../../types/cartType';

export const RenderCartItem = ({ item }: { item: CartItem }) => {
  const dispatch = useDispatch();
  return (
    <li key={item.product_id} className="relative flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img alt={item.image} src={item.image} className="size-full object-cover" />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base gap-2 text-gray-900">
            <Typography variant="caption" className="font-medium">
              {item.name}
            </Typography>
            <Typography variant="caption">Rs. {item.price}</Typography>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <QuantityButton cart={item} productId={item.product_id} />

          <Button
            onClick={() => {
              dispatch(removeFromCart(item.product_id));
            }}
            color="remove-white"
            className="absolute top-[20px] left-[-2px] rounded-full px-0 py-0 flex items-center justify-center w-[30px] aspect-square"
            size="small"
          >
            <XMarkIcon className="size-4" />
          </Button>
        </div>
      </div>
    </li>
  );
};

export default function Cart({
  open,
  setOpen
}: Readonly<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }>) {
  const cart = useAppSelector((state) => state.cart);
  const navigate = useNavigate();

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      <Typography variant="s-subTitle">Cart</Typography>
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      {cart.cart_items.length ? (
                        <ul className="-my-6 divide-y divide-gray-200">
                          {cart.cart_items.map((item) => (
                            <RenderCartItem key={item.name} item={item} />
                          ))}
                        </ul>
                      ) : (
                        <NotFound
                          icon={<ShoppingCartIcon className="size-1/4 text-gray-300" />}
                          showIndication={false}
                          description="Your cart is empty"
                          message=""
                        >
                          <Button
                            onClick={() => {
                              setOpen(false);
                              navigate('/category');
                            }}
                            color="primary-white"
                            size="small"
                          >
                            Continue Shopping
                          </Button>
                        </NotFound>
                      )}
                    </div>
                  </div>
                </div>

                {Boolean(cart.cart_items.length) && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>Rs. {cart.total_price}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="/checkout"
                        className="flex items-center justify-center rounded-md border border-transparent bg-(--primary) px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-(--primary-dark)"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="font-medium text-(--primary) hover:text-(--primary-dark)"
                        >
                          Continue Shopping
                        </button>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
