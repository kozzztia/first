import React, { useState } from "react";


const Header = function (props) {
    console.log(props);

    return (
        <section className="post">
            <div className="post__content">
                <h1>{props.post.title}</h1>
                <p>{props.post.body}</p>

            </div>
            <div className="post__btns">
                <button className="post__btn">del</button>
            </div>
        </section>

    );
}





export default Header