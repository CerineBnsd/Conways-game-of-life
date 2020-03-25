import React, { useState, useEffect } from 'react';

export default function ClickCounter() {

    const clickHandler = ()=>{
      setCount(count + 1);
    }  

    const cleanUp = ()=>{
        document.title = `We have fini !`;
    }

    const effect = ()=>{
        document.title = `You clicked ${count} times !`;
        return cleanUp;
    }

    const [count ,setCount] = useState(0);
    useEffect(effect);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={clickHandler}>
          Click me
        </button>
      </div>
    );
  }

/**
 * Side Effects : data fetching, subscriptions, or manually changing the DOM from React components.
 */