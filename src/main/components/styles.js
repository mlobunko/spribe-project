import styled, { injectGlobal } from 'styled-components';
import PropTypes from 'prop-types';

import fontPantonLight from '../fonts/Panton-Light.otf';
import fontRobotoRegular from '../fonts/Roboto-Regular.ttf';

injectGlobal`
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 400;

    @media (min-width: 2000px) {
      font-size: 150%;
    }
  }
`;

export const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  font-weight: 400;
  min-height: 100vh;

  @font-face {
    font-family: Roboto;
    src: url(${fontRobotoRegular});
    font-weight: 400;
  }

  @font-face {
    font-family: Panton;
    src: url(${fontPantonLight});
    font-weight: 300;
  }
`;
StyledMain.displayName = 'StyledMain';

export const StyledContent = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;
StyledContent.displayName = 'StyledContent';

export const StyledTimersContainer = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    height: 100%;
    width: 40%;
    justify-content: flex-end;
  }
`;
StyledTimersContainer.displayName = 'StyledTimersContainer';

export const StyledModalContent = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
  min-height: ${props => props.visibleModals && '40rem'};

  @media (min-width: 1024px) {
    min-height: 0;
  }
`;
StyledModalContent.displayName = 'StyledModalContent';

StyledModalContent.propTypes = {
  visibleModals: PropTypes.bool.isRequired
};
