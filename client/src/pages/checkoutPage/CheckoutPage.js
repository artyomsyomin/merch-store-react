import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeButton from '../../components/stripeButton/StripeButton';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cartSelectors';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="text-warning">
        Please, use this test credit card info:
        <br />
        4242 4242 4242 4242 (Visa) — Any future date — Any 3 digits
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
