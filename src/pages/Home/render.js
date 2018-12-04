import React from 'react';
import {Heading} from "./styles";


export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            <Heading>Hello world!!! ops kkk</Heading>
            <p>text: {$props.text}</p>
            <p>altText: {$props.altText}</p>

            <input type="text" value={$props.text} onChange={(event) => $props.changeText(event.target.value)}/>

            <button
                onClick={() => $props.changeText("I am from the Button")}
            >Hey</button>

            <button
                onClick={() => $props.push('/about', {}, 'slideLeft')}
            >Go about (slideLeft)</button>

            <button
                onClick={() => $props.push('/about', {}, 'slideUp')}
            >Go about (slideUp)</button>
        </div>
    );
}