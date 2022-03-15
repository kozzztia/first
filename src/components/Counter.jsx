import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 2)
    }
    function decrement() {
        setCount(count - 2)
    }
    return (
        <section>
            <h1>№ = {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </section>
    );
};
export default Counter;