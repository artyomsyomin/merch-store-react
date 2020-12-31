import React from 'react';

import { connect } from 'react-redux';

import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
