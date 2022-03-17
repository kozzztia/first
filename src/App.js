import React, { useState } from 'react';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton.jsx';
import MyInput from './components/UI/input/MyInput.jsx';


import './styles/App.css';


function App() {
  const [posts] = useState([
    { id: 'start', name: 'Element', number: 0, },
    { id: 'start1', name: 'Element', number: 1, },
    { id: 'start2', name: 'Element', number: 2, },
    { id: 'start3', name: 'Element', number: 3, },
    { id: 'start4', name: 'Element', number: 4, },
    { id: 'start5', name: 'Element', number: 5, },
  ])
  const [title, setTitle] = useState('');
  const addNewPost = () => {

  }


  return (
    <div className="App">
      <PostItem />
      <form>
        <MyInput
          value={title}
          type="text"
          placeholder="Post name" />
        <MyInput type="text" placeholder="Post description" />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>
      <PostList posts={posts} title="list 1" />
    </div>
  );
}

export default App;
