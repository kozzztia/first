import React, { useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
// import PostElement from './components/PostElement';
import './styles/App.css';
import './styles/List.css';


function App() {
  const [posts] = useState([
    { id: 'start', name: 'Element', number: 0, },
    { id: 'start1', name: 'Element', number: 1, },
    { id: 'start2', name: 'Element', number: 2, },
    { id: 'start3', name: 'Element', number: 3, },
    { id: 'start4', name: 'Element', number: 4, },
    { id: 'start5', name: 'Element', number: 5, },
  ])
  const [posts1] = useState([
    { id: 'start', name: 'item', number: 0, },
    { id: 'start1', name: 'item', number: 1, },
    { id: 'start2', name: 'item', number: 2, },
    { id: 'start3', name: 'item', number: 3, },
    { id: 'start4', name: 'item', number: 4, },
    { id: 'start5', name: 'item', number: 5, },
  ])


  return (
    <div className="App">
      <PostItem />
      <PostList posts={posts} title="list 1" />
      <PostList posts={posts1} title="list 2" />


    </div>
  );
}

export default App;
