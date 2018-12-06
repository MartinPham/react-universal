import React from 'react';

import { Header, Backdrop, ItemIcon, Container, Button } from "./styles";
import pho from 'images/pho.jpg';

export default ($this, $props, $state, $routes, ...$extra) => {
    return (
        <div>
            <Header>
                <Backdrop
                    id='backdrop'
                />
                <ItemIcon
                    image={pho}
                    id='destination'
                />
            </Header>

            <Container
                    id='container'
                >

            <Button
                delay={0}
                onClick={() => $props.push('/contact', {}, 'slideLeft')}
            >Go Contact (slideLeft)</Button>
            <br/>

            <Button
                delay={200}
                onClick={() => $props.push('/contact', {}, 'slideUp')}
            >Go Contact (slideUp)</Button>

            <br/>


            <Button
                delay={300}
                onClick={() => $props.goBack()}
            >Go Back</Button>
            <br/>

            <Button
                delay={300}
                onClick={() => $props.goForward()}
            >Go Forward</Button>
            <br/>

            <Button
                delay={400}
                onClick={() => $props.go(-2)}
            >Go -2</Button>
            <br/>

            <Button

                delay={500}
                onClick={() => $props.go(2)}
            >Go +2</Button>
            </Container>
        </div>
    );
}