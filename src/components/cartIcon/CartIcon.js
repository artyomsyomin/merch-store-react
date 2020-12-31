import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import { connect } from 'react-redux';

import { toggleCartIsHidden } from '../../redux/cart/cartActions';

import './CartIcon.scss';

const CartIcon = ({ toggleCartIsHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartIsHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartIsHidden: () => dispatch(toggleCartIsHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
