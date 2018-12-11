import React from "react";
import {TouchableOpacity} from "react-native";

export default class ManagedTouchableOpacity extends React.Component {
	ref = null;

	render() {
		return (
			<TouchableOpacity
				activeOpacity={1}
				ref={component => this.ref = component}
				onPress={(event) => {
					this.props.onPress(event, this.ref)
				}}
				style={this.props.style}
			>
				{this.props.children}
			</TouchableOpacity>
		);
	}
}