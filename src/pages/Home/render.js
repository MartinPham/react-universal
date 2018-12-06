import React from 'react';
import { Heading, ItemImage } from "./styles";
import pho from 'images/pho.jpg';
import log from "utils/log";
import {getBoundingRect} from "utils/dom";

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            <Heading>Hello world!!! ops</Heading>
            <p>text: {$props.text}</p>
            <p>altText: {$props.altText}</p>

            <input type="text" value={$props.text} onChange={(event) => $props.changeText(event.target.value)}/>


            <button
                onClick={() => $props.changeText("I am from the Button")}
            >Hey</button>
            <br/>
            <br/>

            <ItemImage
                image={pho}
                onClick={(event) => {
                    const target = event.currentTarget;
                    let position = getBoundingRect(target);
                    log(target, position);

                    $props.push('/item', {}, 'revealIn', position);
                }}
            />

            <button
                onClick={() => $props.push('/about', {}, 'flyLeft')}
            >Go about (flyLeft)</button>
            <br/>

            <button
                onClick={() => $props.push('/about', {}, 'flyUp')}
            >Go about (flyUp)</button>
            <br/>

            <button
                onClick={() => $props.goBack()}
             >Go Back</button>
            <br/>

            <button
                onClick={() => $props.goForward()}
             >Go Forward</button>
            <br/>
        </div>
    );
}