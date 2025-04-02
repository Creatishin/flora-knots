import React from 'react';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../../types/cartType';
import { removeFromCart, updateQuantity } from '../../../store/slice/CartSlice';
import Typography from '../Typography';
import { cn } from '../../../utils/cnHelper';
import { motion, AnimatePresence } from 'framer-motion';

function QuantityButton({
  cart,
  productId,
  className
}: Readonly<{ className?: string; cart: CartItem; productId: string }>) {
  const dispatch = useDispatch();

  return (
    <div className={cn('flex gap-0 relative overflow-hidden', className)}>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            cart.quantity === 1
              ? removeFromCart(productId)
              : updateQuantity({
                  product_id: productId,
                  quantity: cart.quantity - 1
                })
          );
        }}
        color="primary-gold"
        size="small"
        className={`w-full rounded-none cartBtn-border-left`}
      >
        -
      </Button>
      <Typography className="text-(--secondary) p-3 bg-(--primary)" variant="caption">
        {/* When quantity increase i want to move quantity up and revel new value and when quantity decrease i want to move number down and revel new value */}
        <AnimatePresence mode="popLayout">
          <motion.span
            key={`${cart.name}-${cart.quantity}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {cart.quantity}
          </motion.span>
        </AnimatePresence>
      </Typography>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          dispatch(
            updateQuantity({
              product_id: productId,
              quantity: cart.quantity + 1
            })
          );
        }}
        color="primary-gold"
        size="small"
        className={`w-full rounded-none cartBtn-border-right`}
      >
        +
      </Button>
    </div>
  );
}

export default QuantityButton;
