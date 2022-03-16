import React from 'react'
import PostElement from './PostElement'

const PostList = ({ posts, title }) => {
    return (
        <div>
            <h1 style={{ color: 'red', textAlign: "center" }}>
                {title}
            </h1>
            {posts.map(post =>
                <PostElement post={post} key={post.id} />
            )}
        </div>
    )
};
export default PostList