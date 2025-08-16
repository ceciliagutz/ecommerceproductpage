import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Navbar from './components/Navbar/navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <h1> Mi ecommerce</h1>
    </>
  );
}

export default App;
