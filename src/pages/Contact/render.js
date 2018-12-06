import React from 'react';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            Contact

            <br/>
            <button
                onClick={() => $props.push('/', {}, 'slideLeft')}
            >Go home (slideLeft)</button>
            <br/>

            <button
                onClick={() => $props.push('/', {}, 'slideUp')}
            >Go Home (slideUp)</button>
            <br/>

            <button
                onClick={() => $props.push('/', {}, 'slideDown')}
            >Go Home (slideDown)</button>
        </div>
    );
}