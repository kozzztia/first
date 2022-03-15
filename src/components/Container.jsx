import React, { useState } from "react";

const Container = function () {
    const [touch, setTouch] = useState(0)
    function increment() {
        setTouch(touch + 1)
    }
    function decrement() {
        setTouch(touch - 1)
    }
    return (
        <section className="red">
            <h1>Touch number = {touch}</h1>
            <button onMouseEnter={increment}>Increment</button>
            <button onMouseEnter={decrement}>Decrement</button>
        </section>
    );
};
export default Container;