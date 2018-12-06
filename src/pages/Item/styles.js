import styled from 'styled-components';

export const ItemBanner = styled.div`
  background-image: url(${props => props.image});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 250px;
`;
