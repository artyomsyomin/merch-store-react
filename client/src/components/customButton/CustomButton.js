import React from 'react';

import { CustomButtonContainer } from './CusomButtonStyles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
