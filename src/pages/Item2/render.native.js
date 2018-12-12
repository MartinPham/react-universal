import React from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {ItemBanner} from "./styles";
import pho from "images/pho.jpg";
import sharedHistory from "../../utils/sharedHistory";
import TransitionContainer from "../../components/TransitionContainer";
import { Dimensions } from 'react-native';

const window = Dimensions.get('window');

export default ($this, $props, $state, $routes, ...$extra) => {


	// console.log('PAGE RENDER: Item 2', sharedHistory().history);


	const originPosition = sharedHistory().history.location.state.originPosition;



    return (
    	
        <View>

			<TransitionContainer
				from={{
					height: 0
				}}
				to={{
					height: 190
				}}
				duration={200}
				delay={400}
				style={{
					top: 0,
					left: 0
				}}
			>
				<View
					style={{
						backgroundColor: '#930000',
						width: '100%',
						height: '100%'
					}}
				/>
			</TransitionContainer>

			<TransitionContainer
				from={{
					...originPosition,
				}}
				to={{
					...originPosition,
					top: 90
				}}
				duration={400}
				delay={200}
				style={{
					position: 'absolute',

				}}
			>
				<ItemBanner
					source={pho}
					style={{
						width: '100%',
						height: '100%'
					}}
				/>
			</TransitionContainer>

			<TransitionContainer
				from={{
					top: window.height
				}}
				to={{
					top: 300
				}}
				duration={200}
				delay={500}
				style={{
					position: 'absolute',
					top: 500,
					left: 0,
					width: '100%'
				}}
			>
            <Text>Item</Text>
            <Button
                onPress={() => $props.push('/contact', {}, 'slideLeft')}
                title="Go Contact (slideLeft)" />

            <Button
                onPress={() => $props.push('/contact', {}, 'slideUp')}
                title="Go Contact (slideUp)" />


            <Button
                onPress={() => $props.goBack()}
                title="Go Back" />

            <Button
                onPress={() => $props.goForward()}
                title="Go Forward" />

            <Button
                onPress={() => $props.go(-2)}
                title="Go -2" />
            <Button
                onPress={() => $props.go(2)}
                title="Go +2" />
			</TransitionContainer>

        </View>
    );
}