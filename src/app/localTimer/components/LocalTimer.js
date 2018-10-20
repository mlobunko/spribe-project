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

export const LocalTimer = () => (
  <StyledTimer marginRight={true}>
    <StyledTimerName>{'Locale timer:'}</StyledTimerName>
    <TimerContentContainer>
      <StyledShadow strokeColor={'rgb(79, 145, 1)'} />
      <StyledTrail />
      <ProgressBarContainer strokeColor={'rgb(79, 145, 1)'} />
      <ImageContainer />
      <EditContainer>
        <StyledPencil />
      </EditContainer>
    </TimerContentContainer>
  </StyledTimer>
);
LocalTimer.displayName = 'LocalTimer';

export default LocalTimer;
