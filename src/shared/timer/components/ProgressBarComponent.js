import React from 'react';
import PropTypes from 'prop-types';

import { getPercent } from '../model';
import { StyledProgressBar } from './styles';

export const ProgressBarComponent = ({
  duration,
  leftValue,
  strokeColor,
  ...props
}) => (
  <StyledProgressBar
    {...props}
    percentage={getPercent(duration, leftValue)}
    counterClockwise={true}
    strokeWidth={7}
    styles={{
      path: {
        stroke: `${strokeColor}`,
        strokeLinecap: 'butt'
      },
      trail: {
        stroke: `rgba(0, 0, 0, 0)`
      }
    }}
  />
);
ProgressBarComponent.displayName = 'ProgressBarComponent';

export default ProgressBarComponent;

ProgressBarComponent.propTypes = {
  duration: PropTypes.number.isRequired,
  leftValue: PropTypes.number.isRequired,
  strokeColor: PropTypes.string.isRequired
};
