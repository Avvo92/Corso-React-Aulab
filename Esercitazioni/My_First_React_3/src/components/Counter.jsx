import { useState } from 'react';

export default function Counter(){
    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter((prev) => (prev + 1))
    }

    const decrementCounter = () => {
        setCounter((prev) => (prev - 1))
    }

    return(        
        <div id='counter_wrapper'>
            <span id='counter'>{counter}</span>
            <button type='button' id='increment_button' onClick={() => (incrementCounter())}>+</button>
            <button type='button' id='decrement_button' onClick={() => (decrementCounter())}>-</button>
        </div>        
    )
}