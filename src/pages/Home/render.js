import React from 'react';
import { Heading } from "./styles";
import {getBoundingRect} from "utils/dom";
    

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            <Heading>Hello world!!!</Heading>
			<hr/>
            <p>text selector: {$props.text}</p>
            <p>altText selector: {$props.altText}</p>
			<hr/>
			text selector & input: 
            <input type="text" value={$props.text} onChange={(event) => $props.changeText(event.target.value)}/>
			<hr/>

            <button
                onClick={() => $props.changeText("I am from the Button")}
            >Change text</button>
			<hr/>
			<p>object.text selector: {$props.objectText}</p>
			<p>object selector: {JSON.stringify($props.object)}</p>
			<hr/>
            <button
                onClick={() => $props.changeObjectText('zzz')}
            >Change Object Text</button>
			<hr/>
            <button
                onClick={() => $props.changeObject({
                		text: "omg",
						msg: Math.random()
                	})}
            >Change Object</button>
			<hr/>

			<b>state.count: {$state.count}</b>
			<br/>
            <button
                onClick={() => $this.setState(state => ({
					count: state.count + 1
				}))}
            >Increase State.count</button>
            <br/>
            <br/>

            <button
                onClick={(event) => {
                    const target = event.currentTarget;
                    let position = getBoundingRect(target);

                    $props.push('@Sample', {}, 'revealIn', position);
                }}
            >Go Sample page</button>

            <button
                onClick={() => $props.push('/', {}, 'flyDown')}
            >Go Home</button>
            <br/>
            <button
                onClick={() => $props.push('@Sample?a=b', {}, 'flyLeft')}
            >Go Sample (flyLeft)</button>
            <br/>

            <button
                onClick={() => $props.push('@Dashboard?x=1&y=2', {}, 'flyUp')}
            >Go dashboard (flyUp)</button>
            <br/>

            <button
                onClick={() => $props.push('@Login?z=3', {}, 'flyUp')}
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