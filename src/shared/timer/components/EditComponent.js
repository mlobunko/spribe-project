import React from 'react';
import PropTypes from 'prop-types';

import { StyledEdit } from './styles';

export const EditComponent = ({ visibleModal, ...props }) => (
  <StyledEdit visibleModal={visibleModal} {...props} />
);
EditComponent.displayName = 'EditComponent';

export default EditComponent;

EditComponent.propTypes = {
  visibleModal: PropTypes.bool.isRequired
};
