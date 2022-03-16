import React, { useState } from 'react'


const PostItem = () => {
    const [post, setPost] = useState(0);
    const [text, setText] = useState("JavasScript");
    function one() {
        setPost(post + 1)
    }
    function five() {
        console.log(setText)
    }
    return (
        <div>
            <div className="run">
                <h1 className="title">{text}</h1>
                <ul className="run__list">
                    <li className="run__item" onClick={one}> section {post}</li>
                    <li className="run__item">two</li>
                    <li className="run__item">three</li>
                    <li className="run__item">four</li>
                    <li className="run__item" onClick={five}>five</li>
                </ul>
            </div>
        </div>
    )
}

export default PostItem;