import React from 'react';
import Breadcrumb from '../elements/Breadcrumb';
import { ProductInterface } from '../../../types/productType';
import { CategoryInterface } from '../../../types/categoryType';
import ImageGallery from 'react-image-gallery';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import Typography from '../Typography';
import QuantityButton from '../elements/QuantityButton';
import { useAppSelector } from '../../../store/store';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/slice/CartSlice';

function HeroProduct({
  product,
  category
}: Readonly<{ product: ProductInterface; category: CategoryInterface }>) {
  const cart = useAppSelector((state) => state.cart).cart_items.filter(
    (item) => item.product_id === product.id
  );

  const dispatch = useDispatch();

  return (
    <div>
      <Breadcrumb
        current={product.name}
        list={
          category
            ? [
                {
                  title: category.name,
                  url: `/category/${category.slug}`
                }
              ]
            : []
        }
      />
      <div className="grid grid-cols-2 gap-8 py-16">
        <div className="col-span-2 border-r-1 border-(--gray-normal) flex flex-col gap-12 mr-2 md:col-span-1">
          <div>
            <Typography className="text-(--primary) font-bold mb-2" variant="s-title">
              {product.name}
            </Typography>
            <Typography variant="body-1">{product.description}</Typography>
          </div>
          <ul className="grid grid-cols-1 gap-y-2">
            {Object.keys(product.attributes).map((attribute) => (
              <li key={attribute} className="flex">
                <span className="w-40 font-semibold">
                  {attribute.charAt(0).toUpperCase() + attribute.slice(1)}:
                </span>
                <span className="flex-1">{product.attributes[attribute]}</span>
              </li>
            ))}
          </ul>

          <Typography className="font-semibold" variant="subTitle">
            <span className="text-red-600 line-through mr-4">Rs. {product.price}</span> Rs.{' '}
            {product.final_price}
          </Typography>
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
              className={`w-fit`}
            >
              Add to cart
            </Button>
          ) : (
            <div>
              <QuantityButton className="w-fit" productId={product.id} cart={cart[0]} />
              <Typography className="font-medium mt-4 text-(--gray-medium)" variant="body-1">
                Subtotal: Rs. {cart[0].subtotal}
              </Typography>
            </div>
          )}
        </div>
        <ImageGallery
          additionalClass="ml-2 relative col-span-2 md:col-span-1"
          items={product.images.map((image) => ({
            original: image,
            thumbnail: image
          }))}
          showPlayButton={false}
          renderItem={(item) => (
            <img
              className="w-full aspect-[4/3] object-cover"
              alt={item.thumbnail}
              src={item.thumbnail}
            />
          )}
          renderThumbInner={(item) => (
            <img
              className="w-40 aspect-square object-cover"
              alt={item.thumbnail}
              src={item.thumbnail}
            />
          )}
          renderRightNav={(onClick, disabled) => (
            <button
              onClick={onClick}
              disabled={disabled}
              className="group bg-gray-800 p-1/2 rounded-full absolute z-100 top-[50%] right-5 -m-2 flex items-center p-2 cursor-pointer"
            >
              <ArrowRightCircleIcon
                aria-hidden="true"
                className="size-6 shrink-0 text-white group-hover:text-gray-200"
              />
              <span className="sr-only">user profile</span>
            </button>
          )}
          renderLeftNav={(onClick, disabled) => (
            <button
              onClick={onClick}
              disabled={disabled}
              className="group bg-gray-800 p-1/2 rounded-full absolute z-100 top-[50%] left-5 -m-2 flex items-center p-2 cursor-pointer"
            >
              <ArrowLeftCircleIcon
                aria-hidden="true"
                className="size-6 shrink-0 text-white group-hover:text-gray-200"
              />
              <span className="sr-only">user profile</span>
            </button>
          )}
        />
      </div>
    </div>
  );
}

export default HeroProduct;
