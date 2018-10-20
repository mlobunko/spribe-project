import React from 'react';

import { StyledFooter, StyledLeft, StyledRight } from './styles';

export const Footer = () => (
  <StyledFooter>
    <StyledLeft>
      <div>SPRIBE</div>
      <div>Tartu mnt 83-701, 10115, Tallinn, Estonia</div>
    </StyledLeft>
    <StyledRight>
      <div>The company is registered in Estonia. Registration no.</div>
      <div>14540763</div>
    </StyledRight>
  </StyledFooter>
);
Footer.displayName = 'Footer';

export default Footer;
