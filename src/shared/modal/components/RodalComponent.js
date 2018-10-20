import React from 'react';
import PropTypes from 'prop-types';

import { StyledRodal } from './styles';

export const RodalComponent = ({ closeModal, visibleModal, ...props }) => (
  <StyledRodal
    onClose={closeModal}
    visible={visibleModal}
    showCloseButton={false}
    showMask={false}
    closeOnEsc={true}
    {...props}
  />
);
RodalComponent.displayName = 'RodalComponent';

export default RodalComponent;

RodalComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  visibleModal: PropTypes.bool.isRequired
};
