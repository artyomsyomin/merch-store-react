import { createSelector } from 'reselect';
// import shopReducer from './shopReducer';

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
  createSelector([selectShopItems], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shopReducer) => shopReducer.isFetching
);

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  (shopReducer) => !!shopReducer.collections
);
