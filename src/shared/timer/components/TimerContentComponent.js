import React from 'react';
import PropTypes from 'prop-types';

import { StyledTimerContent } from './styles';

export const TimerContentComponent = ({ closeModal, openModal, ...props }) => (
  <StyledTimerContent
    onClick={() => {
      closeModal();
      openModal();
    }}
    {...props}
  />
);
TimerContentComponent.displayName = 'TimerContentComponent';

export default TimerContentComponent;

TimerContentComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired
};
