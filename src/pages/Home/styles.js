import styled from 'styled-components';

export const Heading = styled.h1`
	color: red;
	background: yellow;	
	font-size: 30px;
`;

export const ItemImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  width: 250px;
  height: 250px;
  margin: 60px;
  cursor: pointer;
  outline: none;
  
  transition: all 200ms;
  
  &:hover {
    /*transform: scale(1.1);*/
  }
  &:active {
    /*transform: scale(0.9);*/
  }
`;
