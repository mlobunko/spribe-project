import styled from 'styled-components';
import Rodal from 'rodal';

import imageExit from '../images/imageExit.svg';

export const StyledCircleImageComponent = styled.div`
  background: ${props =>
    `url(${props.image}) no-repeat center center / cover;`};
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: ${props =>
    props.showGreenBorder
      ? '0.5rem solid rgb(103, 153, 19)'
      : '0.5rem solid rgb(59, 61, 68)'};
`;
StyledCircleImageComponent.displayName = 'StyledCircleImageComponent';

export const StyledRodal = styled(Rodal).attrs({
  customStyles: {
    color: 'white',
    width: '100%',
    height: '100%',
    padding: '0',
    background: 'rgb(31, 33, 40)',
    borderRadius: '2%',
    boxShadow: '0 0 1rem 0 rgb(31, 33, 40)'
  }
})`
  position: absolute;
  top: 20rem;
  margin-bottom: 5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 17rem;
  height: 36rem;

  @media (min-width: 1024px) {
    top: 50%;
    margin-bottom: 0;
    transform: translateY(-50%);
    left: 45%;
    width: 29rem;
    height: 21rem;
  }
`;
StyledRodal.displayName = 'StyledRodal';

export const StyledHeader = styled.div`
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Panton;
  font-size: 0.9rem;
  color: white;
  font-weight: 300;
  letter-spacing: 1px;
`;
StyledHeader.displayName = 'StyledHeader';

export const StyledHeaderLeft = styled.div`
  margin-left: 0.5rem;
`;
StyledHeaderLeft.displayName = 'StyledHeaderLeft';

export const StyledHeaderRight = styled.div`
  background: url(${imageExit}) no-repeat center center / contain;
  width: 1.3rem;
  height: 1.3rem;
  margin-right: 0.5rem;
`;
StyledHeaderRight.displayName = 'StyledHeaderRight';

export const StyledImagesContainer = styled.div`
  background: rgb(38, 40, 48);
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    height: 15rem;
  }
`;
StyledImagesContainer.displayName = 'StyledImagesContainer';

export const StyledFooter = styled.div`
  height: 4rem;
  line-height: 4rem;
  text-align: center;
`;
StyledFooter.displayName = 'StyledFooter';

export const StyledButton = styled.button`
  background: linear-gradient(rgb(120, 159, 18), rgb(64, 138, 18));
  color: white;
  letter-spacing: 0.5px;
  font-size: 0.7rem;
  border: none;
  padding: 0.45rem 2rem;
  cursor: pointer;
  border-radius: 2rem;
  box-shadow: 0 0.05rem 0 0.04rem rgb(41, 84, 10),
    0 0.375rem 0.625rem -0.25rem black;

  &:active {
    position: relative;
    top: 0.0625rem;
    box-shadow: none;
  }
`;
StyledButton.displayName = 'StyledButton';
