import { createContext, type ReactNode, useEffect, useReducer } from "react";

import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";
import { cartReducer, type Item, type Order } from "../reducers/cart/reducer";
import type { FormInputs as OrderInfo } from "../components/Molecules/Form";
import { useNavigate } from "react-router-dom";

interface CartContextType {
  cart: Item[];
  orders: Order[];
  addItem: (item: Item) => void;
  removeItem: (itemId: Item["id"]) => void;
  decrementItemQuantity: (itemId: Item["id"]) => void;
  incrementItemQuantity: (itemId: Item["id"]) => void;
  checkout: (order: OrderInfo) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        try {
          const parsed = JSON.parse(storedStateAsJSON);
          if (parsed && typeof parsed === "object") {
            return {
              cart: Array.isArray(parsed.cart) ? parsed.cart : [],
              orders: Array.isArray(parsed.orders) ? parsed.orders : [],
            };
          }
        } catch (_) {
        }
      }

      return cartState;
    }
  );
  const navigate = useNavigate();

  const { cart, orders } = cartState;

  function addItem(item: Item) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: Item["id"]) {
    dispatch(removeItemAction(itemId));
  }

  function checkout(order: OrderInfo) {
    dispatch(checkoutCartAction(order, navigate));
  }

  function incrementItemQuantity(itemId: Item["id"]) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: Item["id"]) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState);

      localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
    }
  }, [cartState]);

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
