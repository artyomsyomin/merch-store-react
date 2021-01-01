import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectShopItems } from '../../redux/shop/shopSelectors';

import PreviewCollection from '../../components/previewCollection/PreviewCollection';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(ShopPage);
