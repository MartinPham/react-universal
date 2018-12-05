import React from 'react';
import {Button, Text, TextInput, View} from "react-native";


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <View>
            <Text>About</Text>
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

        </View>
    );
}