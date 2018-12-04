import React from 'react';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            Contact

            <button
                onClick={() => $props.push('/', {}, 'slideLeft')}
            >Go home (slideLeft)</button>

            <button
                onClick={() => $props.push('/', {}, 'slideUp')}
            >Go Home (slideUp)</button>

            <button
                onClick={() => $props.push('/', {}, 'slideDown')}
            >Go Home (slideDown)</button>
        </div>
    );
}