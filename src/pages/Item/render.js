import React from 'react';

import { ItemBanner } from "./styles";
import pho from 'images/pho.jpg';

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            <ItemBanner
                image={pho}
            />
            Item ups zz
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