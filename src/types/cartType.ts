export interface CartItem {
  product_id: string;
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
  image: string;
}

export interface CartState {
  user_id: string;
  cart_items: CartItem[];
  total_price: number;
  currency: string;
  discount_applied: number;
  final_price: number;
}
