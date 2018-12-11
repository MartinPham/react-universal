import styled from 'styled-components/native';
import React from "react";
import ManagedTouchableOpacity from 'components/ManagedTouchableOpacity.native';







export const Heading = styled.Text`
	color: red;
	background: yellow;	
	font-size: 30px;
`;

export const ItemImage = styled(ManagedTouchableOpacity)`
  width: 150px;
  height: 150px;
  margin: 20px;
`;
