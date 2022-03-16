import React, { useState } from "react";

const Container = function (props) {
    const [touch, setTouch] = useState(0)
    function increment() {
        setTouch(touch + 1)
    }
    function decrement() {
        setTouch(touch - 1)
    }
    return (
        <section className="red">
            <h1>{props.post.body} {props.post.number} = {touch}</h1>
            <button style={{ background: 'yellow' }} onClick={increment}>Increment</button>
            <button style={{ background: 'orange' }} onClick={decrement}>Decrement</button>
        </section>
    );
};
export default Container;