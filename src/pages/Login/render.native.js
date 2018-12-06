import React from 'react';
import {Button, Text, TextInput, View} from "react-native";


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <View>
            <Button
                onPress={() => $props.updateUser({
                    name: 'Martin'
                }, 'nekot')}
                title="Login" />

        </View>
    );
}