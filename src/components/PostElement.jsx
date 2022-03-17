import React from 'react'


const PostElement = (props) => {
    console.log(props)
    return (

        <div>
            <div className="post">

                <div className="post__content">
                    <h1 className="title">{props.post.name} {props.post.id}</h1>
                    <div className="post__text">
                        <p>loremLorem text for fishing</p>
                    </div>
                </div>
                <button className="post__btn">{props.post.id} {props.post.number}</button>
            </div>
        </div>
    )
}

export default PostElement;

