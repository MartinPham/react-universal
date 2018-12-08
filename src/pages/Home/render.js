import React from 'react';
import { Heading, ItemImage } from "./styles";
import pho from 'images/pho.jpg';
// import log from "utils/log";
import {getBoundingRect} from "utils/dom";

export default ($this, $props, $state, $routes, ...$extra) => {
	console.log('Home render', $props);
    return (
        <div>
            <Heading>Hello world!!! ops</Heading>
            <p>text: {$props.text}</p>
            <p>altText: {$props.altText}</p>
            <p>object.text: {$props.objectText}</p>

            <input type="text" value={$props.text} onChange={(event) => $props.changeText(event.target.value)}/>


            <button
                onClick={() => $props.changeText("I am from the Button")}
            >Hey</button>
			<br/>
            <button
                onClick={() => $props.changeObject({
					text: "xxx"
				})}
            >Hey Object</button>
			<br/>

            <button
                onClick={() => $props.changeAboutText("I am from Home")}
            >Hey About</button>
			<br/>

			<b>state: {$state.test1}</b>
			<br/>
            <button
                onClick={() => $this.setState({
					test1: "2"
				})}
            >Hey State</button>
            <br/>
            <br/>

            <ItemImage
                image={pho}
                onClick={(event) => {
                    const target = event.currentTarget;
                    let position = getBoundingRect(target);
                    // log(target, position);

                    $props.push('/item', {}, 'revealIn', position);
                }}
            />

            <button
                onClick={() => $props.push('/about', {}, 'flyLeft')}
            >Go about (flyLeft)</button>
            <br/>

            <button
                onClick={() => $props.push('/dashboard', {}, 'flyUp')}
            >Go dashboard (flyUp)</button>
            <br/>

            <button
                onClick={() => $props.push('/login', {}, 'flyUp')}
            >Go login (flyUp)</button>
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