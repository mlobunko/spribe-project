import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid rgb(240, 240, 240);
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.6rem;
`;
StyledFooter.displayName = 'StyledFooter';

export const StyledLeft = styled.div`
  text-align: left;
`;
StyledLeft.displayName = 'StyledLeft';

export const StyledRight = styled.div`
  text-align: right;
`;
StyledRight.displayName = 'StyledRight';
