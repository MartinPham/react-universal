import React from 'react';



export default ($this, $props, $state, $routes, ...$extra) => {

    return (
      <form
        keys
        vi
        focused
        left="5%"
        top="5%"
        width="90%"
        height="90%"
        border={{type: 'line'}}
        style={{bg: 'cyan', border: {fg: 'blue'}}}
      >
        <box width={6} height={3}>Name: </box>
        <textbox
          left={6}
          height={3}
          keys
          mouse
          inputOnFocus
        />
        <button
          top={10}
          left={6}
          height={3}
          keys
          mouse
          content="zzz"
        />
        <box top={3} height={3}>
        	xxx
        </box>
    </form>
    );
}