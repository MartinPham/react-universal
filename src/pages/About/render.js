import React from 'react';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            About
            <button
                onClick={() => $props.push('/contact', {}, 'slideLeft')}
            >Go Contact (slideLeft)</button>

            <button
                onClick={() => $props.push('/contact', {}, 'slideUp')}
            >Go Contact (slideUp)</button>

            <br/>


            <button
                onClick={() => $props.goBack()}
            >Go Back</button>

            <button
                onClick={() => $props.goForward()}
            >Go Forward</button>

            <button
                onClick={() => $props.go(-2)}
            >Go -2</button>
            <button
                onClick={() => $props.go(2)}
            >Go +2</button>

        </div>
    );
}