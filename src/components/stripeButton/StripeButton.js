import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I4ke9CJyp6XrS7WTPQx68rpk1IQZ1KX8epuhnADSV5lZe4xpVCDWlMZGTn40zSOtQC3EoIkjhu79A59naPb319L00uuya7ddK';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
  };
  return (
    <StripeCheckout
      label="BUY NOW"
      name="Merch Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is: $${price}`}
      amount={priceForStripe}
      panelLabel="BUY NOW"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
