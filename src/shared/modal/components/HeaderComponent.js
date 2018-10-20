import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeader, StyledHeaderLeft, StyledHeaderRight } from './styles';

export const HeaderComponent = ({ closeModal, ...props }) => (
  <StyledHeader {...props}>
    <StyledHeaderLeft>CHOOSE GAME AVATAR</StyledHeaderLeft>
    <StyledHeaderRight onClick={closeModal} />
  </StyledHeader>
);
HeaderComponent.displayName = 'HeaderComponent';

export default HeaderComponent;

HeaderComponent.propTypes = {
  closeModal: PropTypes.func.isRequired
};
