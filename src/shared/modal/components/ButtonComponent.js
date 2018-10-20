import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

export const ButtonComponent = ({ saveModalEdit }) => (
  <StyledButton onClick={saveModalEdit}>SAVE</StyledButton>
);
ButtonComponent.displayName = 'ButtonComponent';

export default ButtonComponent;

ButtonComponent.propTypes = {
  saveModalEdit: PropTypes.func.isRequired
};
