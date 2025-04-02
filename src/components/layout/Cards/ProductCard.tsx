import React from 'react';
import Typography from '../../common/Typography';
import { ProductInterface } from '../../../types/productType';
import Button from '../../common/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slice/CartSlice';
import { useAppSelector } from '../../../store/store';
import '../../../styles/ProductCard.css';
import QuantityButton from '../../common/elements/QuantityButton';

export default function ProductCard({ product }: Readonly<{ product: ProductInterface }>) {
  const dispatch = useDispatch();
  const cart = useAppSelector((state) => state.cart).cart_items.filter(
    (item) => item.product_id === product.id
  );

  return (
    <div className="flex gap-2 group flex-col">
      <div
        className={`flex-1 group-hover:shadow-xl overflow-hidden cursor-pointer group bg-white shadow-md border-2 group-hover:border-2 border-box border-(--gray-light) group-hover:border-(--primary) justify-between rounded-xl relative flex flex-col`}
      >
        <a href={`/product/${product.slug}`}>
          <img
            alt={product.name}
            src={product.images[0]}
            className="aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75"
          />
          <Typography
            className={`mt-2 w-full font-medium text-center text-(--primary)`}
            variant="body-2"
          >
            {product.name}
          </Typography>
        </a>
        <div className="my-2 md:my-4  flex flex-col-reverse items-center gap-3 justify-between">
          <div className="flex items-center gap-1 md:gap-2">
            {product.discount > 0 && (
              <Typography className="line-through" variant="error">
                Rs. {product.price}
              </Typography>
            )}
            <Typography className={`font-medium text-(--primary)`} variant="caption">
              Rs. {product.final_price}
            </Typography>
          </div>
        </div>
      </div>
      {cart.length === 0 ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              addToCart({
                image: product.images[0],
                name: product.name,
                price: product.final_price,
                quantity: 1,
                product_id: product.id,
                subtotal: 1 * product.final_price
              })
            );
          }}
          color="primary-gold"
          size="small"
          className={`w-full`}
        >
          Add to cart
        </Button>
      ) : (
        <QuantityButton className="w-full" productId={product.id} cart={cart[0]} />
      )}
    </div>
  );
}
