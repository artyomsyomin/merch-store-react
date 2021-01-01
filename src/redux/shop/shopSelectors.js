import { createSelector } from 'reselect';

const selectShop = (state) => state.shopReducer;

export const selectShopItems = createSelector(
  [selectShop],
  (shopReducer) => shopReducer.collections
);
