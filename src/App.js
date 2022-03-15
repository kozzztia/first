import React, { useState } from 'react';
import Counter from './components/Counter';
import Container from './components/Container';
import Box from './components/Box';
import Header from './components/Header';
// import ClassContainer from './components/ClassContainer';

function App() {

  return (
    <div className="App">
      <Header />
      <Counter />
      <Counter />
      <Box />
      <Counter />
      <Container />
      <Box />
    </div>
  );
}

export default App;
