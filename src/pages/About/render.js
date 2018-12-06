import React from 'react';


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            About
            <button
                onClick={() => $props.push('/contact', {}, 'flyLeft')}
            >Go Contact (flyLeft)</button>
            <br/>

            <button
                onClick={() => $props.push('/contact', {}, 'flyUp')}
            >Go Contact (flyUp)</button>

            <br/>


            <button
                onClick={() => $props.goBack()}
            >Go Back</button>
            <br/>

            <button
                onClick={() => $props.goForward()}
            >Go Forward</button>

            <br/>
            <button
                onClick={() => $props.go(-2)}
            >Go -2</button>
            <br/>
            <button
                onClick={() => $props.go(2)}
            >Go +2</button>

        </div>
    );
}