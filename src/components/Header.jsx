import React, { useState } from "react";

const Header = function () {
    const [count, setCount] = useState(0);
    function letOne() {
        setCount(count + 1)
    }
    function letTwo() {
        setCount(count - 1)
    }
    return (
        <div className="red">
            <h1>{count}</h1>
            <button onClick={letOne}>push</button>
            <button onClick={letTwo}>push</button>
        </div>

    );
}





export default Header