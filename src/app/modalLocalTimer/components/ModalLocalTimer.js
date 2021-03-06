import React from 'react';

import imagesLib from 'shared/imagesLib';
import { StyledImagesContainer } from 'shared/modal/components/styles';
import { StyledFooter } from 'shared/modal/components/styles';

import ButtonContainer from './ButtonContainer';
import CircleImageContainer from './CircleImageContainer';
import HeaderContainer from './HeaderContainer';
import RodalContainer from './RodalContainer';

export const ModalLocalTimer = () => (
  <RodalContainer>
    <HeaderContainer />
    <StyledImagesContainer>
      {Object.keys(imagesLib).map(key => (
        <CircleImageContainer key={key} imageId={key.toString()} />
      ))}
    </StyledImagesContainer>
    <StyledFooter>
      <ButtonContainer />
    </StyledFooter>
  </RodalContainer>
);
ModalLocalTimer.displayName = 'ModalLocalTimer';

export default ModalLocalTimer;
