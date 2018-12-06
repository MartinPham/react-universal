import React from 'react';
import {Button, Text, TextInput, View} from "react-native";


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text>Hello {$props.user && $props.user.get('name')}</Text>
            <Button
                onPress={$props.logout}
                title="Logout" />

        </View>
    );
}