import React from 'react';

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>

            Hello {$props.user && $props.user.get('name')}


            <button
                onClick={$props.logout}
            >Logout</button>
        </div>
    );
}