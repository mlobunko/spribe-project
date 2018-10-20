import React from 'react';
import PropTypes from 'prop-types';

import imagesLib from 'shared/imagesLib';
import { StyledImage } from './styles';

export const ImageComponent = ({ avatarId, ...props }) => (
  <StyledImage image={imagesLib[avatarId]} {...props} />
);
ImageComponent.displayName = 'ImageComponent';

export default ImageComponent;

ImageComponent.propTypes = {
  avatarId: PropTypes.string.isRequired
};
