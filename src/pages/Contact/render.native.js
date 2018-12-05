import React from 'react';
import {Button, Text, TextInput, View} from "react-native";

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <View>
            <Text>Contact</Text>

            <Button
                onPress={() => $props.push('/', {}, 'slideLeft')}
                title="Go home (slideLeft)"/>

            <Button
                onPress={() => $props.push('/', {}, 'slideUp')}
                title="Go Home (slideUp)" />

            <Button
                onPress={() => $props.push('/', {}, 'slideDown')}
                title="Go Home (slideDown)" />
            <Button
                onPress={() => $props.goBack()}
                title="Go Back" />

            <Button
                onPress={() => $props.goForward()}
                title="Go Forward" />
        </View>
    );
}