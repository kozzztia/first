import React, { useState } from "react";

const Box = function () {
    const [count, countSet] = useState(0);
    const [count1, countSet1] = useState(0);
    const [count2, countSet2] = useState(0);
    const [count3, countSet3] = useState(0);
    function red() {
        countSet(count + 1);
        console.log("count = " + count)
    }
    function white() {
        countSet1(count1 + 2);
        console.log("count = " + count1)
    }
    function blue() {
        countSet2(count2 + 3);
        console.log("count = " + count2)
    }
    function green() {
        countSet3(count3 + 4);
        console.log("count = " + count3)
    }
    return (
        <section>
            <ul className="list">
                <li className="item" onClick={red}>{count}</li>
                <li className="item" onClick={white}>{count1}</li>
                <li className="item" onClick={blue}>{count2}</li>
                <li className="item" onClick={green}>{count3}</li>
            </ul>
        </section>
    );
};
export default Box;