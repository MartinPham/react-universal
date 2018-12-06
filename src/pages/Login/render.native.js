import React from 'react';
import {Button, Text, TextInput, View} from "react-native";


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Button
                onPress={() => $props.updateUser({
                    name: 'Martin'
                }, 'nekot')}
                title="Login" />
            <Button
                onPress={() => $props.push('/', {}, 'flyDown')}
                title="Go Home" />

        </View>
    );
}