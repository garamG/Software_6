import React from 'react';
import NavigationBar from './gayeon/components/NavigationBar';
import {Routes, Route } from 'react-router-dom';
import Study from './gayeon/pages/Study';

function App() {
  return (
    <Study />
    //<NavigationBar />
    // <Routes>
    //   <Route exact path="/" element={<Main />} />
    //   <Route path="/about" element={<About />} />
    // </Routes>

   
  );
}

export default App;
