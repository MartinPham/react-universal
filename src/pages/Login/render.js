import React from 'react';

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>

            <button
                onClick={() => $props.updateUser({
                    name: 'Martin'
                }, 'nekot')}
            >Login</button>
            <button
                onClick={() => $props.push('/', {}, 'flyDown')}
            >Go Home</button>

        </div>
    );
}