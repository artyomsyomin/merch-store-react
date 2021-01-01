import { createSelector } from 'reselect';

const selectShop = (state) => state.shopReducer;

export const selectShopItems = createSelector(
  [selectShop],
  (shopReducer) => shopReducer.collections
);

export const selectCollectionForPreview = createSelector(
  [selectShopItems],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (collections) => collections[collectionUrlParam]
  );
