import React from 'react';
import PropTypes from 'prop-types';

import imagesLib from 'shared/imagesLib';

import { StyledCircleImageComponent } from './styles';

export const CircleImageComponent = ({
  setAvatarId,
  showGreenBorder,
  imageId,
  ...props
}) => (
  <StyledCircleImageComponent
    showGreenBorder={showGreenBorder}
    image={imagesLib[imageId]}
    onClick={() => setAvatarId(imageId)}
    {...props}
  />
);
CircleImageComponent.displayName = 'CircleImageComponent';

export default CircleImageComponent;

CircleImageComponent.propTypes = {
  setAvatarId: PropTypes.func.isRequired,
  showGreenBorder: PropTypes.bool.isRequired,
  imageId: PropTypes.string.isRequired
};
