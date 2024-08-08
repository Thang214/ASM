import React, { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../../config/axios";
import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};
type CartItem = {
  id: number | string;
  name: string;
  description: string;
  price: number | string;
  // sale?: number
  short_description?: string;
  // category?: string;
  image: string;
  quantity: number;
};
interface ShoppingContextType {
  cartItems: CartItem[];
  addCartItem: (item: CartItem) => void; // Thay đổi ở đây
  removeCartItem: (id: number | string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  clearCart: () => void;
  cartQty?: number;
}

export const CartContextCT = createContext<ShoppingContextType>(
  {} as ShoppingContextType
);

const CartContext = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const cartQty = cartItems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );
  const clearCart = () => {
    setCartItems([]);
  };
  useEffect(() => {
    (async () => {
      const { data } = await axiosInstance.get(`carts`);
      setCartItems(data);
    })();
  }, []);
  const addCartItem = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, item];
      }
    });
  };

  const updateQuantity = async (name: string, quantity: number) => {
    const existingItem = cartItems.find((cartItem) => cartItem.name === name);
    if (existingItem) {
      const updatedItem = { ...existingItem, quantity };
      await axiosInstance.patch(`carts/${existingItem.id}`, {
        quantity: updatedItem.quantity,
      });
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === existingItem.id ? updatedItem : cartItem
        )
      );
    }
  };

  const removeCartItem = (id: number | string) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirm) {
      (async () => {
        await axiosInstance.delete(`carts/${id}`);
        setCartItems(cartItems.filter((item) => item.id !== id && id));
        toast.error("Đã xóa sản phẩm khỏi giỏ hàng.");
      })();
    }
  };
  return (
    <CartContextCT.Provider
      value={{
        cartItems,
        updateQuantity,
        addCartItem,
        removeCartItem,
        clearCart,
        cartQty,
      }}
    >
      {children}
    </CartContextCT.Provider>
  );
};

export default CartContext;
