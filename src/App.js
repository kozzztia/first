import React, { useState } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import PostList from './components/PostList';
import './styles/App.css';


function App() {
  const [posts, setPosts] = useState([
    { id: 'one', number: "1", body: "container" },
    { id: 'two', number: "2", body: "container" },
    { id: 'three', number: "3", body: "container" },
    { id: 'four', number: "4", body: "container" },
    { id: 'five', number: "5", body: "container" },
  ])


  return (
    <div className="App">
      <Header post={{ id: 'post', title: "javaScript", body: "descriptions" }} />
      {posts.map(post =>
        <Container post={post} key={post.id} >red</Container>
      )}
      <PostList />
    </div>
  );
}

export default App;
