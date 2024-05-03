import {NavigateFunction} from 'react-router-dom'
import { Item } from './reducer'



export enum ActionsType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions = 
  | { type: ActionsType.ADD_ITEM, payload: {item: Item} }
  | { type: ActionsType.REMOVE_ITEM, payload: { itemId: Item['id']} }
  | { type: ActionsType.INCREMENT_ITEM_QUANTITY, payload: { itemId: Item['id']} }
  | { type: ActionsType.DECREMENT_ITEM_QUANTITY, payload: { itemId: Item['id']} }
  | { type: ActionsType.CHECKOUT_CART, payload: {navigate: NavigateFunction} }


  export function AddItemAction(item: Item) {
    return {
      type: ActionsType.ADD_ITEM,
      payload: {
        item,
      },
    } satisfies Actions
  }

  export function RemoveItemAction(itemId: Item['id']) {
    return {
      type: ActionsType.REMOVE_ITEM,
      payload: {
        itemId
      },
    } satisfies Actions
  }

  export function incrementItemQuantityAction(itemId: Item['id']) {
    return {
      type: ActionsType.INCREMENT_ITEM_QUANTITY,
      payload: {
        itemId
      },
    } satisfies Actions
  }

  export function decrementItemQuantityAction(itemId: Item['id']) {
    return {
      type: ActionsType.DECREMENT_ITEM_QUANTITY,
      payload: {
        itemId
      },
    } satisfies Actions
  }

  export function checkoutCartAction(order: OrderInfo, callback: NavigateFunction,) {
    return {
      type: ActionsType.CHECKOUT_CART,
      payload: {
        order,
        callback,
      },
    } satisfies Actions
  }
