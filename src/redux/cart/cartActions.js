import { cartActionConstants } from './cartConstants';

export const toggleCartIsHidden = () => ({
  type: cartActionConstants.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: cartActionConstants.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: cartActionConstants.CLEAR_ITEM_FROM_CART,
  payload: item,
});
