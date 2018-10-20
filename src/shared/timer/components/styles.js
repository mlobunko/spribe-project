import styled from 'styled-components';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';

import pencilImage from '../images/pencil.svg';

export const StyledImage = styled.div`
  background: ${props =>
    `url(${props.image}) no-repeat center center / cover;`};
  width: 5rem;
  height: 5rem;
  margin: 0.5rem 0.5rem;
  z-index: -1;
  position: absolute;
  border-radius: 50%;
  border: 0.3rem solid #f9c623;
`;
StyledImage.displayName = 'StyledImage';

StyledImage.propTypes = {
  image: PropTypes.string.isRequired
};

export const StyledPencil = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: url(${pencilImage}) no-repeat center center / contain;
`;
StyledPencil.displayName = 'StyledPencil';

export const StyledProgressBar = styled(CircularProgressbar)`
  width: 97%;
  height: 97%;
  margin: 1.5% 1.5%;
  position: absolute;
  z-index: -2;
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
`;
StyledProgressBar.displayName = 'StyledProgressBar';

export const StyledTimer = styled.div`
  width: 6rem;
  height: 8rem;
  color: rgb(35, 42, 55);
  margin-right: ${props => props.marginRight && '3rem'};

  @media (min-width: 1024px) {
    margin-right: 5rem;
  }
`;
StyledTimer.displayName = 'StyledTimer';

StyledTimer.propTypes = {
  marginRight: PropTypes.bool
};

export const StyledTimerContent = styled.div`
  width: 100%;
  height: 6rem;
  position: relative;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;
StyledTimerContent.displayName = 'StyledTimerContent';

StyledTimerContent.propTypes = {
  onClick: PropTypes.func.isRequired
};

export const StyledTimerName = styled.div`
  width: 100%;
  height: 2rem;
  text-align: center;
  font-size: 0.8rem;
`;
StyledTimerName.displayName = 'StyledTimerName';

export const StyledTrail = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0.5rem 0.5rem;
  z-index: -3;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 0 0.2rem rgb(53, 55, 61);
`;
StyledTrail.displayName = 'StyledTrail';

export const StyledShadow = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 0.5rem 0.5rem;
  position: absolute;
  z-index: -4;
  border-radius: 50%;
  box-shadow: ${props => `0 0 2rem 0.4rem ${props.strokeColor}`};
`;
StyledShadow.displayName = 'StyledShadow';

StyledShadow.propTypes = {
  strokeColor: PropTypes.string.isRequired
};

export const StyledEdit = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.4rem;
  height: 4.4rem;
  margin: 0.8rem 0.8rem;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visibleModal ? '1' : '0')};
  border-radius: 50%;

  ${StyledTimerContent}:hover & {
    opacity: 1;
  }
`;
StyledEdit.displayName = 'StyledEdit';

StyledEdit.propTypes = {
  visibleModal: PropTypes.bool.isRequired
};
