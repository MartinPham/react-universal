import styled from 'styled-components/native';
import React from "react";
import {TouchableOpacity, View} from "react-native";


class ManagedTouchableOpacity extends React.Component {
    ref = null;

    render() {
        return (
            <TouchableOpacity
                ref={component => this.ref = component}
                onPress={(event) => {
                    this.props.onPress(event, this.ref)
                }}
                style={this.props.style}
            >
                <View>
                    {this.props.children}
                </View>
            </TouchableOpacity>
        );
    }
}




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
