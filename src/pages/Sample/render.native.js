import React from 'react';
import {Button, Text, TextInput, View} from "react-native";


export default ($this, $props, $state, $routes, ...$extra) => {
	console.log('>>> About render');
    return (
        <View>
            
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>About</Text>
            <Button
                onPress={() => $props.push('/contact', {}, 'slideLeft')}
                title="Go Contact (flyLeft)" />

            <Button
                onPress={() => $props.push('/contact', {}, 'flyUp')}
                title="Go Contact (flyUp)" />


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

        </View>
    );
}