import styled from 'styled-components';

import Logo from '../images/logo.svg';

export const StyledHeader = styled.div`
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid rgb(240, 240, 240);
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;
StyledHeader.displayName = 'StyledHeader';

export const StyledLeft = styled.div`
  background: url(${Logo}) no-repeat center center / contain;
  width: 5rem;
  height: 3rem;
`;
StyledLeft.displayName = 'StyledLeft';

export const StyledRight = styled.div`
  font-size: 0.7rem;
`;
StyledRight.displayName = 'StyledRight';

export const StyledLink = styled.a`
  text-decoration: none;
`;
