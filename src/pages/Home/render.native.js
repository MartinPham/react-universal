import React from 'react';
import {Button, Text, TextInput, SafeAreaView as View} from "react-native";
import {Heading} from "./styles";


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <View>
            <Heading>Hello world!!! ops</Heading>
            <Text>text: {$props.text}</Text>
            <Text>altText: {$props.altText}</Text>

            <TextInput type="text" value={$props.text} onChangeText={(value) => $props.changeText(value)}/>

            <Button
                onPress={() => $props.changeText("I am from the Button")}
                title="Hey"
            />


            <Button
                onPress={() => $props.push('/about', {}, 'slideLeft')}
                title="Go about (slideLeft)" />

            <Button
                onPress={() => $props.push('/about', {}, 'slideUp')}
                title="Go about (slideUp)" />


            <Button
                onPress={() => $props.goBack()}
                title="Go Back" />

            <Button
                onPress={() => $props.goForward()}
                title="Go Forward" />
        </View>
    );
}