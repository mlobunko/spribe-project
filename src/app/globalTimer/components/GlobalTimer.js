import React from 'react';

import { StyledTimer } from 'shared/timer/components/styles';
import { StyledTimerName } from 'shared/timer/components/styles';
import { StyledShadow } from 'shared/timer/components/styles';
import { StyledTrail } from 'shared/timer/components/styles';
import { StyledPencil } from 'shared/timer/components/styles';

import EditContainer from './EditContainer';
import ImageContainer from './ImageContainer';
import TimerContentContainer from './TimerContentContainer';
import ProgressBarContainer from './ProgressBarContainer';

export const GlobalTimer = () => (
  <StyledTimer>
    <StyledTimerName>{'Global timer:'}</StyledTimerName>
    <TimerContentContainer>
      <StyledShadow strokeColor={'rgb(219, 87, 0)'} />
      <StyledTrail />
      <ProgressBarContainer strokeColor={'rgb(219, 87, 0)'} />
      <ImageContainer />
      <EditContainer>
        <StyledPencil />
      </EditContainer>
    </TimerContentContainer>
  </StyledTimer>
);
GlobalTimer.displayName = 'GlobalTimer';

export default GlobalTimer;
