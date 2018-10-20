import React from 'react';

import { StyledHeader, StyledLeft, StyledLink, StyledRight } from './styles';

export const Header = () => (
  <StyledHeader>
    <StyledLeft />
    <StyledRight>
      <StyledLink
        ariaLabel="link to spribe website"
        href="https://www.spribe.co"
        target="_blank"
        rel="noopener"
      >
        spribe.co
      </StyledLink>
    </StyledRight>
  </StyledHeader>
);
Header.displayName = 'Header';

export default Header;
