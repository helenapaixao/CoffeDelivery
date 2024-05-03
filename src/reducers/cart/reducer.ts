import { produce } from "immer";
import { ActionsType, Actions } from "./actions";

export interface Item {
  id: string;
  quantity: number;
}

export interface Order {
  id: number;
  items: Item[];
}

export interface CartState {
  cart: Item[];
  orders: Order[];
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
   /*  case ActionsType.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item
        );
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity;
        } else {
          draft.cart.push(action.payload.item);
        }
      }); */

    case ActionsType.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemRemovedId = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        );
        draft.cart.splice(itemRemovedId, 1);
      });

    case ActionsType.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        );
        if (itemToIncrement) {
          itemToIncrement.quantity += 1;
        }
      });

    case ActionsType.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        );
        if (itemToDecrement) {
          itemToDecrement.quantity -= 1;
        }
      });
/* 
    case ActionsType.CHECKOUT_CART:
      return produce(state, (draft) => {
        const newOrder = {
          id: new Date().getTime(),
          items: state.cart,
          ...action.payload.order,
        };
        draft.orders.push(newOrder);
        draft.cart = [];
        action.payload.callback(`/orders/${newOrder.id}/sucess`);
      }); */

    default:
      return state;
  }
}
