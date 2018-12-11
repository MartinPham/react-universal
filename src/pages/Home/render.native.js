import React from 'react';
import {Image, Button, Text, TextInput, View, ImageBackground} from "react-native";
import {Heading, ItemImage} from "./styles";
import pho from "images/pho.jpg";

import TransitionView from 'components/TransitionView.native';




export default ($this, $props, $state, $routes, ...$extra) => {
	console.log('>>> Home render');
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Heading>Hello world!!! ops</Heading>
            <Text>text: {$props.text}</Text>
            <Text>altText: {$props.altText}</Text>

            <TextInput type="text" value={$props.text} onChangeText={(value) => $props.changeText(value)}/>

            <Button
                onPress={() => $props.changeText("I am from the Button")}
                title="Hey"
            />

            <ItemImage
                onPress={(event, ref) => {
                    ref.measureInWindow((x, y, width, height) => {
                        // console.log(x, y, width, height)

                        let position = {
                            top: y,
                            left: x,
                            width: width,
                            height: height,
                        };

                        $props.push('/item', {}, 'revealIn', position);
                    })
                }}
            >
                <Image source={pho} style={{
                    width: '100%',
                    height: '100%',
                }}/>
            </ItemImage>

			{/*<TransitionView*/}
				{/*from={{*/}
					{/*transform: {*/}
						{/*scale: 1*/}
					{/*}*/}
				{/*}}*/}
				{/*to={{*/}
					{/*transform: {*/}
						{/*scale: 0.5*/}
					{/*}*/}
				{/*}}*/}
				{/*duration={1000}*/}
				{/*delay={1000}*/}
			{/*>*/}
				{/*<View*/}
					{/*style={{*/}
						{/*width: '100%',*/}
						{/*height: '100%',*/}
						{/*backgroundColor: '#00ff00'*/}
					{/*}}>*/}

					{/*<Text>xxx</Text>*/}
				{/*</View>*/}
			{/*</TransitionView>*/}

            <Button
                onPress={() => $props.push('/about', {}, 'flyLeft')}
                title="Go about (flyLeft)" />

            <Button
                onPress={() => $props.push('/dashboard', {}, 'flyUp')}
                title="Go dashboard (flyUp)" />
            <Button
                onPress={() => $props.push('/login', {}, 'flyUp')}
                title="Go login (flyUp)" />


            <Button
                onPress={() => $props.goBack()}
                title="Go Back" />

            <Button
                onPress={() => $props.goForward()}
                title="Go Forward" />
        </View>
    );
}